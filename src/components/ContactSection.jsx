import { C, BADGE, H2 } from "../styles/theme.js";
import CONTACT from "../data/contact.js";
import ContactForm from "../components/ContactForm.jsx";

const CONTACT_ROWS = [
  { label: "Telefon", key: "phone" },
  { label: "E-Mail", key: "email" },
  { label: "Einsatzgebiet", key: "area" },
];

// ─── Contact section ──────────────────────────────────────────────────────────

export default function ContactSection({ preselect, onNavigate }) {
  return (
    <section id="kontakt" style={{ background: "#fff", padding: "88px 32px" }}>
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span style={BADGE}>Kontakt</span>
          <h2 style={{ ...H2, textAlign: "center" }}>
            Sprechen wir über Ihr Projekt
          </h2>
          <div
            style={{
              width: 48,
              height: 3,
              background: C.blue,
              borderRadius: 2,
              margin: "0 auto 22px",
            }}
          />
          <p
            style={{
              fontSize: 17,
              color: C.muted,
              maxWidth: 500,
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            Füllen Sie das Formular aus und wir erstellen Ihnen innerhalb eines
            Werktages ein unverbindliches Angebot.
          </p>
        </div>

        {/* Two-column layout */}
        <div
          className="svc-grid"
          style={{ display: "flex", gap: 56, alignItems: "flex-start" }}
        >
          {/* Form */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <ContactForm preselect={preselect} onNavigate={onNavigate} />
          </div>

          {/* Sidebar */}
          <div style={{ width: 280, flexShrink: 0 }}>
            {/* Contact details card */}
            <div
              style={{
                background: C.offW,
                borderRadius: 14,
                padding: "32px 28px",
                border: `1px solid ${C.border}`,
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  color: C.muted,
                  marginBottom: 20,
                }}
              >
                Direktkontakt
              </div>
              {CONTACT_ROWS.map(({ label, key }) => (
                <div key={label} style={{ marginBottom: 16 }}>
                  <div
                    style={{
                      fontSize: 11,
                      color: C.muted,
                      fontWeight: 700,
                      letterSpacing: 1,
                      textTransform: "uppercase",
                      marginBottom: 3,
                    }}
                  >
                    {label}
                  </div>
                  <div style={{ fontSize: 15, color: C.navy, fontWeight: 600 }}>
                    {CONTACT[key]}
                  </div>
                </div>
              ))}
            </div>

            {/* Promise card */}
            <div
              style={{
                background: C.navyD,
                borderRadius: 14,
                padding: "28px",
                border: "1px solid rgba(33,150,196,0.2)",
              }}
            >
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: 8,
                }}
              >
                Schnelle Reaktion garantiert
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.7,
                }}
              >
                Wir bearbeiten alle Anfragen innerhalb von 24 Stunden und melden
                uns persönlich bei Ihnen.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                marginTop: 16,
              }}
            >
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  width: 150,
                  maxWidth: 150,
                  minWidth: 150,
                  background: "#25D366",
                  borderRadius: 10,
                  padding: "11px 18px",
                  textDecoration: "none",
                  boxShadow: "0 4px 16px rgba(37,211,102,0.25)",
                  transition: "transform 0.15s, box-shadow 0.15s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(37,211,102,0.4)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow =
                    "0 4px 16px rgba(37,211,102,0.25)";
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.523 3.656 1.432 5.168L2 22l4.979-1.405A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.95 7.95 0 01-4.054-1.107l-.29-.173-3.006.849.854-2.931-.19-.302A7.95 7.95 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8zm4.406-5.845c-.242-.121-1.432-.707-1.654-.788-.222-.08-.384-.12-.545.121-.162.242-.626.788-.768.95-.141.162-.283.182-.525.06-.242-.12-1.022-.376-1.947-1.2-.719-.641-1.205-1.433-1.346-1.675-.14-.242-.015-.373.106-.493.109-.108.242-.283.363-.424.12-.141.161-.242.242-.404.08-.161.04-.303-.02-.424-.061-.12-.546-1.316-.748-1.802-.197-.472-.397-.408-.545-.416l-.464-.008a.89.89 0 00-.646.303c-.222.242-.848.828-.848 2.02s.868 2.344.988 2.506c.121.161 1.71 2.61 4.144 3.66.58.25 1.032.4 1.384.512.582.185 1.112.159 1.53.097.467-.07 1.432-.585 1.634-1.15.2-.565.2-1.05.14-1.15-.06-.1-.222-.162-.465-.283z" />
                </svg>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#fff" }}>
                    WhatsApp
                  </div>
                  <div
                    style={{ fontSize: 11, color: "rgba(255,255,255,0.75)" }}
                  >
                    Direkt schreiben
                  </div>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/lmafreshclean"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  width: 150,
                  maxWidth: 150,
                  minWidth: 150,
                  background:
                    "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                  borderRadius: 10,
                  padding: "11px 18px",
                  textDecoration: "none",
                  boxShadow: "0 4px 16px rgba(220,39,67,0.3)",
                  transition: "transform 0.15s, box-shadow 0.15s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(220,39,67,0.5)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow =
                    "0 4px 16px rgba(220,39,67,0.3)";
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#fff" }}>
                    Instagram
                  </div>
                  <div
                    style={{ fontSize: 11, color: "rgba(255,255,255,0.75)" }}
                  >
                    Folge uns
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
