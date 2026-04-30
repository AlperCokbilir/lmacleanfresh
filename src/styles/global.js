const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&family=DM+Serif+Display:ital@0;1&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }

  .nav-btn {
    background: none; border: none;
    color: rgba(255,255,255,0.65);
    font-size: 14px; font-weight: 600;
    cursor: pointer; padding: 8px 14px;
    border-radius: 7px;
    font-family: 'DM Sans', sans-serif;
    transition: all 0.18s;
    white-space: nowrap;
  }
  .nav-btn:hover { color: #fff; background: rgba(255,255,255,0.09); }

  .cta-btn {
    display: inline-block;
    background: linear-gradient(135deg, #2196c4, #1a7cb0);
    color: #fff; border: none; border-radius: 8px;
    padding: 13px 30px; font-size: 14px; font-weight: 700;
    cursor: pointer; font-family: 'DM Sans', sans-serif;
    letter-spacing: 0.2px;
    box-shadow: 0 4px 18px rgba(33,150,196,0.32);
    transition: transform 0.15s, box-shadow 0.15s;
  }
  .cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(33,150,196,0.45);
  }

  .bullet-row {
    display: flex; align-items: center; gap: 11px;
    padding: 9px 0; border-bottom: 1px solid #edf2f8;
    font-size: 15px; color: #4a5e78; font-weight: 500;
  }
  .bullet-row:last-child { border-bottom: none; }
  .bullet-dot {
    width: 7px; height: 7px;
    border-radius: 50%; background: #2196c4; flex-shrink: 0;
  }

  @media (max-width: 860px) {
    .desktop-nav  { display: none !important; }
    .burger-btn   { display: flex !important; }
    .svc-grid     { flex-direction: column !important; }
    .svc-grid > * { width: 100% !important; }
    .about-grid   { flex-direction: column !important; }
    .about-img    { display: none; }
  }
  @media (max-width: 600px) {
    .form-row  { grid-template-columns: 1fr !important; }
    .stat-grid { grid-template-columns: 1fr 1fr !important; }
  }
`;

export default GLOBAL_CSS;
