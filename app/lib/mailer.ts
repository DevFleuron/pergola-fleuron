import nodemailer from "nodemailer";

const transporterLeads = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER_LEADS,
    pass: process.env.SMTP_PASS_LEADS,
  },
});

function tableFromObject(data: Record<string, unknown>) {
  const rows = Object.entries(data)
    .filter(([, v]) => v !== undefined && v !== null && v !== "")
    .map(
      ([key, value]) => `
        <tr>
          <td style="padding:8px 14px;border:1px solid #e5e6e3;font-weight:600;color:#4b5157;background:#f5f6f5;">${key}</td>
          <td style="padding:8px 14px;border:1px solid #e5e6e3;">${String(value)}</td>
        </tr>`,
    )
    .join("");

  return `<table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;width:100%;max-width:520px;">${rows}</table>`;
}

interface AdminLeadEmailInput {
  data: Record<string, unknown>;
  subject: string;
  to?: string;
}

export async function sendAdminLeadEmail({
  data,
  subject,
  to,
}: AdminLeadEmailInput) {
  const html = `<h2 style="font-family:Arial,sans-serif;color:#1c1e22;">${subject}</h2>${tableFromObject(
    data,
  )}`;

  const result = await transporterLeads.sendMail({
    from: process.env.SMTP_USER_LEADS,
    to: to || process.env.EMAIL_TO,
    subject,
    html,
  });

  console.log("[MAIL ADMIN SENT]", result.response || "OK");
  return result;
}
