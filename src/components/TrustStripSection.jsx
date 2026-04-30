import { C } from "../styles/theme.js";

const TRUST_ITEMS = [
  {
    title: "Vollständig versichert",
    sub: "Haftpflicht & Unfallschutz inklusive",
  },
  { title: "Feste Ansprechpartner", sub: "Kein ständiger Teamwechsel" },
  { title: "Transparente Preise", sub: "Festpreisangebote auf Anfrage" },
  { title: "Kurzfristig verfügbar", sub: "Schnelle Reaktion & Terminvergabe" },
];

export default function TrustStrip() {
  return (
    <section style={{ background: C.navy, padding: "52px 32px" }}>
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: 36,
          justifyContent: "center",
        }}
      >
        {TRUST_ITEMS.map(({ title, sub }) => (
          <div key={title} style={{ textAlign: "center", minWidth: 180 }}>
            <div
              style={{
                width: 36,
                height: 3,
                background: C.blue,
                borderRadius: 2,
                margin: "0 auto 12px",
              }}
            />
            <div
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: "#fff",
                marginBottom: 4,
              }}
            >
              {title}
            </div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>
              {sub}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
