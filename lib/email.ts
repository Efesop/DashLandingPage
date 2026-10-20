// Transactional email through Resend, the same provider and sender the relay
// uses for sign-in codes (RESEND_API_KEY, RESEND_FROM). Only the recipient
// address and the message body go to Resend; never note content.

const RESEND_API = 'https://api.resend.com/emails';

export async function sendEmail(opts: { to: string; subject: string; text: string; html: string }): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[email] RESEND_API_KEY not configured');
    return false;
  }
  const from = process.env.RESEND_FROM || 'Dash Notes <auth@dashnote.io>';
  try {
    const res = await fetch(RESEND_API, {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from, ...opts }),
    });
    if (!res.ok) {
      console.error(`[email] Resend HTTP ${res.status}`);
      return false;
    }
    return true;
  } catch (err) {
    console.error('[email] send failed', err);
    return false;
  }
}
