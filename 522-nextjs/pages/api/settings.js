import { Redis } from '@upstash/redis'
import crypto from 'crypto'

const kv = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
})

const hash = s => crypto.createHash('sha256').update(s + (process.env.SECRET_SALT || 'salt')).digest('hex')
const genToken = () => crypto.randomBytes(32).toString('hex')

async function getJSON(key, def) {
    const val = await kv.get(key)
    if (!val) return def
    if (typeof val === 'string') return JSON.parse(val)
    return val
}

async function checkToken(t) {
    const tokens = await getJSON('active_tokens', [])
    return tokens.includes(t)
}

export default async function handler(req, res) {
    if (req.method === 'GET') {
        if (!await checkToken(req.headers['authorization'])) return res.status(401).json({ ok: false })
        const settings = await getJSON('settings', {})
        const list = await getJSON('submissions_list', [])
        let pending = 0, sent = 0
        for (const id of list.slice(0, 100)) {
            const s = await getJSON(id, {})
            s.sent ? sent++ : pending++
        }
        return res.status(200).json({
            ok: true,
            email: settings.email || '',
            sendTime: settings.sendTime || '09:00',
            totalCount: list.length,
            pendingCount: pending,
            sentCount: sent,
            lastSend: settings.lastSend || null
        })
    }

    if (req.method === 'POST') {
        const body = req.body
        if (body.action === 'login') {
            const settings = await getJSON('settings', {})
            const correctHash = settings.passwordHash || hash(process.env.ADMIN_PASSWORD || 'admin522')
            if (hash(body.password) !== correctHash) return res.status(401).json({ ok: false, error: 'Wrong password' })
            const token = genToken()
            const tokens = await getJSON('active_tokens', [])
            tokens.push(token)
            if (tokens.length > 10) tokens.shift()
            await kv.set('active_tokens', JSON.stringify(tokens), { ex: 86400 })
            return res.status(200).json({ ok: true, token })
        }
        if (body.action === 'save') {
            if (!await checkToken(req.headers['authorization'])) return res.status(401).json({ ok: false })
            const settings = await getJSON('settings', {})
            if (body.email) settings.email = body.email
            if (body.sendTime) settings.sendTime = body.sendTime
            if (body.password) settings.passwordHash = hash(body.password)
            await kv.set('settings', JSON.stringify(settings))
            return res.status(200).json({ ok: true })
        }
    }

    return res.status(405).json({ ok: false })
}