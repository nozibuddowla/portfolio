"use client";
import { motion } from "framer-motion";
import  Counter from "./Counter";

export default function Hero() {
  const letters = "Md Nozib Ud Dowla".split("");

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 24px",
      }}
    >
      {/* Responsive grid */}
      <div className="hero-grid" style={{ maxWidth: 1100, width: "100%" }}>

        {/* ── LEFT ── */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}
          >
            <div
              style={{
                width: 8, height: 8, borderRadius: "50%",
                background: "#38BDF8", boxShadow: "0 0 12px #38BDF8",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                color: "#38BDF8", fontFamily: "monospace", fontSize: 13,
                letterSpacing: "0.2em", textTransform: "uppercase",
              }}
            >
              Full Stack Developer
            </span>
          </motion.div>

          {/* Animated name */}
          <h1
            style={{
              fontSize: "clamp(36px, 6vw, 76px)",
              fontWeight: 900, lineHeight: 1.05,
              marginBottom: 24, overflow: "hidden",
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0 5px" }}>
              {letters.map((ch, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + i * 0.03,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    display: "inline-block",
                    color: ch === " " ? "transparent" : "#fff",
                  }}
                >
                  {ch === " " ? "\u00A0" : ch}
                </motion.span>
              ))}
            </div>
          </h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            style={{
              color: "rgba(255,255,255,0.45)", fontSize: 16,
              lineHeight: 1.7, marginBottom: 36, maxWidth: 420,
            }}
          >
            Crafting seamless digital experiences with modern tech stacks,
            buttery animations, and glass-panel aesthetics.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            style={{
              display: "flex", alignItems: "center",
              gap: 20, flexWrap: "wrap",
            }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(56,189,248,0.4)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: "linear-gradient(135deg, #38BDF8, #6366F1)",
                border: "none", borderRadius: 999,
                padding: "14px 32px", color: "#fff",
                fontWeight: 700, fontSize: 14,
                cursor: "pointer", letterSpacing: "0.05em",
              }}
            >
              Download CV
            </motion.button>

            {["GitHub", "LinkedIn"].map((s) => (
              <motion.a
                key={s}
                whileHover={{ color: "#fff" }}
                href={
                  s === "GitHub"
                    ? "https://github.com/nozibuddowla"
                    : "https://www.linkedin.com/in/nozibuddowla/"
                }
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "rgba(255,255,255,0.4)", fontSize: 14,
                  fontWeight: 500, textDecoration: "none",
                  transition: "color 0.2s",
                }}
              >
                {s}
              </motion.a>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            style={{ display: "flex", gap: 32, marginTop: 48, flexWrap: "wrap" }}
          >
            {[["3", "Years Exp."], ["20", "Projects"], ["10", "Clients"]].map(
              ([n, l]) => (
                <div key={l}>
                  <div style={{ fontSize: 32, fontWeight: 900, color: "#38BDF8" }}>
                    <Counter to={parseInt(n)} />+
                  </div>
                  <div
                    style={{
                      fontSize: 12, color: "rgba(255,255,255,0.35)",
                      letterSpacing: "0.1em", textTransform: "uppercase",
                    }}
                  >
                    {l}
                  </div>
                </div>
              )
            )}
          </motion.div>
        </div>

        {/* ── RIGHT – Avatar Orb ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="hero-avatar"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              position: "absolute",
              width: "min(320px, 80vw)", height: "min(320px, 80vw)",
              borderRadius: "50%",
              border: "1px dashed rgba(56,189,248,0.3)",
            }}
          />

          {/* Avatar circle */}
          <div
            style={{
              width: "min(260px, 70vw)", height: "min(260px, 70vw)",
              borderRadius: "50%",
              background: "linear-gradient(135deg, rgba(56,189,248,0.1), rgba(99,102,241,0.1))",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(20px)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 0 80px rgba(56,189,248,0.1)",
              position: "relative", zIndex: 1, overflow: "hidden",
            }}
          >
            <img
              src="/images/nozib-professional.png"
              alt="Nozib"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Floating chips */}
          {[
            { label: "React",   top: "-5%",  left: "0%",  color: "#61DAFB", delay: 1.4 },
            { label: "Next.js", top: "85%",  left: "0%",  color: "#fff",    delay: 1.6 },
            { label: "Node.js", top: "-5%",  right: "0%", color: "#68A063", delay: 1.5 },
            { label: "GSAP",    top: "85%",  right: "0%", color: "#88CE02", delay: 1.7 },
          ].map(({ label, color, delay, ...pos }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
              transition={{
                opacity: { delay, duration: 0.4 },
                scale:   { delay, duration: 0.4 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
              style={{
                position: "absolute", ...pos,
                background: "rgba(255,255,255,0.05)",
                border: `1px solid ${color}40`,
                backdropFilter: "blur(10px)",
                borderRadius: 999, padding: "6px 14px",
                fontSize: 12, fontWeight: 600, color, zIndex: 2,
              }}
            >
              {label}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Responsive styles */}
      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        /* Tablet */
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 48px;
            text-align: center;
          }
          .hero-grid > div:first-child {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-avatar {
            order: -1; /* avatar above text on mobile */
          }
        }

        /* Mobile */
        @media (max-width: 480px) {
          .hero-grid {
            gap: 32px;
            padding-top: 30px;
          }
        }
      `}</style>
    </section>
  );
}