"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      nom: String(formData.get("nom") ?? "").trim(),
      tel: String(formData.get("tel") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      cp: String(formData.get("cp") ?? "").trim(),
      surface: String(formData.get("surface") ?? "").trim(),
      optin: formData.get("optin") === "on",
    };

    try {
      const res = await fetch("/api/pergola-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Erreur lors de l'envoi.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Une erreur est survenue, merci de réessayer.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="card-form success-msg">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle
            cx="12"
            cy="12"
            r="11"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M8 12.5l2.5 2.5 5-5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h3>Merci, votre demande est enregistrée.</h3>
        <p>
          Un conseiller Fleuron vous recontacte sous 48h pour votre projet de
          pergola.
        </p>
      </div>
    );
  }

  return (
    <form className="card-form" onSubmit={handleSubmit} noValidate>
      <div className="field-row">
        <div className="field">
          <label htmlFor="nom">Nom &amp; prénom</label>
          <input
            type="text"
            id="nom"
            name="nom"
            required
            placeholder="Jean Dupont"
          />
        </div>
        <div className="field">
          <label htmlFor="tel">Téléphone</label>
          <input
            type="tel"
            id="tel"
            name="tel"
            required
            placeholder="06 12 34 56 78"
            pattern="^0[1-9](\s?\d{2}){4}$"
          />
        </div>
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="jean.dupont@email.com"
          />
        </div>
        <div className="field">
          <label htmlFor="cp">Code postal</label>
          <input
            type="text"
            id="cp"
            name="cp"
            required
            placeholder="06600"
            pattern="^\d{5}$"
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="surface">Surface envisagée</label>
        <select id="surface" name="surface" required defaultValue="">
          <option value="" disabled>
            Choisir…
          </option>
          <option>Moins de 10 m²</option>
          <option>10 à 20 m²</option>
          <option>Plus de 20 m²</option>
          <option>Je ne sais pas encore</option>
        </select>
      </div>

      <label className="consent">
        <input type="checkbox" name="optin" />
        Je souhaite recevoir les actualités de Fleuron Industries par Email/SMS
      </label>

      {status === "error" && error ? (
        <p className="form-error">{error}</p>
      ) : null}

      <button
        type="submit"
        className="submit-btn"
        disabled={status === "submitting"}
      >
        {status === "submitting"
          ? "Envoi en cours…"
          : "Obtenir mon devis gratuit"}
      </button>
      <p className="form-note">
        En validant, vous acceptez les CGU et la Charte de confidentialité
        Fleuron Industries.
      </p>
    </form>
  );
}
