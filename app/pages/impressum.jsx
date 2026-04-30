import { C } from "../../src/styles/theme.js";
import CONTACT from "../../src/data/contact.js";

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2
        style={{
          fontSize: 20,
          fontWeight: 800,
          color: C.navy,
          marginBottom: 12,
          paddingBottom: 10,
          borderBottom: `2px solid ${C.border}`,
        }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}

function P({ children }) {
  return (
    <p
      style={{
        fontSize: 15,
        color: "#3a4d66",
        lineHeight: 1.85,
        marginBottom: 12,
      }}
    >
      {children}
    </p>
  );
}

export default function Impressum({ onBack }) {
  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: C.offW,
        minHeight: "100vh",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          background: C.navyD,
          borderBottom: "1px solid rgba(33,150,196,0.18)",
          padding: "0 32px",
          height: 64,
          display: "flex",
          alignItems: "center",
          gap: 16,
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <button
          onClick={onBack}
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "#fff",
            borderRadius: 8,
            padding: "7px 16px",
            fontSize: 13,
            fontWeight: 700,
            cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          ← Zurück
        </button>

        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>|</span>

        <span
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          Impressum
        </span>
      </div>

      <div
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "56px 24px 80px",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <span
            style={{
              display: "inline-block",
              background: "rgba(33,150,196,0.1)",
              border: "1px solid rgba(33,150,196,0.25)",
              borderRadius: 6,
              padding: "4px 14px",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: C.blue,
              marginBottom: 16,
            }}
          >
            Rechtliches
          </span>

          <h1
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(28px,4vw,40px)",
              fontWeight: 400,
              color: C.navy,
              marginBottom: 12,
            }}
          >
            Impressum
          </h1>

          <p style={{ fontSize: 14, color: C.muted }}>Angaben gemäß § 5 DDG</p>
        </div>

        {/* Card */}
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            border: `1px solid ${C.border}`,
            padding: "40px 48px",
            boxShadow: "0 2px 16px rgba(27,42,74,0.06)",
          }}
        >
          <Section title="Angaben gemäß § 5 DDG">
            <P>
              <strong>Anil Igret</strong>
              <br />
              LMA Fresh&amp;Clean
              <br />
              Wallensteinstraße 15
              <br />
              80807 München
            </P>
          </Section>

          <Section title="Vertreten durch">
            <P>Anil Igret</P>
          </Section>

          <Section title="Kontakt">
            <P>
              Telefon: +49 151 75099875
              <br />
              E-Mail: aniligret@icloud.com
            </P>
          </Section>

          <Section title="Umsatzsteuer-ID">
            <P>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
              <br />
              14722450907
            </P>
          </Section>

          <Section title="Verbraucherstreitbeilegung / Universalschlichtungsstelle">
            <P>
              Wir nehmen nicht an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teil und sind dazu auch nicht
              verpflichtet.
            </P>
          </Section>

          {/* Contact box */}
          <div
            style={{
              background: C.offW,
              borderRadius: 10,
              padding: "20px 24px",
              border: `1px solid ${C.border}`,
            }}
          >
            <p
              style={{
                fontSize: 14,
                color: C.muted,
                margin: 0,
                lineHeight: 1.8,
              }}
            >
              <strong style={{ color: C.navy }}>Kontakt:</strong>
              <br />
              Anil Igret · Wallensteinstraße 15, 80807 München
              <br />
              +49 151 75099875 · aniligret@icloud.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
