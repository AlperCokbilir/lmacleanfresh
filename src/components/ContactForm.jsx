import { useState, useEffect } from "react";
import { C, LABEL } from "../styles/theme.js";
import SERVICES from "../data/services.js";
import emailjs from "@emailjs/browser";

// ─── Success state ────────────────────────────────────────────────────────────

function SuccessMessage() {
  return (
    <div style={{ textAlign: "center", padding: "56px 24px" }}>
      <div
        style={{
          width: 68,
          height: 68,
          borderRadius: "50%",
          background: "#e8f7f0",
          border: "2px solid #34b97d",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 28,
          margin: "0 auto 20px",
        }}
      >
        ✓
      </div>
      <h3
        style={{
          fontSize: 24,
          fontWeight: 800,
          color: C.navy,
          marginBottom: 10,
        }}
      >
        Anfrage gesendet
      </h3>
      <p style={{ color: C.muted, fontSize: 16, lineHeight: 1.7 }}>
        Wir melden uns innerhalb eines Werktages bei Ihnen. Vielen Dank!
      </p>
    </div>
  );
}

// ─── ContactForm ──────────────────────────────────────────────────────────────

const EMPTY_FORM = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
  privacy: false,
};

export default function ContactForm({ preselect = "", onNavigate }) {
  const [form, setForm] = useState({ ...EMPTY_FORM, service: preselect });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState(null);

  const sendEmail = async () => {
    if (!form.name || !form.email || !form.privacy) return;

    try {
      await emailjs.send(
        "service_cyvsrrs",
        "template_k4dk9vl",
        {
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        },
        "XSmD3ufLyRYoXOmI2",
      );

      setSent(true);
    } catch (err) {
      alert("Fehler beim Senden. Bitte erneut versuchen.");
      console.error(err);
    }
  };

  // Sync preselect when parent changes it (e.g. clicking "Jetzt anfragen" on a service)
  useEffect(() => {
    setForm((f) => ({ ...f, service: preselect }));
  }, [preselect]);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));
  const focus = (key) => ({
    onFocus: () => setFocused(key),
    onBlur: () => setFocused(null),
  });

  const inputStyle = (key, extra = {}) => ({
    width: "100%",
    boxSizing: "border-box",
    background: focused === key ? "#f0f8fd" : "#f8fafc",
    border: `1.5px solid ${focused === key ? C.blue : C.border}`,
    borderRadius: 8,
    color: C.navy,
    padding: "13px 16px",
    fontSize: 15,
    outline: "none",
    fontFamily: "'DM Sans', sans-serif",
    transition: "all 0.2s",
    ...extra,
  });

  const canSubmit = Boolean(form.name && form.email && form.privacy);

  if (sent) return <SuccessMessage />;

  return (
    <div style={{ maxWidth: 680, margin: "0 auto" }}>
      {/* Row 1: Name + Company */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
          marginBottom: 16,
        }}
        className="form-row"
      >
        <div>
          <label style={LABEL}>Vor- & Nachname *</label>
          <input
            type="text"
            placeholder="Max Mustermann"
            value={form.name}
            onChange={set("name")}
            {...focus("name")}
            style={inputStyle("name")}
          />
        </div>
        <div>
          <label style={LABEL}>Firma (optional)</label>
          <input
            type="text"
            placeholder="Muster GmbH"
            value={form.company}
            onChange={set("company")}
            {...focus("company")}
            style={inputStyle("company")}
          />
        </div>
      </div>

      {/* Row 2: Email + Phone */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
          marginBottom: 16,
        }}
        className="form-row"
      >
        <div>
          <label style={LABEL}>E-Mail-Adresse *</label>
          <input
            type="email"
            placeholder="max@muster.de"
            value={form.email}
            onChange={set("email")}
            {...focus("email")}
            style={inputStyle("email")}
          />
        </div>
        <div>
          <label style={LABEL}>Telefonnummer</label>
          <input
            type="tel"
            placeholder="+49 123 456 789"
            value={form.phone}
            onChange={set("phone")}
            {...focus("phone")}
            style={inputStyle("phone")}
          />
        </div>
      </div>

      {/* Service select */}
      <div style={{ marginBottom: 16 }}>
        <label style={LABEL}>Gewünschte Leistung</label>
        <select
          value={form.service}
          onChange={set("service")}
          {...focus("service")}
          style={inputStyle("service", {
            appearance: "none",
            cursor: "pointer",
            color: form.service ? C.navy : C.muted,
          })}
        >
          <option value="">Bitte wählen …</option>
          {SERVICES.map((s) => (
            <option key={s.id} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div style={{ marginBottom: 20 }}>
        <label style={LABEL}>Ihre Nachricht</label>
        <textarea
          rows={5}
          placeholder="Beschreiben Sie kurz Ihren Bedarf: Objekt, Größe, Wunschtermin, besondere Anforderungen …"
          value={form.message}
          onChange={set("message")}
          {...focus("message")}
          style={inputStyle("message", { resize: "vertical" })}
        />
      </div>

      {/* Privacy checkbox */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 12,
          marginBottom: 28,
        }}
      >
        <input
          type="checkbox"
          id="privacy"
          checked={form.privacy}
          onChange={(e) =>
            setForm((f) => ({ ...f, privacy: e.target.checked }))
          }
          style={{
            marginTop: 3,
            width: 16,
            height: 16,
            accentColor: C.blue,
            flexShrink: 0,
            cursor: "pointer",
          }}
        />
        <label
          htmlFor="privacy"
          style={{
            fontSize: 13,
            color: C.muted,
            lineHeight: 1.65,
            cursor: "pointer",
          }}
        >
          Ich habe die{" "}
          <span
            onClick={(e) => {
              e.preventDefault();
              onNavigate && onNavigate("datenschutz");
            }}
            style={{
              color: C.blue,
              cursor: "pointer",
              textDecoration: "underline",
              textUnderlineOffset: 2,
            }}
          >
            Datenschutzerklärung
          </span>{" "}
          gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung
          meiner Anfrage zu. *
        </label>
      </div>

      {/* Submit */}
      <button
        onClick={sendEmail}
        style={{
          width: "100%",
          background: canSubmit
            ? `linear-gradient(135deg, ${C.blue}, #1a7cb0)`
            : "#dde6ef",
          color: canSubmit ? "#fff" : C.muted,
          border: "none",
          borderRadius: 10,
          padding: "16px",
          fontSize: 15,
          fontWeight: 800,
          fontFamily: "'DM Sans', sans-serif",
          cursor: canSubmit ? "pointer" : "not-allowed",
          boxShadow: canSubmit ? "0 6px 24px rgba(33,150,196,0.35)" : "none",
          transition: "all 0.2s",
        }}
        onMouseOver={(e) =>
          canSubmit && (e.currentTarget.style.transform = "translateY(-2px)")
        }
        onMouseOut={(e) => (e.currentTarget.style.transform = "none")}
      >
        Unverbindliche Anfrage absenden
      </button>

      <p
        style={{
          fontSize: 12,
          color: C.muted,
          textAlign: "center",
          marginTop: 14,
        }}
      >
        Ihre Daten werden vertraulich behandelt und nicht an Dritte
        weitergegeben.{" "}
        <span
          onClick={() => onNavigate && onNavigate("datenschutz")}
          style={{
            color: C.blue,
            cursor: "pointer",
            textDecoration: "underline",
            textUnderlineOffset: 2,
          }}
        >
          Mehr erfahren
        </span>
      </p>
    </div>
  );
}
