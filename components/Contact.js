"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import Glass from "./Glass";
import SectionLabel from "./SectionLabel";

const CONTACT_INFO = [
  {
    icon: "📧",
    label: "Email",
    value: "nozibuddowla@gmail.com",
    href: "mailto:nozibuddowla@gmail.com",
    color: "#38BDF8",
  },
  {
    icon: "📱",
    label: "Phone",
    value: "+880 1922 438860",
    href: "tel:+8801922438860",
    color: "#BB6BD9",
  },
  {
    icon: "💬",
    label: "WhatsApp",
    value: "+880 1922 438860",
    href: "https://wa.me/8801922438860",
    color: "#4ADE80",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/nozibuddowla",
    href: "https://www.linkedin.com/in/nozibuddowla/",
    color: "#0A66C2",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "github.com/nozibuddowla",
    href: "https://github.com/nozibuddowla",
    color: "#F59E0B",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" style={{ padding: "80px 24px 60px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel number="08" label="CONTACT" color="#38BDF8" />

        <div className="contact-grid">
          {/* ── Left — info cards ────────────────────────────────── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <FadeIn delay={0.05}>
              <h2
                style={{
                  fontSize: "clamp(28px,3vw,44px)",
                  fontWeight: 900,
                  lineHeight: 1.15,
                  marginBottom: 12,
                }}
              >
                Let's build something{" "}
                <span style={{ color: "#38BDF8" }}>great</span> together
              </h2>
              <p
                style={{
                  color: "rgba(255,255,255,0.4)",
                  lineHeight: 1.8,
                  fontSize: 15,
                  marginBottom: 28,
                }}
              >
                Open to freelance projects, full-time roles, and interesting
                collaborations. Reach out via any channel below.
              </p>
            </FadeIn>

            {CONTACT_INFO.map((c, i) => (
              <FadeIn key={c.label} delay={0.1 + i * 0.07}>
                <motion.a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: 6, borderColor: `${c.color}50` }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 14,
                    padding: "14px 18px",
                    textDecoration: "none",
                    transition: "border-color 0.2s, transform 0.2s",
                  }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 10,
                      flexShrink: 0,
                      background: `${c.color}15`,
                      border: `1px solid ${c.color}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 18,
                    }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "rgba(255,255,255,0.3)",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        marginBottom: 2,
                      }}
                    >
                      {c.label}
                    </div>
                    <div
                      style={{ fontSize: 14, color: c.color, fontWeight: 600 }}
                    >
                      {c.value}
                    </div>
                  </div>
                  {/* Arrow */}
                  <div
                    style={{
                      marginLeft: "auto",
                      color: "rgba(255,255,255,0.15)",
                      fontSize: 18,
                    }}
                  >
                    ↗
                  </div>
                </motion.a>
              </FadeIn>
            ))}
          </div>

          {/* ── Right — contact form ──────────────────────────────── */}
          <FadeIn delay={0.2}>
            <Glass
              style={{ padding: "36px 32px", borderRadius: 24, height: "100%" }}
            >
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 800,
                  color: "#fff",
                  marginBottom: 8,
                }}
              >
                Send a Message
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.3)",
                  marginBottom: 24,
                }}
              >
                I'll reply within 24 hours.
              </p>

              <div
                style={{ display: "flex", flexDirection: "column", gap: 14 }}
              >
                {[
                  { ph: "Your Name", key: "name", type: "text" },
                  { ph: "Your Email", key: "email", type: "email" },
                ].map(({ ph, key, type }) => (
                  <motion.input
                    key={key}
                    type={type}
                    placeholder={ph}
                    value={form[key]}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, [key]: e.target.value }))
                    }
                    whileFocus={{
                      borderColor: "rgba(56,189,248,0.5)",
                      boxShadow: "0 0 0 3px rgba(56,189,248,0.08)",
                    }}
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 12,
                      padding: "13px 16px",
                      color: "#fff",
                      fontSize: 14,
                      outline: "none",
                      fontFamily: "inherit",
                      transition: "border-color 0.2s, box-shadow 0.2s",
                    }}
                  />
                ))}

                <motion.textarea
                  placeholder="Your Message"
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  whileFocus={{
                    borderColor: "rgba(56,189,248,0.5)",
                    boxShadow: "0 0 0 3px rgba(56,189,248,0.08)",
                  }}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 12,
                    padding: "13px 16px",
                    color: "#fff",
                    fontSize: 14,
                    outline: "none",
                    resize: "vertical",
                    fontFamily: "inherit",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                  }}
                />

                <motion.button
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(56,189,248,0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  style={{
                    background: sent
                      ? "linear-gradient(135deg, #4ADE80, #22C55E)"
                      : "linear-gradient(135deg, #38BDF8, #6366F1)",
                    border: "none",
                    borderRadius: 12,
                    padding: "15px",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 15,
                    cursor: "pointer",
                    letterSpacing: "0.04em",
                    transition: "background 0.4s",
                  }}
                >
                  {sent ? "✓ Message Sent!" : "Send Message ✦"}
                </motion.button>
              </div>
            </Glass>
          </FadeIn>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
        }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr; gap: 32px; }
        }
      `}</style>
    </section>
  );
}
