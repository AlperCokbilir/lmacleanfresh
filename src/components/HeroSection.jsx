import { C } from "../styles/theme.js";

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function HeroSection() {
  return (
    <section
      style={{
        background: `linear-gradient(150deg, ${C.navyD} 0%, ${C.navy} 55%, #1d3461 100%)`,
        padding: "108px 32px 116px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          position: "absolute",
          top: 24,
          left: 32,
          zIndex: 5,
          cursor: "pointer",
        }}
      >
        <img
          src="/lma-logo.png"
          alt="LMA Fresh&Clean"
          style={{
            height: "clamp(70px, 12vw, 300px)",
            width: "auto",
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>
      {}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 55% at 50% 100%, rgba(33,150,196,0.14) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background:
            "linear-gradient(90deg, transparent, #2196c4, transparent)",
        }}
      />

      <div style={{ position: "relative", maxWidth: 700, margin: "0 auto" }}>
        {}
        <div
          style={{
            display: "inline-block",
            background: "rgba(33,150,196,0.14)",
            border: "1px solid rgba(33,150,196,0.32)",
            borderRadius: 6,
            padding: "5px 18px",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 2.5,
            textTransform: "uppercase",
            color: C.blueL,
            marginBottom: 28,
          }}
        >
          München & Umgebung
        </div>

        {}
        <h1
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "clamp(38px, 6vw, 60px)",
            fontWeight: 400,
            color: "#fff",
            lineHeight: 1.12,
            marginBottom: 22,
          }}
        >
          Sauberkeit & Zuverlässigkeit
          <br />
          <em style={{ color: C.blueL }}>auf höchstem Niveau.</em>
        </h1>

        {}
        <p
          style={{
            fontSize: 17,
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.85,
            maxWidth: 520,
            margin: "0 auto 44px",
          }}
        >
          LMA Fresh&Clean steht für professionelle Reinigungsdienstleistungen
          und umfassenden Hausmeisterservice – für Privatkunden und Unternehmen
          gleichermaßen.
        </p>

        {}
        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            className="cta-btn"
            onClick={() => scrollTo("leistungen-start")}
          >
            Alle Leistungen ansehen
          </button>

          <button
            onClick={() => scrollTo("kontakt")}
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.18)",
              color: "#fff",
              borderRadius: 8,
              padding: "13px 28px",
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
              transition: "background 0.2s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.14)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.08)")
            }
          >
            Angebot anfordern
          </button>
        </div>
      </div>
    </section>
  );
}
