import { NextRequest, NextResponse } from "next/server";
import { sendToCRM } from "@/app/lib/crm";
import { sendAdminLeadEmail } from "@/app/lib/mailer";

export const runtime = "nodejs";

interface PergolaLeadPayload {
  nom: string;
  tel: string;
  cp: string;
  surface: string;
  optin: boolean;
  [key: string]: string | boolean;
}

const PHONE_RE = /^0[1-9](\s?\d{2}){4}$/;
const CP_RE = /^\d{5}$/;

function isValidLead(data: unknown): data is PergolaLeadPayload {
  if (typeof data !== "object" || data === null) return false;
  const d = data as Record<string, unknown>;

  return (
    typeof d.nom === "string" &&
    d.nom.trim().length >= 2 &&
    typeof d.tel === "string" &&
    PHONE_RE.test(d.tel.trim()) &&
    typeof d.cp === "string" &&
    CP_RE.test(d.cp.trim()) &&
    typeof d.surface === "string" &&
    d.surface.trim().length > 0
  );
}

// Même convention que sur fleuronindustries.fr : le premier mot du champ
// "nom complet" est traité comme prénom, le reste comme nom de famille.
function splitName(fullName: string) {
  const [prenom = "", ...rest] = fullName.trim().split(/\s+/);
  const nom = rest.join(" ") || prenom;
  return { prenom, nom };
}

function toCrmPayload(lead: PergolaLeadPayload) {
  const { prenom, nom } = splitName(lead.nom);

  return {
    last_name: nom,
    first_name: prenom,
    tel: lead.tel,
    postal_code: lead.cp,
    observation: `Surface envisagée : ${lead.surface}`,
    type_installation_vendus: "PERGOLA",
    type_logement: "Maison",
    source: "site-pergola-fleuron",
    rapport: "NOUVEAU PROSPECT",
    crm: "fleuron",
    rapport_doublon: "DOUBLON",
    deny_duplicates: 0,
    auto_call: 1,
    optin_communication: lead.optin ? 1 : 0,
  };
}

export async function POST(request: NextRequest) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Corps de requête invalide." },
      { status: 400 },
    );
  }

  if (!isValidLead(body)) {
    return NextResponse.json(
      { error: "Merci de vérifier les champs du formulaire." },
      { status: 422 },
    );
  }

  const lead: PergolaLeadPayload = {
    nom: body.nom.trim(),
    tel: body.tel.trim(),
    cp: body.cp.trim(),
    surface: body.surface.trim(),
    optin: Boolean(body.optin),
  };

  const subject = `Pergola – ${lead.nom} – ${lead.tel}`;

  const results = await Promise.allSettled([
    sendToCRM(toCrmPayload(lead)),
    sendAdminLeadEmail({ data: lead, subject }),
  ]);

  results.forEach((result, index) => {
    if (result.status === "rejected") {
      const label = index === 0 ? "CRM" : "Mail admin";
      console.error(`❌ Tâche "${label}" échouée:`, result.reason);
    }
  });

  // On répond 202 même si une intégration a échoué : le lead ne doit
  // jamais être perdu côté utilisateur, les erreurs restent en logs serveur.
  return NextResponse.json({ success: true });
}
