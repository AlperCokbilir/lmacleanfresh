import { C, BADGE, H2, BODY_TEXT } from "../styles/theme.js";
import SERVICES from "../data/services.js";

function BulletRow({ text }) {
  return (
    <div className="bullet-row">
      <div className="bullet-dot" />
      {text}
    </div>
  );
}

function ServiceSection({ service, index, onContact }) {
  const imageRight = index % 2 === 0; // alternating image position

  const image = (
    <div
      style={{
        width: "42%",
        flexShrink: 0,
        borderRadius: 14,
        overflow: "hidden",
        boxShadow: "0 8px 40px rgba(27,42,74,0.10)",
      }}
    >
      <img
        src={service.img}
        alt={service.title}
        style={{
          width: "100%",
          height: 360,
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
  );

  const text = (
    <div style={{ flex: 1, minWidth: 0 }}>
      <span style={BADGE}>{service.sub}</span>
      <h2 style={H2}>{service.title}</h2>
      <div
        style={{
          width: 44,
          height: 3,
          background: C.blue,
          borderRadius: 2,
          marginBottom: 22,
        }}
      />
      <p style={{ ...BODY_TEXT, marginBottom: 28 }}>{service.text}</p>

      <div style={{ marginBottom: 32 }}>
        {service.bullets.map((b) => (
          <BulletRow key={b} text={b} />
        ))}
      </div>

      <button className="cta-btn" onClick={() => onContact(service.title)}>
        Jetzt anfragen
      </button>
    </div>
  );

  return (
    <section
      id={service.id}
      style={{
        background: index % 2 === 0 ? "#fff" : C.offW,
        padding: "80px 32px",
      }}
    >
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        <div
          className="svc-grid"
          style={{ display: "flex", gap: 60, alignItems: "center" }}
        >
          {imageRight ? text : image}
          {imageRight ? image : text}
        </div>

        {}
        {index < SERVICES.length - 1 && (
          <div style={{ height: 1, background: C.border, marginTop: 72 }} />
        )}
      </div>
    </section>
  );
}

function SectionDivider() {
  return (
    <div id="leistungen-start" style={{ background: C.navyD, padding: "32px" }}>
      <div
        style={{
          maxWidth: 1060,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: 20,
        }}
      >
        <div
          style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }}
        />
        <span
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
            whiteSpace: "nowrap",
          }}
        >
          Unsere Leistungen
        </span>
        <div
          style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }}
        />
      </div>
    </div>
  );
}

export default function ServicesSection({ onContact }) {
  return (
    <>
      <SectionDivider />
      {SERVICES.map((service, i) => (
        <ServiceSection
          key={service.id}
          service={service}
          index={i}
          onContact={onContact}
        />
      ))}
    </>
  );
}
