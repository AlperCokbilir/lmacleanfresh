import { C } from "../styles/theme.js";
import Logo from "../../public/lma-logo.png";
import SERVICES from "../data/services.js";
import CONTACT from "../data/contact.js";

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

// ─── Footer ───────────────────────────────────────────────────────────────────
// Props:
//   onNavigate(page) – navigiert zu "datenschutz" | "agb" | "impressum"

export default function Footer({ onNavigate }) {
  const legalLinks = [
    { label: "Impressum", page: "impressum" },
    { label: "Datenschutzerklärung", page: "datenschutz" },
    { label: "AGB", page: "agb" },
  ];

  return (
    <footer
      style={{
        background: C.navyD,
        borderTop: "1px solid rgba(33,150,196,0.14)",
        padding: "52px 32px 32px",
      }}
    >
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        {/* Top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 32,
            marginBottom: 40,
          }}
        >
          {/* Brand + WhatsApp */}
          <div style={{ maxWidth: 280 }}>
            <div style={{ marginBottom: 14 }}>
              <div
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    background: "C.navyD",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 120,
                    transition: "all 0.25s ease",
                  }}
                >
                  <img
                    src="/lma-logo.png"
                    alt="LMA Fresh&Clean"
                    style={{
                      height: 112,
                      width: "auto",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                </div>
              </div>
            </div>
            <p
              style={{
                fontSize: 14,
                color: "rgba(255,255,255,0.38)",
                lineHeight: 1.8,
                marginBottom: 16,
              }}
            >
              Professionelle Reinigung und Hausmeisterservice für höchste
              Ansprüche – im Großraum München.
            </p>
          </div>

          {/* Services list */}
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.28)",
                marginBottom: 14,
              }}
            >
              Leistungen
            </div>
            {SERVICES.map((s) => (
              <div
                key={s.id}
                onClick={() => scrollTo(s.id)}
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.45)",
                  cursor: "pointer",
                  marginBottom: 8,
                  fontWeight: 500,
                  transition: "color 0.18s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = C.blueL)}
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.45)")
                }
              >
                {s.title}
              </div>
            ))}
          </div>

          {/* Contact info */}
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.28)",
                marginBottom: 14,
              }}
            >
              Kontakt
            </div>
            {[
              ["Telefon", CONTACT.phone],
              ["E-Mail", CONTACT.email],
              ["Einsatzgebiet", CONTACT.area],
              ["Öffnungszeiten", CONTACT.hours],
            ].map(([label, value]) => (
              <div key={label} style={{ marginBottom: 12 }}>
                <div
                  style={{
                    fontSize: 11,
                    color: "rgba(255,255,255,0.28)",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                    marginBottom: 2,
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: "rgba(255,255,255,0.55)",
                    fontWeight: 500,
                  }}
                >
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: "rgba(255,255,255,0.07)",
            marginBottom: 22,
          }}
        />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.22)" }}>
            © {new Date().getFullYear()} LMA Fresh&Clean · Alle Rechte
            vorbehalten.
          </p>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {legalLinks.map(({ label, page }) => (
              <span
                key={page}
                onClick={() => onNavigate(page)}
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.35)",
                  cursor: "pointer",
                  transition: "color 0.18s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.75)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.35)")
                }
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
