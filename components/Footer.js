"use client";
import { motion } from "framer-motion";

const SOCIAL = [
  { label: "GitHub", href: "https://github.com/nozibuddowla", icon: "🐙" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nozibuddowla/",
    icon: "💼",
  },
  { label: "Email", href: "mailto:nozibuddowla@gmail.com", icon: "📧" },
  { label: "WhatsApp", href: "https://wa.me/8801922438860", icon: "💬" },
];

const NAV = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Education", id: "education" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "56px 24px 32px",
        position: "relative",
      }}
    >
      {/* Top glow line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 200,
          height: 1,
          background:
            "linear-gradient(to right, transparent, #38BDF8, transparent)",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="footer-grid">
          {/* ── Brand ─────────────────────────────────── */}
          <div>
            <div
              style={{
                fontWeight: 900,
                fontSize: 26,
                letterSpacing: "-1px",
                marginBottom: 12,
                color: "#fff",
              }}
            >
              NOZIB.
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.35)",
                fontSize: 14,
                lineHeight: 1.75,
                maxWidth: 280,
                marginBottom: 20,
              }}
            >
              Full Stack Developer crafting scalable web apps with modern tech
              stacks and clean, purposeful design.
            </p>
            {/* Social icon row */}
            <div style={{ display: "flex", gap: 10 }}>
              {SOCIAL.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  title={s.label}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    textDecoration: "none",
                    transition: "background 0.2s",
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* ── Navigation ────────────────────────────── */}
          <div>
            <p
              style={{
                color: "rgba(255,255,255,0.22)",
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginBottom: 18,
              }}
            >
              Navigation
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
              {NAV.map((n) => (
                <motion.button
                  key={n.label}
                  onClick={() => scrollTo(n.id)}
                  whileHover={{ color: "#38BDF8", x: 4 }}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    color: "rgba(255,255,255,0.42)",
                    fontSize: 14,
                    textAlign: "left",
                    transition: "color 0.2s",
                  }}
                >
                  {n.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* ── Contact quick ─────────────────────────── */}
          <div>
            <p
              style={{
                color: "rgba(255,255,255,0.22)",
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginBottom: 18,
              }}
            >
              Get In Touch
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                {
                  icon: "📧",
                  label: "Email",
                  value: "nozibuddowla@gmail.com",
                  href: "mailto:nozibuddowla@gmail.com",
                },
                {
                  icon: "📱",
                  label: "Phone",
                  value: "+880 1922 438860",
                  href: "tel:+8801922438860",
                },
                {
                  icon: "💬",
                  label: "WhatsApp",
                  value: "+880 1922 438860",
                  href: "https://wa.me/8801922438860",
                },
              ].map((c) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ color: "#38BDF8" }}
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                >
                  <span style={{ fontSize: 14 }}>{c.icon}</span>
                  <div>
                    <div
                      style={{
                        fontSize: 10,
                        color: "rgba(255,255,255,0.25)",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      {c.label}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: "rgba(255,255,255,0.5)",
                        fontWeight: 500,
                      }}
                    >
                      {c.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom bar ─────────────────────────────── */}
        <div
          style={{
            marginTop: 44,
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.05)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.18)", fontSize: 13 }}>
            © {year} <span style={{ color: "#38BDF8" }}>Md Nozib Ud Dowla</span>
            . All rights reserved.
          </p>
          <p style={{ color: "rgba(255,255,255,0.12)", fontSize: 12 }}>
            Built with Next.js · Framer Motion · Lenis
          </p>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.2fr;
          gap: 48px;
          align-items: start;
        }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
          .footer-grid > div:first-child { grid-column: 1 / -1; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr; gap: 28px; }
        }
      `}</style>
    </footer>
  );
}
