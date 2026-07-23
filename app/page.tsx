import QuoteForm from "./components/QuoteForm";

export default function Home() {
  return (
    <>
      <header>
        <div className="wrap nav">
          <div className="brand">
            <div className="brand-mark">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4 18h16M4 18V9l8-5 8 5v9M8 18v-6h8v6"
                  stroke="#fff"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="brand-text">
              <span className="b1">
                MA PERGOLA <span className="accent">by</span> FLEURON
              </span>
              <span className="b2">
                Fleuron Industries — Rénovation &amp; extérieur
              </span>
            </div>
          </div>
          <div className="nav-right">
            <span className="nav-phone">
              Service &amp; appel gratuits · 3660
            </span>
            <a className="nav-cta" href="#devis">
              Devis gratuit
            </a>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">Nouvelle gamme Fleuron Industries</span>
            <h1>
              La pergola bioclimatique, <em>par les experts</em> de votre
              confort extérieur.
            </h1>
            <p className="lead">
              Lames orientables motorisées, aluminium premium, pose sur-mesure.
              Par l&apos;entreprise qui a déjà accompagné plus de 5 000 clients
              en France.
            </p>
            <div className="hero-ctas">
              <a className="btn-primary" href="#devis">
                Recevoir mon devis gratuit
              </a>
              <a className="btn-ghost" href="#avantages">
                Découvrir le produit
              </a>
            </div>
            <div className="hero-microtrust">
              <span>
                <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M10 1l2.5 5.5L18 7l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5L10 1z" />
                </svg>
                4.4/5 · 364 avis Google
              </span>
              <span>
                <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <circle cx="10" cy="10" r="9" />
                </svg>
                Fourni &amp; posé, produit certifié CE
              </span>
              <span>
                <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <circle cx="10" cy="10" r="9" />
                </svg>
                Stock disponible · Livraison rapide
              </span>
            </div>
          </div>

          <div className="pergola-visual">
            {/* TODO: remplacer par l'image réelle dans /public/pergola */}
            <img
              src="/pergola/pergola-hero.png"
              alt="Pergola bioclimatique à lames orientables avec éclairage LED intégré, surplombant une piscine et une cuisine extérieure"
              loading="eager"
            />
            <div className="visual-badge">
              <span className="dot" />
              Lames orientables &amp; repliables
            </div>
            <div className="visual-badge-top">
              <span className="vb-item">✓ Produit CE</span>
              <span className="vb-sep" />
              <span className="vb-item">Fourni &amp; posé</span>
            </div>
          </div>
        </div>
      </section>

      <div className="trustbar">
        <div className="wrap trust-row">
          <div>
            <div className="trust-num">+10 ans</div>
            <div className="trust-label">d&apos;expérience</div>
          </div>
          <div>
            <div className="trust-num">N°1</div>
            <div className="trust-label">du marché de la rénovation</div>
          </div>
          <div>
            <div className="trust-num">+5 000</div>
            <div className="trust-label">clients accompagnés</div>
          </div>
          <div>
            <div className="trust-num">4.4/5</div>
            <div className="trust-label">sur Google &amp; Trustpilot</div>
          </div>
        </div>
      </div>

      <section style={{ paddingTop: 52, paddingBottom: 52 }}>
        <div className="wrap">
          <div className="section-head tight">
            <span className="kicker">Ce qui nous différencie</span>
            <h2>Un produit sérieux, une prestation sans mauvaise surprise</h2>
          </div>
          <div className="quality-grid">
            <div className="quality-item">
              <div className="quality-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 2l7 3v6c0 5-3.4 8.5-7 10-3.6-1.5-7-5-7-10V5l7-3z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 12l2 2 4-4"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Produit certifié CE</h3>
              <p>
                Conformité européenne garantie sur la structure et la
                motorisation.
              </p>
            </div>
            <div className="quality-item">
              <div className="quality-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M3 7l9-4 9 4-9 4-9-4z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 7v10l9 4 9-4V7"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                  <path d="M12 11v10" stroke="currentColor" strokeWidth="1.7" />
                </svg>
              </div>
              <h3>Fourni &amp; posé</h3>
              <p>
                Un seul interlocuteur du devis à l&apos;installation, par des
                équipes certifiées.
              </p>
            </div>
            <div className="quality-item">
              <div className="quality-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect
                    x="3"
                    y="7"
                    width="18"
                    height="13"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <path
                    d="M3 11h18M8 4v6M16 4v6"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3>Stock disponible</h3>
              <p>
                Approvisionnement sécurisé — pas d&apos;attente de plusieurs
                mois avant la pose.
              </p>
            </div>
            <div className="quality-item">
              <div className="quality-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M3 16V6a1 1 0 011-1h9v11"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13 9h4l4 4v3h-8V9z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="7"
                    cy="17.5"
                    r="1.8"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <circle
                    cx="18"
                    cy="17.5"
                    r="1.8"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                </svg>
              </div>
              <h3>Livraison rapide</h3>
              <p>
                Des délais maîtrisés, sans les longues attentes courantes du
                secteur.
              </p>
            </div>
            <div className="quality-item">
              <div className="quality-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <path
                    d="M9 12.5l2 2 4-5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Prix TTC, pose comprise</h3>
              <p>
                Le devis annonce le prix final — aucun coût caché à
                l&apos;installation.
              </p>
            </div>
            <div className="quality-item">
              <div className="quality-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                </svg>
              </div>
              <h3>Garantie décennale</h3>
              <p>
                Structure garantie sur la durée, comme sur nos autres chantiers
                Fleuron.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="avantages">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">Le produit</span>
            <h2>Une pièce à vivre extérieure, toute l&apos;année</h2>
            <p>
              La pergola bioclimatique s&apos;est imposée comme
              l&apos;équipement extérieur le plus recherché en 2026 : elle
              régule naturellement la lumière, la chaleur et la ventilation
              grâce à ses lames orientables.
            </p>
          </div>
          <div className="benefits">
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2 2M16.4 16.4l2 2M18.4 5.6l-2 2M7.6 16.4l-2 2"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                </svg>
              </div>
              <h3>Lames motorisées</h3>
              <p>
                Orientation pilotée pour gérer soleil, pluie et ventilation en
                un geste.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M4 20V10l8-6 8 6v10M9 20v-7h6v7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Aluminium premium</h3>
              <p>
                Thermolaqué, sans entretien, résistant aux embruns — idéal Côte
                d&apos;Azur.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M4 12l5 5L20 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Pose certifiée</h3>
              <p>
                Installation par des professionnels, garantie sur la structure.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect
                    x="4"
                    y="4"
                    width="16"
                    height="16"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M4 10h16M10 4v16"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                </svg>
              </div>
              <h3>Sur-mesure</h3>
              <p>
                Dimensions et finitions adaptées à votre terrasse et votre
                budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head tight">
            <span className="kicker">Options &amp; configurations</span>
            <h2>Une pergola pensée pour durer et se moderniser</h2>
            <p>
              Fabrication 100% sur-mesure, jusqu&apos;à 7 x 5 x 3 m, avec un
              large choix d&apos;options pour transformer votre pergola en
              véritable pièce de vie extérieure connectée.
            </p>
          </div>

          <div className="options-grid">
            <div className="option-card">
              <div className="option-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M2 8.5a15 15 0 0120 0M5 12a10 10 0 0114 0M8.5 15.5a5 5 0 017 0"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                  <circle cx="12" cy="19" r="1.4" fill="currentColor" />
                </svg>
              </div>
              <h3>Pilotage WiFi Smart</h3>
              <p>
                Contrôlez l&apos;ouverture des lames, l&apos;éclairage et les
                options depuis votre smartphone.
              </p>
            </div>
            <div className="option-card">
              <div className="option-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M9 18h6M10 21h4M12 3a6 6 0 00-3 11.2c.6.4 1 1 1 1.8h4c0-.8.4-1.4 1-1.8A6 6 0 0012 3z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Éclairage LED Samsung</h3>
              <p>
                Version standard ou RGB, intensité réglable — pour vos soirées
                d&apos;été comme d&apos;hiver.
              </p>
            </div>
            <div className="option-card">
              <div className="option-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M8 2v3M12 2v3M16 2v3M4 8h16v11a2 2 0 01-2 2H6a2 2 0 01-2-2V8z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 14l2 2 4-4"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Chauffage infrarouge</h3>
              <p>
                Radiateurs IC intégrables pour profiter de votre terrasse même
                les soirs frais.
              </p>
            </div>
            <div className="option-card">
              <div className="option-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 2C8 6 6 9.5 6 13a6 6 0 0012 0c0-3.5-2-7-6-11z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Capteurs météo intelligents</h3>
              <p>
                Détection vent / soleil / pluie — les lames s&apos;ajustent
                automatiquement.
              </p>
            </div>
            <div className="option-card">
              <div className="option-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect
                    x="3"
                    y="6"
                    width="18"
                    height="12"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <path
                    d="M3 10h18M3 14h18"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                </svg>
              </div>
              <h3>Isolation polyuréthane</h3>
              <p>
                Lames isolées en option pour réduire le bruit de la pluie et
                mieux réguler la chaleur.
              </p>
            </div>
            <div className="option-card">
              <div className="option-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M4 20V10l8-6 8 6v10M9 20v-7h6v7"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Sur-mesure, jusqu&apos;à 7 x 5 m</h3>
              <p>
                Dimensions calculées selon votre terrasse — auto-portée, adossée
                ou multi-travées.
              </p>
            </div>
          </div>

          <div className="finishes">
            <div>
              <span className="kicker">Finitions</span>
              <h3>Coloris RAL ou décor bois</h3>
              <p>
                Toutes les pièces de la pergola se personnalisent : palette RAL
                complète ou sublimation décor bois. Chaque devis inclut un
                conseil personnalisé sur la finition.
              </p>
            </div>
            <div className="swatch-row">
              <div className="swatch">
                <div
                  className="swatch-color"
                  style={{ background: "#3D4145" }}
                />
                Gris anthracite
              </div>
              <div className="swatch">
                <div
                  className="swatch-color"
                  style={{ background: "#5C6A4E" }}
                />
                Vert kaki
              </div>
              <div className="swatch">
                <div
                  className="swatch-color"
                  style={{ background: "#B8A78E" }}
                />
                Sable / taupe
              </div>
              <div className="swatch">
                <div
                  className="swatch-color"
                  style={{ background: "#EDEAE2", border: "1px solid #d8d5cc" }}
                />
                Blanc cassé
              </div>
            </div>
          </div>

          <div className="addons-row">
            <div className="addon-pill">
              + Stores ZipScreen (protection latérale)
            </div>
            <div className="addon-pill">+ Vitrages coulissants</div>
            <div className="addon-pill">+ Moustiquaires intégrées</div>
            <div className="addon-pill">
              + Évacuation d&apos;eau par les poteaux
            </div>
          </div>
        </div>
      </section>

      <section id="devis">
        <div className="wrap">
          <div className="form-section">
            <div className="form-grid">
              <div className="form-copy">
                <span className="kicker">Étape suivante</span>
                <h2>Obtenez votre devis gratuit sous 48h</h2>
                <p>
                  Un conseiller Fleuron vous rappelle pour affiner votre projet
                  — aucun engagement, aucune pose de matériel avant votre
                  accord.
                </p>
                <div className="form-points">
                  <div>
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path
                        d="M4 10l4 4 8-8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Estimation personnalisée selon votre terrasse
                  </div>
                  <div>
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path
                        d="M4 10l4 4 8-8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Conseil sur la finition et les options
                  </div>
                  <div>
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path
                        d="M4 10l4 4 8-8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Aucun engagement de votre part
                  </div>
                </div>
              </div>

              <div>
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">Avis clients</span>
            <h2>Ils ont fait confiance à Fleuron</h2>
          </div>
          <div className="reviews-strip">
            <span className="stars">★★★★★</span>
            <strong>4.4/5</strong> sur Google (364 avis) &amp; Trustpilot
          </div>
          <div className="reviews-grid">
            <div className="review-card">
              <span className="stars">★★★★★</span>
              <div className="review-title">Avec une belle équipe</div>
              <p>
                Avec une belle équipe , et une participation de ma part les
                travaux ont été éffectué avec beaucoup de soins malgrer une
                forte chaleur . Je recommande l&apos;établissement pour la
                gentillesse et le suivie des travaux a savoir ci sa ce passe
                bien,etc...
              </p>
              <div className="review-author">Delage Dominique</div>
            </div>
            <div className="review-card">
              <span className="stars">★★★★★</span>
              <div className="review-title">Une super entreprise</div>
              <p>
                Une super entreprise, un bon travail de qualité … on recommande
                … très professionnels.
              </p>
              <div className="review-author">Humbert</div>
            </div>
            <div className="review-card">
              <span className="stars">★★★★★</span>
              <div className="review-title">Une équipe parfaite</div>
              <p>
                Une prestation plus que parfait sur tous les points ,un grand
                merci encore pour le travail réalisé et le professionnalisme
                apporte de la prise de rendez-vous au résultat final Bravo à
                vous Je les recommande vivement
              </p>
              <div className="review-author">David Sciangula</div>
            </div>
          </div>
        </div>
      </section>

      <div className="press">
        Fleuron Industries, ils en parlent
        <div className="press-names">
          {/* TODO: déposer les logos officiels dans /public/press/ (SVG de préférence) */}
          <img src="/press/tf1.png" alt="TF1" />
          <img src="/press/bfm.png" alt="BFMTV" />
          <img src="/press/lci.png" alt="LCI" />
          <img src="/press/cnews.png" alt="CNEWS" />
        </div>
      </div>

      <footer>
        <div className="wrap footer-row">
          <div className="brand-text">
            <span className="b1">
              MA PERGOLA <span className="accent">by</span> FLEURON
            </span>
          </div>
          <div>
            Une gamme Fleuron Industries — contact@fleuronindustries.com —
            Service &amp; appel gratuits au 3660
          </div>
          <div>
            © 2026 Fleuron Industries — Mentions légales · Charte de
            confidentialité · CGV
          </div>
        </div>
      </footer>

      <div className="mobile-cta">
        <a href="#devis">Devis gratuit en 2 min</a>
      </div>
    </>
  );
}
