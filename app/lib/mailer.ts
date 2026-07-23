import nodemailer from "nodemailer";

const transporterLeads = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER_LEADS,
    pass: process.env.SMTP_PASS_LEADS,
  },
});

const transporterContact = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER_CONTACT,
    pass: process.env.SMTP_PASS_CONTACT,
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

interface ClientConfirmationInput {
  to: string;
  prenom: string;
}

function pergolaConfirmationTemplate(prenom: string) {
  const firstName = prenom || "";

  return {
    subject:
      "Merci pour votre demande de devis – Votre projet de pergola bioclimatique",
    html: `
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:#1c1e22;max-width:560px;">
        <p>Bonjour ${firstName},</p>

        <p>Merci d'avoir fait confiance à <strong>Fleuron Industries</strong> pour votre projet de <strong>pergola bioclimatique</strong> !</p>

        <p>Nous avons bien reçu votre demande de devis.</p>

        <p>Un conseiller spécialisé vous recontacte sous <strong>48h</strong> pour étudier votre projet, établir un devis personnalisé adapté à votre terrasse et répondre à toutes vos questions.</p>

        <h3 style="color:#d6531a;font-size:16px;margin-top:20px;">Ce que vous propose Fleuron Industries</h3>
        <ul style="padding-left:18px;margin:10px 0;">
          <li>Lames orientables motorisées, aluminium premium</li>
          <li>Fabrication 100% sur-mesure, jusqu'à 7 x 5 x 3 m</li>
          <li>Pose par des équipes certifiées, produit certifié CE</li>
          <li>Options : éclairage LED, chauffage infrarouge, pilotage WiFi, capteurs météo</li>
        </ul>

        <p style="margin-top:18px;">Une question ? Contactez dès maintenant notre équipe au <strong>09 72 10 04 44</strong>.</p>

        <p style="margin-top:24px;">Merci pour votre confiance,<br>
        <strong>L'équipe Fleuron Industries</strong></p>
      </div>
    `,
  };
}

export async function sendClientConfirmationEmail({
  to,
  prenom,
}: ClientConfirmationInput) {
  if (!to) {
    console.warn("[MAIL CLIENT] Email manquant, envoi annulé");
    return;
  }

  const { subject, html } = pergolaConfirmationTemplate(prenom);

  const result = await transporterContact.sendMail({
    from: `"Ma Pergola by Fleuron" <${process.env.SMTP_USER_CONTACT}>`,
    to,
    subject,
    html,
  });

  console.log("[MAIL CLIENT SENT]", result.response || "OK");
  return result;
}
