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

export default async function handler(req, res) {
    if (req.headers.authorization !== `Bearer ${process.env.CRON_SECRET}`)
        return res.status(401).json({ ok: false })

    const settings = await getJSON('settings', {})
    const [hh] = (settings.sendTime || '09:00').split(':').map(Number)
    const mskHour = (new Date().getUTCHours() + 3) % 24

    if (mskHour !== hh) return res.status(200).json({ ok: true, skipped: true })

    try {
        const result = await sendSubmissionsBatch()
        return res.status(200).json({ ok: true, sent: result.sent })
    } catch (e) {
        return res.status(500).json({ ok: false, error: e.message })
    }
}