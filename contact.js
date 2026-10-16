// Vercel serverless function: sends contact form to the shop's email via Resend (https://resend.com)
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { name, email, phone, service, message, website } = req.body || {};
  if (website) return res.status(200).json({ ok: true }); // honeypot: bots fill this
  if (!name || !email || !message) return res.status(400).json({ error: 'Missing fields' });
  const esc = s => String(s || '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM || 'Hispana Website <onboarding@resend.dev>',
      to: [process.env.CONTACT_TO],
      reply_to: email,
      subject: `New website message from ${name}`,
      html: `<p><b>Name:</b> ${esc(name)}</p><p><b>Email:</b> ${esc(email)}</p><p><b>Phone:</b> ${esc(phone)}</p><p><b>Service:</b> ${esc(service)}</p><p>${esc(message).replace(/\n/g, '<br>')}</p>`
    })
  });
  return r.ok ? res.status(200).json({ ok: true }) : res.status(500).json({ error: 'Send failed' });
}
