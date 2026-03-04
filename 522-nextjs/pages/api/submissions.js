import { Redis } from '@upstash/redis'

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
    if (req.method !== 'GET') return res.status(405).json({ ok: false })
    if (!await checkToken(req.headers['authorization'])) return res.status(401).json({ ok: false })
    const list = await getJSON('submissions_list', [])
    const submissions = []
    for (const id of list.slice(0, 50)) {
        const s = await getJSON(id, null)
        if (!s) continue
        submissions.push({
            id: s.id, createdAt: s.createdAt,
            lastName: s.lastName, firstName: s.firstName, middleName: s.middleName,
            birthDate: s.birthDate, callSign: s.callSign, consentPhone: s.consentPhone,
            sent: s.sent
        })
    }
    return res.status(200).json({ ok: true, submissions, total: list.length })
}