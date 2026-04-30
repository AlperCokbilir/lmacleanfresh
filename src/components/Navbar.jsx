import { useState, useEffect, useRef } from "react";
import Logo from "../../public/lma-logo.png";
import { C } from "../styles/theme.js";
import SERVICES from "../data/services.js";

// ─── Helper ───────────────────────────────────────────────────────────────────

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

// ─── Desktop service dropdown ─────────────────────────────────────────────────

function ServiceDropdown({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      style={{
        position: "absolute",
        top: "calc(100% + 8px)",
        left: "50%",
        transform: "translateX(-50%)",
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0 12px 48px rgba(27,42,74,0.18)",
        border: `1px solid ${C.border}`,
        minWidth: 260,
        overflow: "hidden",
        zIndex: 400,
      }}
    >
      {SERVICES.map((s, i) => (
        <button
          key={s.id}
          onClick={() => {
            scrollTo(s.id);
            onClose();
          }}
          style={{
            display: "block",
            width: "100%",
            textAlign: "left",
            padding: "12px 20px",
            background: "none",
            border: "none",
            borderBottom:
              i < SERVICES.length - 1 ? `1px solid ${C.border}` : "none",
            fontSize: 14,
            fontWeight: 600,
            color: C.navy,
            cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif",
            transition: "background 0.15s, color 0.15s",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = C.offW;
            e.currentTarget.style.color = C.blue;
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = "none";
            e.currentTarget.style.color = C.navy;
          }}
        >
          {s.title}
        </button>
      ))}
    </div>
  );
}

// ─── Mobile drawer ────────────────────────────────────────────────────────────

const MOBILE_ITEM = {
  display: "block",
  width: "100%",
  textAlign: "left",
  background: "none",
  border: "none",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
  color: "rgba(255,255,255,0.75)",
  padding: "14px 8px",
  fontSize: 15,
  fontWeight: 600,
  cursor: "pointer",
  fontFamily: "'DM Sans', sans-serif",
};

function MobileDrawer({ onClose }) {
  const [servicesOpen, setServicesOpen] = useState(false);

  const navigate = (id) => {
    scrollTo(id);
    onClose();
  };

  return (
    <div
      style={{
        background: C.navyD,
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        zIndex: 299,
      }}
    >
      <div style={{ padding: "12px 20px 20px" }}>
        <button onClick={() => navigate("ueber-uns")} style={MOBILE_ITEM}>
          Über uns
        </button>

        <button
          onClick={() => setServicesOpen((o) => !o)}
          style={{
            ...MOBILE_ITEM,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>Leistungen</span>
          <span
            style={{
              fontSize: 11,
              opacity: 0.5,
              display: "inline-block",
              transform: servicesOpen ? "rotate(180deg)" : "none",
              transition: "transform 0.2s",
            }}
          >
            ▼
          </span>
        </button>

        {servicesOpen && (
          <div>
            {SERVICES.map((s) => (
              <button
                key={s.id}
                onClick={() => navigate(s.id)}
                style={{
                  ...MOBILE_ITEM,
                  paddingLeft: 32,
                  fontSize: 13,
                  color: "rgba(255,255,255,0.55)",
                  borderLeft: `2px solid ${C.blue}44`,
                  marginLeft: 12,
                  borderBottom: "none",
                }}
              >
                {s.title}
              </button>
            ))}
          </div>
        )}

        <button onClick={() => navigate("kontakt")} style={MOBILE_ITEM}>
          Kontakt
        </button>

        <button
          onClick={() => navigate("kontakt")}
          style={{
            display: "block",
            width: "100%",
            marginTop: 12,
            background: `linear-gradient(135deg, ${C.blue}, #1a7cb0)`,
            border: "none",
            borderRadius: 8,
            padding: "14px",
            fontSize: 14,
            fontWeight: 800,
            color: "#fff",
            cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Jetzt anfragen
        </button>
      </div>
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const dropRef = useRef(null);

  // Shade navbar on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target))
        setDropOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 300,
          background: scrolled ? `${C.navyD}f8` : C.navyD,
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(33,150,196,0.18)",
          padding: "0 32px",
          height: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          transition: "background 0.3s",
        }}
      >
        {/* Logo */}
        {/* <div
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
              padding: "6px 16px",
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
        </div> */}

        {/* Desktop links */}
        <div
          className="desktop-nav"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          <button className="nav-btn" onClick={() => scrollTo("ueber-uns")}>
            Über uns
          </button>

          {/* Leistungen dropdown */}
          <div ref={dropRef} style={{ position: "relative" }}>
            <button
              className="nav-btn"
              onClick={() => setDropOpen((o) => !o)}
              style={{ display: "flex", alignItems: "center", gap: 5 }}
            >
              Leistungen
              <span
                style={{
                  fontSize: 10,
                  display: "inline-block",
                  transform: dropOpen ? "rotate(180deg)" : "none",
                  transition: "transform 0.2s",
                }}
              >
                ▼
              </span>
            </button>
            <ServiceDropdown
              open={dropOpen}
              onClose={() => setDropOpen(false)}
            />
          </div>

          <button className="nav-btn" onClick={() => scrollTo("kontakt")}>
            Kontakt
          </button>
        </div>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <button
            className="desktop-nav nav-btn"
            onClick={() => scrollTo("kontakt")}
            style={{
              background: `linear-gradient(135deg, ${C.blue}, #1a7cb0)`,
              color: "#fff",
              borderRadius: 8,
              padding: "9px 20px",
              fontSize: 13,
              fontWeight: 700,
              boxShadow: "0 4px 16px rgba(33,150,196,0.3)",
              display: "block",
            }}
          >
            Jetzt anfragen
          </button>

          {/* Burger */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="burger-btn"
            style={{
              display: "none",
              flexDirection: "column",
              gap: 5,
              justifyContent: "center",
              alignItems: "center",
              width: 40,
              height: 40,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 8,
              cursor: "pointer",
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: 20,
                  height: 2,
                  background: "#fff",
                  borderRadius: 2,
                  transition: "all 0.25s",
                  transform: mobileOpen
                    ? i === 0
                      ? "rotate(45deg) translate(5px, 5px)"
                      : i === 2
                        ? "rotate(-45deg) translate(5px, -5px)"
                        : "scaleX(0)"
                    : "none",
                  opacity: mobileOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile drawer – in normal flow, not fixed */}
      {mobileOpen && <MobileDrawer onClose={closeMobile} />}
    </>
  );
}
