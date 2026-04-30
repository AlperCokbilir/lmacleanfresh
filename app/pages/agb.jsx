import { C } from "../../src/styles/theme.js";
import CONTACT from "../../src/data/contact.js";

function Section({ num, title, children }) {
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
        § {num} {title}
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

export default function AGB({ onBack }) {
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
          Allgemeine Geschäftsbedingungen
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
            Allgemeine Geschäftsbedingungen
          </h1>
          <p style={{ fontSize: 14, color: C.muted }}>
            Stand:{" "}
            {new Date().toLocaleDateString("de-DE", {
              month: "long",
              year: "numeric",
            })}{" "}
            · {CONTACT.name} · {CONTACT.owner}
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
          <Section num="1" title="Geltungsbereich">
            <P>
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle
              Verträge zwischen
              <strong> {CONTACT.name}</strong>, Inhaber {CONTACT.owner},{" "}
              {CONTACT.street}, {CONTACT.city}
              (nachfolgend „Auftragnehmer") und dem Auftraggeber über die
              Erbringung von Reinigungs-, Hausmeister- und verwandten
              Dienstleistungen.
            </P>
            <P>
              Abweichende Bedingungen des Auftraggebers werden nicht anerkannt,
              es sei denn, der Auftragnehmer stimmt ihrer Geltung ausdrücklich
              schriftlich zu.
            </P>
          </Section>

          <Section num="2" title="Vertragsschluss">
            <P>
              Angebote des Auftragnehmers sind freibleibend und unverbindlich.
              Ein Vertrag kommt erst durch die schriftliche oder elektronische
              Auftragsbestätigung des Auftragnehmers oder durch Beginn der
              Leistungserbringung zustande.
            </P>
            <P>
              Anfragen über das Kontaktformular oder per WhatsApp stellen
              lediglich eine Einladung zur Angebotsabgabe dar und begründen noch
              keinen Vertragsschluss.
            </P>
          </Section>

          <Section num="3" title="Leistungsumfang">
            <P>
              Der Umfang der zu erbringenden Leistungen ergibt sich aus dem
              jeweiligen schriftlichen Angebot bzw. der Auftragsbestätigung.
              Änderungen oder Erweiterungen des Leistungsumfangs bedürfen der
              schriftlichen Vereinbarung.
            </P>
            <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
              <Li>Professionelle Reinigung (Privat & Gewerbe)</Li>
              <Li>Hausmeisterservice und Objektbetreuung</Li>
              <Li>Entrümpelungen und Wohnungsauflösungen</Li>
              <Li>Umzugs- und Transporthilfe</Li>
              <Li>Grund- und Fensterreinigung sowie Bauendreinigung</Li>
              <Li>Regelmäßige Unterhaltsreinigung</Li>
              <Li>Garten- und Außenanlagenpflege</Li>
            </ul>
            <P>
              Alle Leistungen werden ausschließlich durch eigenes, geschultes
              Personal des Auftragnehmers erbracht. Der Einsatz von
              Subunternehmern findet nicht statt.
            </P>
          </Section>

          <Section num="4" title="Mitwirkungspflichten des Auftraggebers">
            <P>Der Auftraggeber ist verpflichtet:</P>
            <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
              <Li>
                Dem Auftragnehmer rechtzeitig Zugang zu den vereinbarten
                Räumlichkeiten zu gewähren
              </Li>
              <Li>
                Notwendige Informationen über besondere Gegebenheiten
                mitzuteilen (z. B. empfindliche Materialien, Allergien)
              </Li>
              <Li>
                Wasser- und Stromanschlüsse für die Leistungserbringung
                bereitzustellen
              </Li>
              <Li>
                Wertgegenstände und persönliche Dokumente vorab zu sichern
              </Li>
            </ul>
          </Section>

          <Section num="5" title="Vergütung und Zahlungsbedingungen">
            <P>
              Die Vergütung richtet sich nach dem im Angebot bzw. der
              Auftragsbestätigung festgelegten Preis. Alle Preise verstehen sich
              inklusive der gesetzlichen Mehrwertsteuer, sofern diese anfällt.
            </P>
            <P>Folgende Zahlungsarten werden akzeptiert:</P>
            <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
              <Li>Barzahlung bei Leistungserbringung</Li>
              <Li>Banküberweisung</Li>
              <Li>
                Rechnung (zahlbar innerhalb von 14 Tagen nach Rechnungsdatum)
              </Li>
            </ul>
            <P>
              Bei Zahlungsverzug ist der Auftragnehmer berechtigt, Verzugszinsen
              in Höhe von 9 Prozentpunkten über dem jeweiligen Basiszinssatz (§
              288 BGB) zu berechnen.
            </P>
          </Section>

          <Section num="6" title="Kündigung und Stornierung">
            <P>
              Einmalige Aufträge können bis zu <strong>48 Stunden</strong> vor
              dem vereinbarten Termin kostenfrei storniert werden. Bei späterer
              Stornierung werden
              <strong> 50 % des vereinbarten Auftragswertes</strong> als
              Ausfallgebühr in Rechnung gestellt.
            </P>
            <P>
              Daueraufträge (z. B. regelmäßige Unterhaltsreinigung,
              Objektbetreuung) können mit einer Frist von{" "}
              <strong>4 Wochen</strong> zum Monatsende schriftlich gekündigt
              werden.
            </P>
            <P>
              Das Recht zur außerordentlichen Kündigung aus wichtigem Grund
              bleibt unberührt.
            </P>
          </Section>

          <Section num="7" title="Haftung und Gewährleistung">
            <P>
              Der Auftragnehmer haftet für Schäden, die durch sein Personal
              schuldhaft verursacht werden, im Rahmen der gesetzlichen
              Bestimmungen. Der Auftragnehmer ist haftpflichtversichert.
            </P>
            <P>
              Schäden sind unverzüglich – spätestens innerhalb von{" "}
              <strong>24 Stunden</strong>
              nach Feststellung – schriftlich oder per E-Mail an {
                CONTACT.email
              }{" "}
              zu melden. Später gemeldete Schäden können nicht anerkannt werden,
              sofern der Auftragnehmer nicht nachweislich für den Schaden
              verantwortlich ist.
            </P>
            <P>
              Die Haftung für Schäden an bereits beschädigten, außergewöhnlich
              empfindlichen oder nicht alterungsbeständigen Gegenständen ist
              ausgeschlossen, sofern der Auftraggeber nicht vorab auf deren
              Beschaffenheit hingewiesen hat.
            </P>
            <P>
              Bei leichter Fahrlässigkeit ist die Haftung auf den
              vorhersehbaren, vertragstypischen Schaden begrenzt.
            </P>
          </Section>

          <Section num="8" title="Mängelrüge">
            <P>
              Mängel der erbrachten Leistung sind unverzüglich, spätestens
              jedoch innerhalb von <strong>3 Werktagen</strong> nach
              Leistungserbringung schriftlich anzuzeigen. Der Auftragnehmer hat
              das Recht zur Nacherfüllung. Schlägt die Nacherfüllung fehl,
              stehen dem Auftraggeber die gesetzlichen Rechte zu.
            </P>
          </Section>

          <Section num="9" title="Datenschutz">
            <P>
              Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer
              Datenschutzerklärung, die auf unserer Website abrufbar ist.
              Rechtsgrundlage ist die DSGVO sowie das BDSG.
            </P>
          </Section>

          <Section num="10" title="Schlussbestimmungen">
            <P>
              Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss
              des UN-Kaufrechts.
            </P>
            <P>
              Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit
              diesem Vertrag ist München, sofern der Auftraggeber Kaufmann,
              juristische Person des öffentlichen Rechts oder
              öffentlich-rechtliches Sondervermögen ist.
            </P>
            <P>
              Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder
              werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
            </P>
            <P>
              Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform.
            </P>
          </Section>

          {/* Contact box */}
          <div
            style={{
              background: C.offW,
              borderRadius: 10,
              padding: "20px 24px",
              border: `1px solid ${C.border}`,
              marginTop: 8,
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
              <strong style={{ color: C.navy }}>Kontakt:</strong> {CONTACT.name}{" "}
              · Inhaber: {CONTACT.owner}
              <br />
              {CONTACT.street}, {CONTACT.city}
              <br />
              {CONTACT.phone} · {CONTACT.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
