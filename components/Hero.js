"use client";
import { motion } from "framer-motion";
import Counter from "./Counter";

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
        padding: "100px 24px 80px",
      }}
    >
      <div className="hero-grid" style={{ maxWidth: 1100, width: "100%" }}>
        {/* ── LEFT ── */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 20,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#38BDF8",
                boxShadow: "0 0 12px #38BDF8",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                color: "#38BDF8",
                fontFamily: "monospace",
                fontSize: 13,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Full Stack Developer
            </span>
          </motion.div>

          <h1
            style={{
              fontSize: "clamp(38px, 6vw, 80px)",
              fontWeight: 900,
              lineHeight: 1.0,
              marginBottom: 28,
              overflow: "hidden",
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

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: "clamp(14px,1.6vw,16px)",
              lineHeight: 1.75,
              marginBottom: 36,
              maxWidth: 440,
            }}
          >
            Crafting seamless digital experiences with modern tech stacks,
            buttery animations, and glass-panel aesthetics.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <motion.a
              href="/cv.pdf"
              download
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 32px rgba(56,189,248,0.45)",
              }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: "linear-gradient(135deg, #38BDF8, #6366F1)",
                border: "none",
                borderRadius: 999,
                padding: "14px 32px",
                color: "#fff",
                fontWeight: 700,
                fontSize: 14,
                cursor: "pointer",
                letterSpacing: "0.05em",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Download CV
            </motion.a>

            {[
              { label: "GitHub", href: "https://github.com/nozibuddowla" },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/nozibuddowla/",
              },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ color: "#fff", x: 2 }}
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "color 0.2s",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                {s.label} <span style={{ fontSize: 12, opacity: 0.5 }}>↗</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            style={{ display: "flex", gap: 0, marginTop: 52, flexWrap: "wrap" }}
          >
            {[
              ["3", "Years Exp."],
              ["20", "Projects"],
              ["10", "Clients"],
            ].map(([n, l], idx) => (
              <div
                key={l}
                style={{
                  paddingRight: 32,
                  marginRight: 32,
                  borderRight:
                    idx < 2 ? "1px solid rgba(255,255,255,0.08)" : "none",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(28px,4vw,36px)",
                    fontWeight: 900,
                    color: "#38BDF8",
                    lineHeight: 1,
                  }}
                >
                  <Counter to={parseInt(n)} />+
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "rgba(255,255,255,0.3)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginTop: 6,
                  }}
                >
                  {l}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT – Avatar ── */}
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
          {/* Slow outer ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{
              position: "absolute",
              width: "min(360px,85vw)",
              height: "min(360px,85vw)",
              borderRadius: "50%",
              border: "1px dashed rgba(56,189,248,0.2)",
            }}
          />
          {/* Fast inner ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            style={{
              position: "absolute",
              width: "min(290px,70vw)",
              height: "min(290px,70vw)",
              borderRadius: "50%",
              border: "1px solid rgba(99,102,241,0.15)",
            }}
          />

          {/* Avatar */}
          <div
            style={{
              width: "min(260px,65vw)",
              height: "min(260px,65vw)",
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, rgba(56,189,248,0.1), rgba(99,102,241,0.1))",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(20px)",
              boxShadow:
                "0 0 80px rgba(56,189,248,0.1), inset 0 0 40px rgba(255,255,255,0.02)",
              position: "relative",
              zIndex: 1,
              overflow: "hidden",
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
            {
              label: "React",
              top: "-2%",
              left: "-2%",
              color: "#61DAFB",
              delay: 1.4,
            },
            {
              label: "Next.js",
              top: "84%",
              left: "-2%",
              color: "#fff",
              delay: 1.6,
            },
            {
              label: "Node.js",
              top: "-2%",
              right: "-2%",
              color: "#68A063",
              delay: 1.5,
            },
            {
              label: "GSAP",
              top: "84%",
              right: "-2%",
              color: "#88CE02",
              delay: 1.7,
            },
          ].map(({ label, color, delay, ...pos }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
              transition={{
                opacity: { delay, duration: 0.4 },
                scale: { delay, duration: 0.4 },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: delay * 0.5,
                },
              }}
              style={{
                position: "absolute",
                ...pos,
                background: "rgba(6,8,16,0.8)",
                border: `1px solid ${color}35`,
                backdropFilter: "blur(12px)",
                borderRadius: 999,
                padding: "6px 14px",
                fontSize: 12,
                fontWeight: 700,
                color,
                zIndex: 2,
                boxShadow: `0 4px 20px rgba(0,0,0,0.4), 0 0 12px ${color}20`,
              }}
            >
              {label}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; gap: 48px; text-align: center; }
          .hero-grid > div:first-child { display: flex; flex-direction: column; align-items: center; }
          .hero-avatar { order: -1; }
        }
        @media (max-width: 480px) {
          .hero-grid { gap: 36px; }
        }
      `}</style>
    </section>
  );
}
