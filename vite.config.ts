import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { Resend } from 'resend';
import { defineConfig, type Plugin } from 'vite';

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getEnvConfig(): { resendApiKey: string; adminEmail: string; fromEmail: string } {
  let resendApiKey = process.env.RESEND_API_KEY || '';
  let adminEmail = process.env.ADMIN_EMAIL || 'info@finackle.com';
  let fromEmail = process.env.FROM_EMAIL || 'Finackle <website@finackle.com>';

  // Check if .env file exists and parse any unpopulated variables
  try {
    const envPath = path.resolve(process.cwd(), '.env');
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf8');
      const lines = content.split('\n');
      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;
        const eqIdx = trimmed.indexOf('=');
        if (eqIdx === -1) continue;
        const key = trimmed.slice(0, eqIdx).trim();
        let val = trimmed.slice(eqIdx + 1).trim();
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.slice(1, -1);
        }
        if (key === 'RESEND_API_KEY' && !resendApiKey) resendApiKey = val;
        if (key === 'ADMIN_EMAIL' && (!process.env.ADMIN_EMAIL || adminEmail === 'info@finackle.com')) adminEmail = val;
        if (key === 'FROM_EMAIL' && (!process.env.FROM_EMAIL || fromEmail === 'Finackle <website@finackle.com>')) fromEmail = val;
      }
    }
  } catch (err) {
    console.warn('[Env Reader Notice]:', err);
  }

  return { resendApiKey, adminEmail, fromEmail };
}

function buildAdminEmailHtml(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
  date?: string;
  adminEmail: string;
}): string {
  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safePhone = escapeHtml(data.phone || 'Not provided');
  const safeCompany = escapeHtml(data.company || 'Not provided');
  const safeService = escapeHtml(data.service || 'Finance Health Check & Diagnostic Review');
  const safeMessage = escapeHtml(data.message || 'No additional message provided.').replace(/\n/g, '<br/>');
  const submissionDate = data.date || new Date().toUTCString();

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>New Website Enquiry</title>
  <style>
    body { margin: 0; padding: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F6F8FC; color: #13215D; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #E5EAF2; overflow: hidden; box-shadow: 0 4px 20px rgba(19, 33, 93, 0.06); }
    .header { background-color: #13215D; padding: 28px 32px; color: #ffffff; }
    .header h1 { margin: 0 0 6px 0; font-size: 20px; font-weight: 800; letter-spacing: -0.5px; text-transform: uppercase; }
    .header p { margin: 0; font-size: 13px; color: #14CBC9; font-weight: 600; letter-spacing: 0.5px; }
    .content { padding: 32px; }
    .highlight-card { background-color: #EEF2FB; border-radius: 12px; padding: 18px 20px; margin-bottom: 24px; border-left: 4px solid #14CBC9; }
    .highlight-title { font-size: 17px; font-weight: 800; color: #13215D; margin-bottom: 4px; }
    .highlight-sub { font-size: 13px; color: #475569; }
    .data-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .data-table td { padding: 10px 0; border-bottom: 1px solid #F1F4F9; vertical-align: top; }
    .label { width: 130px; font-size: 11px; text-transform: uppercase; font-weight: 700; color: #667085; letter-spacing: 0.5px; }
    .value { font-size: 14px; font-weight: 600; color: #13215D; }
    .value a { color: #142360; text-decoration: underline; }
    .message-container { background: #F9FAFC; border: 1px solid #E5EAF2; border-radius: 10px; padding: 16px; font-size: 14px; line-height: 1.6; color: #334155; margin-top: 8px; }
    .footer { padding: 20px 32px; background: #FAFBFD; border-top: 1px solid #E5EAF2; font-size: 12px; color: #667085; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>NEW WEBSITE ENQUIRY</h1>
      <p>Finackle Finance &amp; Advisory Portal</p>
    </div>
    <div class="content">
      <div class="highlight-card">
        <div class="highlight-title">${safeName}</div>
        <div class="highlight-sub">Service Requested: ${safeService}</div>
      </div>

      <table class="data-table">
        <tr>
          <td class="label">Name:</td>
          <td class="value">${safeName}</td>
        </tr>
        <tr>
          <td class="label">Email:</td>
          <td class="value"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
        </tr>
        <tr>
          <td class="label">Phone:</td>
          <td class="value">${safePhone}</td>
        </tr>
        <tr>
          <td class="label">Company:</td>
          <td class="value">${safeCompany}</td>
        </tr>
        <tr>
          <td class="label">Service:</td>
          <td class="value"><strong>${safeService}</strong></td>
        </tr>
        <tr>
          <td class="label">Submitted:</td>
          <td class="value" style="color: #667085; font-size: 13px;">${submissionDate}</td>
        </tr>
      </table>

      <div style="font-size: 11px; text-transform: uppercase; font-weight: 700; color: #667085; letter-spacing: 0.5px; margin-bottom: 4px;">Message:</div>
      <div class="message-container">${safeMessage}</div>
    </div>
    <div class="footer">
      Sent automatically from the Finackle Website to ${escapeHtml(data.adminEmail)} via Resend.
    </div>
  </div>
</body>
</html>`;
}

function buildCustomerEmailHtml(data: { name: string; email: string; adminEmail: string }): string {
  const safeName = escapeHtml(data.name);
  const safeAdminEmail = escapeHtml(data.adminEmail);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Thank You for Contacting Finackle</title>
  <style>
    body { margin: 0; padding: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F6F8FC; color: #13215D; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #E5EAF2; overflow: hidden; box-shadow: 0 4px 20px rgba(19, 33, 93, 0.06); }
    .header { background-color: #13215D; padding: 28px 32px; color: #ffffff; text-align: left; }
    .header h1 { margin: 0 0 6px 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px; }
    .header p { margin: 0; font-size: 13px; color: #14CBC9; font-weight: 600; letter-spacing: 0.5px; }
    .content { padding: 32px; line-height: 1.7; font-size: 15px; color: #334155; }
    .salutation { font-size: 16px; font-weight: 700; color: #13215D; margin-bottom: 16px; }
    .notice-box { background: #EEF2FB; border-radius: 10px; padding: 18px 20px; border-left: 4px solid #142360; margin: 20px 0; font-size: 14px; color: #13215D; }
    .signoff { margin-top: 24px; color: #13215D; font-weight: 600; }
    .footer { padding: 20px 32px; background: #FAFBFD; border-top: 1px solid #E5EAF2; font-size: 12px; color: #667085; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>FINACKLE</h1>
      <p>Finance Leadership &amp; Strategic Advisory</p>
    </div>
    <div class="content">
      <div class="salutation">Dear ${safeName},</div>
      <p>Thank you for contacting Finackle.</p>
      <div class="notice-box">
        We have received your enquiry and our advisory team will review it and get back to you shortly.
      </div>
      <p>If you have any urgent financial reporting or advisory matters, you can also reach our team directly at <a href="mailto:${safeAdminEmail}" style="color: #142360; font-weight: 600;">${safeAdminEmail}</a> or on WhatsApp at +971 54 502 2747.</p>
      <div class="signoff">
        Regards,<br>
        <strong>Finackle Team</strong>
      </div>
    </div>
    <div class="footer">
      Finackle Financial Services &bull; Ajman Free Zone, United Arab Emirates &bull; <a href="https://finackle.com" style="color: #142360; text-decoration: none;">finackle.com</a>
    </div>
  </div>
</body>
</html>`;
}

function buildHealthCheckAdminHtml(data: {
  name: string;
  email: string;
  company?: string;
  score: number | string;
  bandTitle?: string;
  bandText?: string;
  risks?: string[];
  priorities?: string[];
  timeline?: string;
  date?: string;
  adminEmail: string;
}): string {
  const safeName = escapeHtml(data.name || 'Finance Leader');
  const safeEmail = escapeHtml(data.email);
  const safeCompany = escapeHtml(data.company || 'Not provided');
  const score = data.score ?? 0;
  const safeBandTitle = escapeHtml(data.bandTitle || 'Assessed');
  const safeTimeline = escapeHtml(data.timeline || '2–4 weeks');
  const submissionDate = data.date || new Date().toUTCString();

  const risksHtml = (data.risks && data.risks.length > 0)
    ? data.risks.map(r => `<li style="margin-bottom: 6px; color: #b45309;">⚠️ ${escapeHtml(r)}</li>`).join('')
    : '<li style="color: #047857;">✓ No critical risks flagged</li>';

  const prioritiesHtml = (data.priorities && data.priorities.length > 0)
    ? data.priorities.map(p => `<li style="margin-bottom: 6px; color: #13215D;">• ${escapeHtml(p)}</li>`).join('')
    : '<li>• General accounting and reporting review</li>';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>New Health Checked Client Lead</title>
  <style>
    body { margin: 0; padding: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F6F8FC; color: #13215D; }
    .container { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #E5EAF2; overflow: hidden; box-shadow: 0 4px 20px rgba(19, 33, 93, 0.06); }
    .header { background-color: #13215D; padding: 28px 32px; color: #ffffff; }
    .badge { display: inline-block; background: #1FD6CB; color: #0C1E3C; padding: 5px 12px; border-radius: 6px; font-size: 11px; font-weight: 800; letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 10px; }
    .header h1 { margin: 0 0 4px 0; font-size: 20px; font-weight: 800; letter-spacing: -0.5px; }
    .content { padding: 32px; }
    .score-card { background: #EEF2FB; border-radius: 12px; padding: 18px 22px; margin-bottom: 24px; border-left: 5px solid #14CBC9; }
    .score-big { font-size: 34px; font-weight: 800; color: #13215D; line-height: 1; }
    .data-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .data-table td { padding: 10px 0; border-bottom: 1px solid #F1F4F9; vertical-align: top; }
    .label { width: 140px; font-size: 11px; text-transform: uppercase; font-weight: 700; color: #667085; }
    .value { font-size: 14px; font-weight: 600; color: #13215D; }
    .section-title { font-size: 12px; text-transform: uppercase; font-weight: 800; color: #13215D; letter-spacing: 0.5px; margin: 18px 0 8px; }
    .box { background: #FAFBFD; border: 1px solid #E5EAF2; border-radius: 10px; padding: 14px 18px; margin-bottom: 16px; font-size: 13.5px; }
    .box ul { margin: 0; padding-left: 18px; }
    .footer { padding: 20px 32px; background: #FAFBFD; border-top: 1px solid #E5EAF2; font-size: 12px; color: #667085; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <span class="badge">Health Checked Client</span>
      <h1>NEW FINANCE HEALTH CHECK LEAD</h1>
      <p style="margin: 0; font-size: 13px; color: #14CBC9;">Lead Tracking &amp; Assessment Report</p>
    </div>
    <div class="content">
      <div class="score-card">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div>
            <div style="font-size: 11px; text-transform: uppercase; font-weight: 700; color: #667085;">Finance Health Score</div>
            <div style="font-size: 17px; font-weight: 800; color: #13215D; margin-top: 3px;">${safeBandTitle}</div>
          </div>
          <div class="score-big">${score}<span style="font-size: 17px; color: #667085; font-weight: 600;"> / 100</span></div>
        </div>
      </div>

      <table class="data-table">
        <tr>
          <td class="label">Lead Status:</td>
          <td class="value"><span style="background: rgba(31, 214, 203, 0.2); color: #0C1E3C; padding: 3px 8px; border-radius: 4px; font-weight: 800;">HEALTH CHECKED CLIENT</span></td>
        </tr>
        <tr>
          <td class="label">Client Name:</td>
          <td class="value">${safeName}</td>
        </tr>
        <tr>
          <td class="label">Work Email:</td>
          <td class="value"><a href="mailto:${safeEmail}" style="color: #142360; text-decoration: underline;">${safeEmail}</a></td>
        </tr>
        <tr>
          <td class="label">Company:</td>
          <td class="value">${safeCompany}</td>
        </tr>
        <tr>
          <td class="label">Estimated Fix:</td>
          <td class="value">${safeTimeline}</td>
        </tr>
        <tr>
          <td class="label">Submitted Date:</td>
          <td class="value" style="color: #667085; font-size: 13px;">${submissionDate}</td>
        </tr>
      </table>

      <div class="section-title">Key Risks Flagged:</div>
      <div class="box">
        <ul>${risksHtml}</ul>
      </div>

      <div class="section-title">Recommended Action Plan:</div>
      <div class="box">
        <ul>${prioritiesHtml}</ul>
      </div>
    </div>
    <div class="footer">
      Finackle Lead Intelligence • Delivered to ${escapeHtml(data.adminEmail)} via Resend
    </div>
  </div>
</body>
</html>`;
}

function buildHealthCheckClientHtml(data: {
  name: string;
  score: number | string;
  bandTitle?: string;
  bandText?: string;
  risks?: string[];
  priorities?: string[];
  timeline?: string;
  adminEmail: string;
}): string {
  const safeName = escapeHtml(data.name || 'Finance Leader');
  const score = data.score ?? 0;
  const safeBandTitle = escapeHtml(data.bandTitle || 'Assessed');
  const safeBandText = escapeHtml(data.bandText || '');
  const safeTimeline = escapeHtml(data.timeline || '2–4 weeks');
  const safeAdminEmail = escapeHtml(data.adminEmail);

  const risksHtml = (data.risks && data.risks.length > 0)
    ? data.risks.map(r => `<li style="margin-bottom: 8px; color: #b45309;">⚠️ ${escapeHtml(r)}</li>`).join('')
    : '<li style="color: #047857;">✓ No critical risks flagged in initial diagnostic.</li>';

  const prioritiesHtml = (data.priorities && data.priorities.length > 0)
    ? data.priorities.map(p => `<li style="margin-bottom: 8px; color: #13215D;">• ${escapeHtml(p)}</li>`).join('')
    : '<li>• General accounting and reporting review</li>';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Your Finackle Finance Health Report</title>
  <style>
    body { margin: 0; padding: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F6F8FC; color: #13215D; }
    .container { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #E5EAF2; overflow: hidden; box-shadow: 0 4px 20px rgba(19, 33, 93, 0.06); }
    .header { background-color: #13215D; padding: 32px; color: #ffffff; }
    .header h1 { margin: 0 0 6px 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px; }
    .header p { margin: 0; font-size: 13px; color: #14CBC9; font-weight: 600; letter-spacing: 0.5px; }
    .content { padding: 32px; font-size: 15px; line-height: 1.65; color: #334155; }
    .salutation { font-size: 17px; font-weight: 700; color: #13215D; margin-bottom: 16px; }
    .score-banner { background: #EEF2FB; border-radius: 12px; padding: 22px; margin: 24px 0; border-left: 5px solid #14CBC9; }
    .score-title { font-size: 13px; font-weight: 700; text-transform: uppercase; color: #667085; letter-spacing: 0.5px; }
    .score-row { display: flex; align-items: baseline; gap: 12px; margin: 6px 0 10px; }
    .score-num { font-size: 38px; font-weight: 800; color: #13215D; line-height: 1; }
    .score-band { font-size: 18px; font-weight: 700; color: #13215D; }
    .section-title { font-size: 13px; text-transform: uppercase; font-weight: 800; color: #13215D; letter-spacing: 0.5px; margin: 26px 0 10px; }
    .box { background: #FAFBFD; border: 1px solid #E5EAF2; border-radius: 10px; padding: 16px 20px; font-size: 14px; }
    .box ul { margin: 0; padding-left: 18px; }
    .cta-box { background: #13215D; border-radius: 12px; padding: 24px; color: #ffffff; text-align: center; margin-top: 30px; }
    .cta-btn { display: inline-block; background: #1FD6CB; color: #0C1E3C; padding: 12px 26px; border-radius: 999px; font-weight: 800; text-decoration: none; margin-top: 14px; font-size: 14px; }
    .footer { padding: 20px 32px; background: #FAFBFD; border-top: 1px solid #E5EAF2; font-size: 12px; color: #667085; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>FINACKLE</h1>
      <p>Finance Leadership &amp; Strategic Advisory</p>
    </div>
    <div class="content">
      <div class="salutation">Dear ${safeName},</div>
      <p>Thank you for completing the Finackle Finance Health Check. Below is your official diagnostic summary and initial roadmap.</p>
      
      <div class="score-banner">
        <div class="score-title">Your Overall Finance Health Score</div>
        <div class="score-row">
          <span class="score-num">${score}</span>
          <span style="color: #667085; font-size: 18px;">/ 100</span>
          <span class="score-band">• ${safeBandTitle}</span>
        </div>
        <div style="font-size: 13.5px; color: #475569;">${safeBandText}</div>
      </div>

      <div class="section-title">Key Focus Areas &amp; Risks:</div>
      <div class="box">
        <ul>${risksHtml}</ul>
      </div>

      <div class="section-title">Recommended 90-Day Action Plan:</div>
      <div class="box">
        <ul>${prioritiesHtml}</ul>
        <div style="margin-top: 10px; font-size: 12.5px; color: #667085;">Estimated stabilization timeline: <strong>${safeTimeline}</strong></div>
      </div>

      <div class="cta-box">
        <div style="font-size: 17px; font-weight: 800; margin-bottom: 6px;">Discuss Your Health Report with a Finance Specialist</div>
        <p style="margin: 0; font-size: 13px; color: rgba(255,255,255,0.85);">Book a complimentary 30-minute diagnostic review to address the gaps highlighted in this report.</p>
        <a class="cta-btn" href="https://wa.me/971545022747?text=Hello%20Finackle%2C%20I%20completed%20the%20Finance%20Health%20Check%20(Score%3A%20${score}%2F100)%20and%20would%20like%20to%20discuss%20my%20report.">Chat on WhatsApp &rarr;</a>
      </div>

      <p style="margin-top: 24px; font-size: 13.5px; color: #667085;">
        You can also reply directly to this email or write to <a href="mailto:${safeAdminEmail}" style="color: #142360; font-weight: 600;">${safeAdminEmail}</a>.
      </p>

      <div style="margin-top: 24px; color: #13215D; font-weight: 600;">
        Regards,<br>
        <strong>Finackle Advisory Team</strong>
      </div>
    </div>
    <div class="footer">
      Finackle Financial Services • Ajman Free Zone, United Arab Emirates • <a href="https://finackle.com" style="color: #142360; text-decoration: none;">finackle.com</a>
    </div>
  </div>
</body>
</html>`;
}

function parsePayload(body: string, contentType: string = ''): Record<string, any> {
  const data: Record<string, any> = {};
  if (!body) return data;

  if (contentType.includes('application/json') || body.trim().startsWith('{')) {
    try {
      return JSON.parse(body);
    } catch {
      // fallback
    }
  }

  // URL encoded or simple key-value pairs
  try {
    const params = new URLSearchParams(body);
    for (const [k, v] of params.entries()) {
      data[k] = v;
    }
    if (Object.keys(data).length > 0) return data;
  } catch {
    // fallback
  }

  return data;
}

function resendApiMiddleware(req: any, res: any, next: () => void) {
  const url = req.url ? req.url.split('?')[0] : '';
  const isEnquiryRoute =
    url === '/api/send-enquiry.php' ||
    url === '/api/send-enquiry' ||
    url === '/api/contact';

  if (!isEnquiryRoute) {
    return next();
  }

  res.setHeader('Content-Type', 'application/json; charset=UTF-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');

  const { resendApiKey, adminEmail, fromEmail } = getEnvConfig();

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method === 'GET') {
    res.statusCode = 200;
    res.end(
      JSON.stringify(
        {
          status: 'online',
          endpoint: url,
          message:
            'Finackle Resend Enquiry Handler is active. In production on Hostinger, this endpoint is executed natively by PHP.',
          resend_configured: Boolean(resendApiKey && resendApiKey.startsWith('re_')),
          resend_source: resendApiKey ? 'environment' : 'missing',
          admin_recipient: adminEmail,
          sender_address: fromEmail,
          timestamp: new Date().toISOString(),
        },
        null,
        2
      )
    );
    return;
  }

  if (req.method === 'POST') {
    let rawBody = '';
    req.on('data', (chunk: Buffer) => {
      rawBody += chunk.toString('utf8');
    });

    req.on('end', async () => {
      try {
        const contentType = req.headers['content-type'] || '';
        const data = parsePayload(rawBody, contentType);

        // Normalize fields
        const name = (data.name || data.fullName || data.first_name || '').trim();
        const email = (data.email || data.workEmail || '').trim();
        const phone = (data.phone || data.contactNumber || '').trim();
        const company = (data.company || data.business || data.companyName || '').trim();
        const service = (data.service || data.focus || 'Finance Health Check & Review').trim();
        const message = (data.message || `Clarity requested: ${service}`).trim();
        const hp = (data.hp_field || data.website || '').trim();

        // Health check specific fields
        const isHealthCheck =
          data.lead_type === 'health_checked_client' ||
          service.toLowerCase().includes('health check report') ||
          data.score !== undefined;

        const score = data.score ?? 0;
        const bandTitle = data.band_title || 'Assessed';
        const bandText = data.band_text || '';
        const risks = Array.isArray(data.risks)
          ? data.risks
          : typeof data.risks === 'string' && data.risks
          ? [data.risks]
          : [];
        const priorities = Array.isArray(data.priorities)
          ? data.priorities
          : typeof data.priorities === 'string' && data.priorities
          ? [data.priorities]
          : [];
        const timeline = data.timeline || '2–4 weeks';

        // 1. Check honeypot spam protection
        if (hp.length > 0) {
          res.statusCode = 200;
          res.end(JSON.stringify({ success: true, message: 'Enquiry submitted successfully.' }));
          return;
        }

        // 2. Validate required inputs
        if (!email) {
          res.statusCode = 400;
          res.end(
            JSON.stringify({
              success: false,
              message: 'Work email is required.',
            })
          );
          return;
        }

        if (!email.includes('@') || !email.includes('.')) {
          res.statusCode = 400;
          res.end(
            JSON.stringify({
              success: false,
              message: 'Please provide a valid work email address.',
            })
          );
          return;
        }

        // 3. Verify server-side Resend API key
        if (!resendApiKey || !resendApiKey.startsWith('re_')) {
          console.error('[Finackle Config Error] RESEND_API_KEY environment variable is not configured or invalid.');
          res.statusCode = 500;
          res.end(
            JSON.stringify({
              success: false,
              message:
                'Configuration error: RESEND_API_KEY is not configured in environment variables or is invalid.',
            })
          );
          return;
        }

        // 4. Construct templates
        const submissionDate = new Date().toLocaleString('en-US', {
          timeZone: 'Asia/Dubai',
          dateStyle: 'full',
          timeStyle: 'medium',
        });

        const effectiveName = name || company || 'Finance Leader';

        const adminSubject = isHealthCheck
          ? `[Health Checked Client] New Finance Health Report Lead - ${effectiveName} (Score: ${score}/100)`
          : `New Website Enquiry - ${effectiveName}`;

        const adminHtml = isHealthCheck
          ? buildHealthCheckAdminHtml({
              name: effectiveName,
              email,
              company,
              score,
              bandTitle,
              bandText,
              risks,
              priorities,
              timeline,
              date: submissionDate,
              adminEmail,
            })
          : buildAdminEmailHtml({
              name: effectiveName,
              email,
              phone,
              company,
              service,
              message,
              date: submissionDate,
              adminEmail,
            });

        const adminText = isHealthCheck
          ? `[HEALTH CHECKED CLIENT] NEW FINANCE HEALTH REPORT LEAD\n=======================================\nLead Status: Health Checked Client\nName: ${effectiveName}\nEmail: ${email}\nCompany: ${company || 'Not provided'}\nScore: ${score}/100 (${bandTitle})\nEstimated Fix: ${timeline}\nSubmitted: ${submissionDate}\n\nRisks:\n${risks.map(r => `- ${r}`).join('\n') || 'None'}\n\nPriorities:\n${priorities.map(p => `- ${p}`).join('\n') || 'General review'}\n=======================================\nSent automatically via Resend.`
          : `NEW WEBSITE ENQUIRY\n=======================================\nName: ${effectiveName}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nCompany: ${company || 'Not provided'}\nService: ${service}\nSubmitted: ${submissionDate}\n\nMessage:\n${message}\n=======================================\nSent automatically from the Finackle Website via Resend.`;

        // 5. Send admin notification email via Resend API
        const resend = new Resend(resendApiKey);

        let sendResult = await resend.emails.send({
          from: fromEmail,
          to: [adminEmail],
          replyTo: email,
          subject: adminSubject,
          html: adminHtml,
          text: adminText,
        });

        // If custom domain is not yet verified in Resend, automatically fallback to onboarding@resend.dev
        if (
          sendResult.error &&
          (sendResult.error.message?.includes('domain') ||
            sendResult.error.message?.includes('verified') ||
            sendResult.error.name === 'validation_error' ||
            (sendResult.error as any).statusCode === 403)
        ) {
          console.warn(`[Resend Sender Notice] Delivery with '${fromEmail}' failed. Retrying with fallback sender 'onboarding@resend.dev'...`);
          sendResult = await resend.emails.send({
            from: 'Finackle Enquiry <onboarding@resend.dev>',
            to: [adminEmail],
            replyTo: email,
            subject: adminSubject,
            html: adminHtml,
            text: adminText,
          });
        }

        // 6. Handle Resend API failure
        if (sendResult.error) {
          console.error('[Resend Error] Delivery failed:', sendResult.error);
          res.statusCode = 502;
          res.end(
            JSON.stringify({
              success: false,
              message: `Email delivery failed: ${sendResult.error.message || 'Resend error'}. Please check RESEND_API_KEY.`,
              error_details: sendResult.error,
            })
          );
          return;
        }

        // 7. Send customer confirmation / report email
        try {
          const customerSubject = isHealthCheck
            ? `Your Finackle Finance Health Report (Score: ${score}/100 - ${bandTitle})`
            : 'Thank You for Contacting Finackle';

          const customerHtml = isHealthCheck
            ? buildHealthCheckClientHtml({
                name: effectiveName,
                score,
                bandTitle,
                bandText,
                risks,
                priorities,
                timeline,
                adminEmail,
              })
            : buildCustomerEmailHtml({ name: effectiveName, email, adminEmail });

          const customerText = isHealthCheck
            ? `Dear ${effectiveName},\n\nThank you for completing the Finackle Finance Health Check.\n\nYour Score: ${score} / 100 (${bandTitle})\n${bandText}\n\nKey Risks:\n${risks.map(r => `- ${r}`).join('\n') || 'None'}\n\n90-Day Improvement Plan:\n${priorities.map(p => `- ${p}`).join('\n') || 'General review'}\n\nBook a call to discuss your report: https://wa.me/971545022747\n\nRegards,\nFinackle Advisory Team`
            : `Dear ${effectiveName},\n\nThank you for contacting Finackle.\nWe have received your enquiry and our advisory team will review it and get back to you shortly.\n\nRegards,\nFinackle Team\nhttps://finackle.com`;

          let custResult = await resend.emails.send({
            from: fromEmail,
            to: [email],
            replyTo: adminEmail,
            subject: customerSubject,
            html: customerHtml,
            text: customerText,
          });

          if (custResult.error) {
            await resend.emails.send({
              from: 'Finackle Team <onboarding@resend.dev>',
              to: [email],
              replyTo: adminEmail,
              subject: customerSubject,
              html: customerHtml,
              text: customerText,
            });
          }
        } catch (custErr) {
          console.warn('[Resend Customer Report Auto-Reply Notice]:', custErr);
        }

        // 8. Return successful response
        res.statusCode = 200;
        res.end(
          JSON.stringify({
            success: true,
            message: isHealthCheck
              ? 'Your Finance Health Report has been emailed to you and unlocked below!'
              : 'Thank you! Your request has been sent. We reply within one business day.',
            email_id: sendResult.data?.id,
          })
        );
      } catch (err: any) {
        console.error('[Server Internal Error]:', err);
        res.statusCode = 500;
        res.end(
          JSON.stringify({
            success: false,
            message: err?.message || 'Server error processing enquiry.',
          })
        );
      }
    });
    return;
  }

  res.statusCode = 405;
  res.end(JSON.stringify({ success: false, message: 'Method Not Allowed' }));
}

function phpApiDevPlugin(): Plugin {
  return {
    name: 'php-api-dev-emulator',
    configureServer(server) {
      server.middlewares.use(resendApiMiddleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(resendApiMiddleware);
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), phpApiDevPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
