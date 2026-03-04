import { Redis } from '@upstash/redis'
import { put } from '@vercel/blob'

const kv = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
})

export const config = { api: { bodyParser: false } }

async function getJSON(key, def) {
    const val = await kv.get(key)
    if (!val) return def
    if (typeof val === 'string') return JSON.parse(val)
    return val
}

function makeCSV(headers, values) {
    const e = v => `"${String(v ?? '').replace(/"/g, '""')}"`
    return headers.map(e).join(',') + '\n' + values.map(e).join(',')
}

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ ok: false })
    try {
        const { default: formidable } = await import('formidable')
        const form = formidable({ maxFileSize: 15 * 1024 * 1024, keepExtensions: true })
        const [fields, files] = await form.parse(req)
        const f = k => fields[k]?.[0] ?? ''
        const id = `sub_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`

        const { readFileSync } = await import('fs')
        const attachments = {}
        for (const key of ['filePassport', 'fileMilitary', 'filePhoto', 'fileOther']) {
            const file = files[key]?.[0]
            if (file) {
                const buf = readFileSync(file.filepath)
                const blob = await put(`${id}/${key}_${file.originalFilename}`, buf, {
                    access: 'public',
                    contentType: file.mimetype
                })
                attachments[key] = { url: blob.url, name: file.originalFilename }
            }
        }

        const csvBlocks = {
            '01_kontaktnaya_informaciya': makeCSV(['Фамилия','Имя','Отчество','Дата рождения','Личный номер'],[f('lastName'),f('firstName'),f('middleName'),f('birthDate'),f('personalNumber')]),
            '02_adres': makeCSV(['Фактический адрес','Регистрация по паспорту'],[f('actualAddress'),f('registrationAddress')]),
            '03_voinskaya_sluzhba': makeCSV(['Дата призыва','Воинская часть','Позывной'],[f('draftDate'),f('militaryUnit'),f('callSign')]),
            '04_vneshnost': makeCSV(['Форма лица','Лоб (высота)','Лоб (профиль)','Нос','Подбородок','Уши'],[f('face'),f('foreheadH'),f('foreheadP'),f('nose'),f('chin'),f('ear')]),
            '05_osobye_primety': makeCSV(['Дата контакта','Местонахождение','Особые приметы'],[f('lastContactDate'),f('lastLocation'),f('specialMarks')]),
            '06_fizicheskie_dannye': makeCSV(['Рост','Вес','Размер обуви','Телосложение'],[f('height'),f('weight'),f('shoeSize'),f('build')]),
            '07_dna': makeCSV(['Информация о ДНК'],[f('dnaInfo')]),
            '08_dopolnitelno': makeCSV(['Дополнительно'],[f('additionalInfo')]),
            '09_zubnaya_formula': makeCSV(['Верхний ряд','Нижний ряд'],[f('dentalTop'),f('dentalBot')]),
            '11_soglasie': makeCSV(['ФИО заявителя','Адрес','Телефон'],[f('consentName'),f('consentAddress'),f('consentPhone')])
        }

        const submission = {
            id, createdAt: new Date().toISOString(), sent: false,
            lastName: f('lastName'), firstName: f('firstName'), middleName: f('middleName'),
            birthDate: f('birthDate'), callSign: f('callSign'), consentPhone: f('consentPhone'),
            csvBlocks, attachments
        }

        await kv.set(id, JSON.stringify(submission), { ex: 60 * 60 * 24 * 365 })
        const list = await getJSON('submissions_list', [])
        list.unshift(id)
        await kv.set('submissions_list', JSON.stringify(list))
        return res.status(200).json({ ok: true, id })
    } catch (e) {
        console.error(e)
        return res.status(500).json({ ok: false, error: e.message })
    }
}