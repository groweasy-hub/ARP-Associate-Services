const nodemailer = require("nodemailer");

const buildTransport = () => {
  const { GOOGLE_MAIL_USER, GOOGLE_MAIL_APP_PASSWORD } = process.env;

  if (!GOOGLE_MAIL_USER || !GOOGLE_MAIL_APP_PASSWORD) {
    throw new Error(
      "GOOGLE_MAIL_USER and GOOGLE_MAIL_APP_PASSWORD must be set in .env"
    );
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: GOOGLE_MAIL_USER,
      pass: GOOGLE_MAIL_APP_PASSWORD,
    },
  });
};

/* ── Admin notification template ── */
const adminHtml = ({ name, email, phone, company, service, message }) => `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/></head>
<body style="margin:0;padding:0;background:#07111a;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#07111a;padding:40px 16px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;background:#0d1722;border-radius:20px;overflow:hidden;border:1px solid rgba(0,200,150,0.18);">

        <tr>
          <td style="background:linear-gradient(135deg,#00c896,#00a67e);padding:30px 36px;">
            <p style="margin:0 0 6px;font-size:11px;color:#04110d;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;">ARP Associate Services</p>
            <h1 style="margin:0;font-size:22px;color:#04110d;font-weight:800;">New Enquiry Received</h1>
          </td>
        </tr>

        <tr>
          <td style="padding:28px 36px;">
            <p style="margin:0 0 20px;font-size:15px;color:#aab6c5;line-height:1.7;">A new contact form submission has been received. Details below.</p>

            ${[
              { label: "Full Name",    value: name },
              { label: "Email",        value: email },
              { label: "Phone",        value: phone   || "Not provided" },
              { label: "Company",      value: company || "Not provided" },
              { label: "Service",      value: service || "Not specified" },
            ].map(row => `
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:10px;">
              <tr><td style="background:#152637;border-radius:12px;padding:13px 18px;">
                <p style="margin:0 0 3px;font-size:11px;color:#00c896;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;">${row.label}</p>
                <p style="margin:0;font-size:15px;color:#f5f7fa;font-weight:500;">${row.value}</p>
              </td></tr>
            </table>`).join("")}

            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
              <tr><td style="background:#152637;border-radius:12px;padding:13px 18px;">
                <p style="margin:0 0 6px;font-size:11px;color:#00c896;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;">Message</p>
                <p style="margin:0;font-size:15px;color:#f5f7fa;line-height:1.75;white-space:pre-wrap;">${message}</p>
              </td></tr>
            </table>

            <table cellpadding="0" cellspacing="0">
              <tr><td style="background:linear-gradient(90deg,#00c896,#00a67e);border-radius:999px;">
                <a href="mailto:${email}" style="display:inline-block;padding:13px 28px;font-size:14px;font-weight:700;color:#04110d;text-decoration:none;">Reply to ${name}</a>
              </td></tr>
            </table>
          </td>
        </tr>

        <tr>
          <td style="padding:16px 36px;border-top:1px solid rgba(255,255,255,0.06);">
            <p style="margin:0;font-size:12px;color:#6b7a8c;">Auto-generated from the contact form on <strong style="color:#aab6c5;">arpassociateservices.com</strong></p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

/* ── User confirmation template ── */
const userHtml = ({ name, service }) => `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/></head>
<body style="margin:0;padding:0;background:#07111a;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#07111a;padding:40px 16px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;background:#0d1722;border-radius:20px;overflow:hidden;border:1px solid rgba(0,200,150,0.18);">

        <tr>
          <td style="background:linear-gradient(135deg,#00c896,#00a67e);padding:34px 36px 28px;">
            <p style="margin:0 0 6px;font-size:11px;color:#04110d;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;">ARP Associate Services</p>
            <h1 style="margin:0;font-size:24px;color:#04110d;font-weight:800;">Thank You, ${name}!</h1>
          </td>
        </tr>

        <tr>
          <td align="center" style="padding:26px 36px 0;">
            <table cellpadding="0" cellspacing="0">
              <tr><td style="background:rgba(0,200,150,0.1);border:1px solid rgba(0,200,150,0.25);border-radius:999px;padding:10px 22px;">
                <p style="margin:0;font-size:14px;color:#00c896;font-weight:700;">&#10003;&nbsp; Enquiry Received</p>
              </td></tr>
            </table>
          </td>
        </tr>

        <tr>
          <td style="padding:24px 36px 32px;">
            <p style="margin:0 0 12px;font-size:16px;color:#f5f7fa;font-weight:600;line-height:1.5;">
              We've received your enquiry${service ? ` regarding <span style="color:#00c896;">${service}</span>` : ""} and will reach out to you within <span style="color:#00c896;">24 business hours</span>.
            </p>
            <p style="margin:0 0 24px;font-size:15px;color:#aab6c5;line-height:1.8;">
              Our team is reviewing your message. Feel free to reach us directly in the meantime.
            </p>

            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:22px;">
              <tr><td style="background:#152637;border-radius:16px;padding:20px 22px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr><td style="padding-bottom:12px;">
                    <p style="margin:0 0 3px;font-size:11px;color:#00c896;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;">Phone</p>
                    <a href="tel:+917013785840" style="font-size:14px;color:#f5f7fa;text-decoration:none;">+91 70137 85840</a>
                  </td></tr>
                  <tr><td style="padding:12px 0;border-top:1px solid rgba(255,255,255,0.06);">
                    <p style="margin:0 0 3px;font-size:11px;color:#00c896;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;">Email</p>
                    <a href="mailto:arpassociateshyd@gmail.com" style="font-size:14px;color:#f5f7fa;text-decoration:none;">arpassociateshyd@gmail.com</a>
                  </td></tr>
                  <tr><td style="padding-top:12px;border-top:1px solid rgba(255,255,255,0.06);">
                    <p style="margin:0 0 3px;font-size:11px;color:#00c896;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;">Office</p>
                    <p style="margin:0;font-size:14px;color:#aab6c5;line-height:1.6;">1-11-122, Shyamlal Buildings, Begumpet,<br/>Hyderabad Telangana 500016, India</p>
                  </td></tr>
                </table>
              </td></tr>
            </table>

            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
              <tr><td style="background:rgba(0,200,150,0.06);border:1px solid rgba(0,200,150,0.12);border-radius:14px;padding:16px 20px;">
                <p style="margin:0 0 8px;font-size:11px;color:#00c896;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;">Our Services</p>
                <p style="margin:0;font-size:14px;color:#aab6c5;line-height:1.8;">Accounting &amp; Bookkeeping &nbsp;·&nbsp; GST &amp; TDS &nbsp;·&nbsp; Payroll &nbsp;·&nbsp; Income Tax &nbsp;·&nbsp; Compliance Advisory &nbsp;·&nbsp; Business Advisory</p>
              </td></tr>
            </table>

            <p style="margin:0;font-size:14px;color:#6b7a8c;line-height:1.8;">
              Warm regards,<br/>
              <strong style="color:#aab6c5;">Team ARP Associate Services</strong><br/>
              <span style="color:#00c896;">CA Anoop Kumar Shah</span>, Director &amp; Chairman
            </p>
          </td>
        </tr>

        <tr>
          <td style="padding:16px 36px;background:#0a1520;border-top:1px solid rgba(255,255,255,0.06);">
            <p style="margin:0;font-size:11px;color:#6b7a8c;text-align:center;line-height:1.7;">
              &copy; ${new Date().getFullYear()} ARP Associate Services. All Rights Reserved.<br/>
              GSTIN: 36AAPFA6860R1ZJ &nbsp;|&nbsp; Begumpet, Hyderabad
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

/* ── Main export ── */
const sendLeadAutoReply = async ({ to, name, email, phone, company, service, message }) => {
  const transporter = buildTransport();
  const from = process.env.MAIL_FROM || `"ARP Associate Services" <${process.env.GOOGLE_MAIL_USER}>`;
  const adminEmail = process.env.GOOGLE_MAIL_USER;

  // 1. Notify admin with full lead details
  await transporter.sendMail({
    from,
    to: adminEmail,
    replyTo: to,
    subject: `New Enquiry from ${name}`,
    html: adminHtml({ name, email: to, phone, company, service, message }),
  });

  // 2. Confirm to the user
  await transporter.sendMail({
    from,
    to,
    subject: "We've received your enquiry – ARP Associate Services",
    html: userHtml({ name, service }),
  });
};

module.exports = { sendLeadAutoReply };
