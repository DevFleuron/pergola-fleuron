type CrmPayload = Record<string, string | number | boolean>;

export async function sendToCRM(payload: CrmPayload) {
  const webhookUrl = process.env.ZAPIER_WEBHOOK_URL;

  if (!webhookUrl) {
    throw new Error("ZAPIER_WEBHOOK_URL manquant dans l'environnement.");
  }

  const encoded = new URLSearchParams(
    Object.fromEntries(Object.entries(payload).map(([k, v]) => [k, String(v)])),
  ).toString();

  console.log("[CRM] Payload envoyé:", payload);

  let res: Response;
  try {
    res = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${process.env.CRM_TOKEN ?? ""}`,
      },
      body: encoded,
      signal: AbortSignal.timeout(8000),
    });
  } catch (err) {
    console.error("[CRM] FAIL (réseau):", err);
    throw err;
  }

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    console.error("[CRM] FAIL:", res.status, data);
    throw new Error(`CRM request failed with status ${res.status}`);
  }

  console.log("[CRM] OK:", res.status, data);
  return data;
}
