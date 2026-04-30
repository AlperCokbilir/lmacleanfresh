import { C, BADGE, H2, BODY_TEXT } from "../styles/theme.js";

const STATS = [
  { value: "500+", label: "Kunden" },
  { value: "10+", label: "Jahre" },
  { value: "24h", label: "Reaktion" },
  { value: "100%", label: "Garantie" },
];

export default function AboutSection() {
  return (
    <section
      id="ueber-uns"
      style={{ background: "#fff", padding: "88px 32px" }}
    >
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        <div
          className="about-grid"
          style={{ display: "flex", gap: 72, alignItems: "center" }}
        >
          {/* Text column */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <span style={BADGE}>Über uns</span>
            <h2 style={H2}>
              Ihr verlässlicher Partner
              <br />
              seit über einem Jahrzehnt
            </h2>
            <div
              style={{
                width: 48,
                height: 3,
                background: C.blue,
                borderRadius: 2,
                marginBottom: 26,
              }}
            />

            <p style={BODY_TEXT}>
              Seit unserer Gründung stehen wir für Qualität, Vertrauen und einen
              Service, auf den sich unsere Kunden jederzeit verlassen können.
              Unser Anspruch ist es, nicht nur Räume sauber zu halten, sondern
              ein spürbar angenehmeres Umfeld für Wohnen, Arbeiten und Leben zu
              schaffen.
            </p>
            <p style={{ ...BODY_TEXT, marginBottom: 36 }}>
              Ob regelmäßige Unterhaltsreinigung, sorgfältige Treppenhauspflege
              oder zuverlässiger Hausmeisterservice – wir arbeiten mit höchster
              Sorgfalt, diskret und individuell auf die Bedürfnisse unserer
              Kunden abgestimmt. Dabei legen wir großen Wert auf transparente
              Kommunikation, termingerechte Ausführung und ein konstant hohes
              Serviceniveau. Unser erfahrenes Team betreut private Haushalte,
              Wohnanlagen sowie gewerbliche Objekte im Großraum München mit
              persönlichem Engagement und professioneller Arbeitsweise. Jeder
              Auftrag wird mit dem gleichen Qualitätsanspruch umgesetzt –
              unabhängig von Größe oder Umfang. Viele unserer Kunden schätzen
              besonders unsere flexible Einsatzplanung, schnelle Erreichbarkeit
              und die langfristige, vertrauensvolle Zusammenarbeit. Denn echte
              Dienstleistungsqualität zeigt sich nicht nur im Ergebnis, sondern
              auch im täglichen Miteinander.
            </p>

            <div
              className="stat-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 14,
              }}
            >
              {STATS.map(({ value, label }) => (
                <div
                  key={label}
                  style={{
                    padding: "18px 14px",
                    background: C.offW,
                    borderRadius: 10,
                    border: `1px solid ${C.border}`,
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: 26, fontWeight: 800, color: C.blue }}>
                    {value}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: C.muted,
                      fontWeight: 600,
                      marginTop: 3,
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {}
          <div className="about-img" style={{ width: 420, flexShrink: 0 }}>
            <div
              style={{
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 16px 56px rgba(27,42,74,0.13)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700&q=80"
                alt="LMA Fresh&Clean Team"
                style={{
                  width: "100%",
                  height: 400,
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
