import { Redis } from '@upstash/redis'
import { Resend } from 'resend'

const kv = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
})
const resend = new Resend(process.env.RESEND_API_KEY)

async function getJSON(key, def) {
    const val = await kv.get(key)
    if (!val) return def
    if (typeof val === 'string') return JSON.parse(val)
    return val
}

export async function sendSubmissionsBatch() {
    const settings = await getJSON('settings', {})
    if (!settings.email) throw new Error('Email не настроен в админ-панели')
    const list = await getJSON('submissions_list', [])
    let sent = 0

    for (const id of list) {
        const sub = await getJSON(id, null)
        if (!sub || sub.sent) continue

        const attachments = Object.entries(sub.csvBlocks || {}).map(([name, csv]) => ({
            filename: `${name}.csv`,
            content: Buffer.from('\uFEFF' + csv, 'utf-8').toString('base64'),
            type: 'text/csv'
        }))

        const fileLinks = Object.values(sub.attachments || {})
            .map(v => `<li><a href="${v.url}">${v.name}</a></li>`).join('')
        const fio = [sub.lastName, sub.firstName, sub.middleName].filter(Boolean).join(' ')

        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: settings.email,
            subject: `Розыскная карта: ${fio}`,
            html: `
        <h2 style="color:#1a2a4a">Розыскная карта 522 ЦПООП</h2>
        <table style="font-size:14px">
          <tr><td style="padding:4px 16px 4px 0;color:#666">ФИО:</td><td><b>${fio}</b></td></tr>
          <tr><td style="padding:4px 16px 4px 0;color:#666">Дата рождения:</td><td>${sub.birthDate||'—'}</td></tr>
          <tr><td style="padding:4px 16px 4px 0;color:#666">Позывной:</td><td>${sub.callSign||'—'}</td></tr>
          <tr><td style="padding:4px 16px 4px 0;color:#666">Телефон:</td><td>${sub.consentPhone||'—'}</td></tr>
          <tr><td style="padding:4px 16px 4px 0;color:#666">Дата подачи:</td><td>${new Date(sub.createdAt).toLocaleString('ru-RU')}</td></tr>
        </table>
        <p style="margin-top:16px">К письму прикреплены CSV-файлы по каждому разделу.</p>
        ${fileLinks ? `<p><b>Документы:</b></p><ul>${fileLinks}</ul>` : ''}
        <hr style="margin:20px 0;border:none;border-top:1px solid #ddd">
        <p style="font-size:11px;color:#999">522 ЦПООП — автоматическая рассылка</p>
      `,
            attachments
        })

        sub.sent = true
        sub.sentAt = new Date().toISOString()
        await kv.set(id, JSON.stringify(sub))
        sent++
    }

    const s = await getJSON('settings', {})
    s.lastSend = new Date().toLocaleString('ru-RU')
    await kv.set('settings', JSON.stringify(s))
    return { sent }
}