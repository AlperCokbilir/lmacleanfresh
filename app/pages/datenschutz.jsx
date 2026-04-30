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
function Li({ children }) {
  return (
    <li
      style={{
        fontSize: 15,
        color: "#3a4d66",
        lineHeight: 1.85,
        marginBottom: 6,
      }}
    >
      {children}
    </li>
  );
}

export default function Datenschutz({ onBack }) {
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
          Datenschutzerklärung
        </span>
      </div>

      <div
        style={{ maxWidth: 800, margin: "0 auto", padding: "56px 24px 80px" }}
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
            Datenschutzerklärung
          </h1>
          <p style={{ fontSize: 14, color: C.muted }}>
            Stand:{" "}
            {new Date().toLocaleDateString("de-DE", {
              month: "long",
              year: "numeric",
            })}
          </p>
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
          <Section title="1. Verantwortlicher">
            <P>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </P>
            <P>
              <strong>{CONTACT.name}</strong>
              <br />
              Inhaber: {CONTACT.owner}
              <br />
              {CONTACT.street}
              <br />
              {CONTACT.city}
              <br />
              <br />
              Telefon: {CONTACT.phone}
              <br />
              E-Mail: {CONTACT.email}
            </P>
          </Section>

          <Section title="2. Erhebung personenbezogener Daten">
            <P>
              Wenn Sie unser Kontaktformular nutzen oder uns per WhatsApp oder
              E-Mail kontaktieren, erheben wir folgende Daten:
            </P>
            <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
              <Li>Vor- und Nachname</Li>
              <Li>E-Mail-Adresse</Li>
              <Li>Telefonnummer (optional)</Li>
              <Li>Firmenname (optional)</Li>
              <Li>Inhalt Ihrer Nachricht</Li>
            </ul>
            <P>
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
              DSGVO (Vertragsanbahnung) sowie Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse an der Beantwortung von Anfragen).
            </P>
          </Section>

          <Section title="3. Verwendung der Daten">
            <P>Wir verwenden Ihre Daten ausschließlich zur:</P>
            <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
              <Li>Bearbeitung und Beantwortung Ihrer Anfrage</Li>
              <Li>Erstellung und Übermittlung von Angeboten</Li>
              <Li>Durchführung vereinbarter Dienstleistungen</Li>
            </ul>
            <P>
              Eine Weitergabe Ihrer Daten an Dritte findet nicht statt. Alle
              Leistungen werden ausschließlich durch eigenes Personal erbracht.
            </P>
          </Section>

          <Section title="4. E-Mail-Versand (Resend)">
            <P>
              Für den technischen Versand von E-Mails über unser Kontaktformular
              nutzen wir den Dienst <strong>Resend</strong> (Resend Inc., San
              Francisco, USA). Die übermittelten Formulardaten werden dabei über
              die Server von Resend verarbeitet. Resend ist nach dem EU-US Data
              Privacy Framework zertifiziert.
            </P>
            <P>
              Weitere Informationen:{" "}
              <a
                href="https://resend.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: C.blue }}
              >
                resend.com/legal/privacy-policy
              </a>
            </P>
          </Section>

          <Section title="5. WhatsApp">
            <P>
              Auf unserer Website bieten wir die Möglichkeit, uns über WhatsApp
              zu kontaktieren. WhatsApp ist ein Dienst der WhatsApp Ireland
              Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2,
              Irland.
            </P>
            <P>
              Wenn Sie WhatsApp nutzen, gelten die Datenschutzbestimmungen von
              WhatsApp. Wir empfehlen, keine sensiblen personenbezogenen Daten
              über WhatsApp zu übermitteln. Die Nutzung von WhatsApp ist
              freiwillig und keine Voraussetzung für unsere Dienstleistungen.
            </P>
          </Section>

          <Section title="6. Hosting (Vercel)">
            <P>
              Diese Website wird bei <strong>Vercel Inc.</strong> (340 Pine
              Street, Suite 701, San Francisco, CA 94104, USA) gehostet. Beim
              Aufruf der Website werden technisch notwendige Verbindungsdaten
              (IP-Adresse, Zeitstempel) in Server-Logfiles gespeichert.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
            </P>
            <P>
              Weitere Informationen:{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: C.blue }}
              >
                vercel.com/legal/privacy-policy
              </a>
            </P>
          </Section>

          <Section title="7. Speicherdauer">
            <P>
              Anfragedaten werden spätestens nach 6 Monaten gelöscht, sofern
              kein Vertragsverhältnis entstanden ist. Daten aus abgeschlossenen
              Verträgen werden gemäß den gesetzlichen Aufbewahrungspflichten (§
              147 AO, § 257 HGB) bis zu 10 Jahre aufbewahrt.
            </P>
          </Section>

          <Section title="8. Cookies und Tracking">
            <P>
              Diese Website verwendet keine Tracking-Cookies, keine
              Analyse-Tools und keine Social-Media-Plugins. Es werden
              ausschließlich technisch notwendige Funktionen verwendet.
            </P>
          </Section>

          <Section title="9. Ihre Rechte">
            <P>Sie haben gegenüber uns folgende Rechte nach der DSGVO:</P>
            <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
              <Li>
                <strong>Auskunft</strong> (Art. 15): Welche Daten wir über Sie
                speichern
              </Li>
              <Li>
                <strong>Berichtigung</strong> (Art. 16): Korrektur unrichtiger
                Daten
              </Li>
              <Li>
                <strong>Löschung</strong> (Art. 17): Löschung Ihrer Daten
              </Li>
              <Li>
                <strong>Einschränkung</strong> (Art. 18): Einschränkung der
                Verarbeitung
              </Li>
              <Li>
                <strong>Datenübertragbarkeit</strong> (Art. 20)
              </Li>
              <Li>
                <strong>Widerspruch</strong> (Art. 21): Widerspruch gegen die
                Verarbeitung
              </Li>
            </ul>
            <P>
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
              <strong>{CONTACT.email}</strong>
            </P>
            <P>
              Sie haben außerdem das Recht, sich bei der zuständigen
              Datenschutz-Aufsichtsbehörde zu beschweren. In Bayern ist dies das
              Bayerische Landesamt für Datenschutzaufsicht (BayLDA), Promenade
              27, 91522 Ansbach.
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
              <strong style={{ color: C.navy }}>Datenschutz-Kontakt:</strong>
              <br />
              {CONTACT.owner} · {CONTACT.street}, {CONTACT.city}
              <br />
              {CONTACT.phone} · {CONTACT.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
