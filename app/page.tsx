'use client'

import { useState } from "react";

import GLOBAL_CSS from "../src/styles/global.js";

import Navbar from "../src/components/Navbar.jsx";
import Footer from "../src/components/Footer.jsx";

import HeroSection     from "../src/components/HeroSection.jsx";
import AboutSection    from "../src/components/AboutSection.jsx";
import ServicesSection from "../src/components/ServicesSection.jsx";
import TrustStrip      from "../src/components/TrustStripSection.jsx";
import ContactSection  from "../src/components/ContactSection.jsx";

import Datenschutz from "./pages/datenschutz.jsx"
import AGB from "./pages/agb.jsx"
import Impressum from "./pages/impressum.jsx"

export default function App() {
  const [page, setPage]                         = useState("home");
  const [contactPreselect, setContactPreselect] = useState("");
 
  // Seite wechseln + nach oben scrollen
  const navigate = (target) => {
    setPage(target);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
 
  // "Jetzt anfragen"-Button in Leistungsabschnitten
  const handleContact = (serviceTitle) => {
    setContactPreselect(serviceTitle);
    setTimeout(() => {
      document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };
 
  // ── Rechtliche Unterseiten ─────────────────────────────────────────────────

   if (page === "impressum") {
    return (
      <>
        <style>{GLOBAL_CSS}</style>
        <Impressum onBack={() => navigate("home")} />
      </>
    );
  }

  if (page === "datenschutz") {
    return (
      <>
        <style>{GLOBAL_CSS}</style>
        <Datenschutz onBack={() => navigate("home")} />
      </>
    );
  }
 
  if (page === "agb") {
    return (
      <>
        <style>{GLOBAL_CSS}</style>
        <AGB onBack={() => navigate("home")} />
      </>
    );
  }
 
  // ── Hauptseite ─────────────────────────────────────────────────────────────
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#f4f8fc", overflowX: "hidden" }}>
      <style>{GLOBAL_CSS}</style>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection onContact={handleContact} />
        <TrustStrip />
        <ContactSection preselect={contactPreselect} onNavigate={navigate} />
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}