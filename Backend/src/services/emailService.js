const nodemailer = require("nodemailer");

const buildTransport = () => {
  const { GOOGLE_MAIL_USER, GOOGLE_MAIL_APP_PASSWORD } = process.env;

  if (!GOOGLE_MAIL_USER || !GOOGLE_MAIL_APP_PASSWORD) {
    throw new Error(
      "Google mail settings are incomplete. Please update GOOGLE_MAIL_USER and GOOGLE_MAIL_APP_PASSWORD in the .env file."
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

const sendLeadAutoReply = async ({ to, name, service }) => {
  const transporter = buildTransport();
  const from = process.env.MAIL_FROM || process.env.GOOGLE_MAIL_USER;
  const selectedService = service || "your enquiry";

  await transporter.sendMail({
    from,
    to,
    subject: "Thank you for contacting ARP Associate Services",
    text: `Hi ${name},

Thank you for showing interest in us regarding ${selectedService}.
We will reach out to you within 24 hours.

Regards,
ARP Associate Services`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
        <p>Hi ${name},</p>
        <p>Thank you for showing interest in us regarding <strong>${selectedService}</strong>.</p>
        <p>We will reach out to you within <strong>24 hours</strong>.</p>
        <p>Regards,<br />ARP Associate Services</p>
      </div>
    `,
  });
};

module.exports = {
  sendLeadAutoReply,
};
