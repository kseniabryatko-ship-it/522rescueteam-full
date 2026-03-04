import { Redis } from '@upstash/redis'
import { sendSubmissionsBatch } from './_mailer'

const kv = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
})

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
    if (req.method !== 'POST') return res.status(405).json({ ok: false })
    if (!await checkToken(req.headers['authorization'])) return res.status(401).json({ ok: false })
    try {
        const result = await sendSubmissionsBatch()
        return res.status(200).json({ ok: true, sent: result.sent })
    } catch (e) {
        return res.status(500).json({ ok: false, error: e.message })
    }
}