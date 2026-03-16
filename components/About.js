"use client";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import Glass from "./Glass";

const TAGS = ["UI Obsessed", "Backend Architect", "Anime Fan", "90s Aesthetic"];

export default function About() {
  return (
    <section id="about" style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 56,
            }}
          >
            <div
              style={{
                height: 1,
                width: 40,
                background: "linear-gradient(to right, transparent, #38BDF8)",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                color: "#38BDF8",
                fontFamily: "monospace",
                fontSize: 13,
                letterSpacing: "0.2em",
              }}
            >
              01. ABOUT
            </span>
          </div>
        </FadeIn>

        <div className="about-grid">
          {/* Image */}
          <FadeIn delay={0.1}>
            <div style={{ position: "relative" }}>
              <Glass style={{ padding: 20, borderRadius: 24 }}>
                <div
                  style={{
                    width: "100%",
                    paddingBottom: "100%",
                    borderRadius: 16,
                    position: "relative",
                    overflow: "hidden",
                    background:
                      "linear-gradient(135deg, rgba(56,189,248,0.08), rgba(187,107,217,0.08))",
                  }}
                >
                  <img
                    src="/images/nozib-anime.png"
                    alt="Nozib"
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </Glass>
              {/* Decorative corner accent */}
              <div
                style={{
                  position: "absolute",
                  top: -8,
                  right: -8,
                  width: 60,
                  height: 60,
                  borderTop: "2px solid rgba(56,189,248,0.3)",
                  borderRight: "2px solid rgba(56,189,248,0.3)",
                  borderRadius: "0 12px 0 0",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: -8,
                  left: -8,
                  width: 60,
                  height: 60,
                  borderBottom: "2px solid rgba(187,107,217,0.3)",
                  borderLeft: "2px solid rgba(187,107,217,0.3)",
                  borderRadius: "0 0 0 12px",
                  pointerEvents: "none",
                }}
              />
            </div>
          </FadeIn>

          {/* Content */}
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <FadeIn delay={0.15}>
              <h2
                style={{
                  fontSize: "clamp(26px, 3.5vw, 48px)",
                  fontWeight: 900,
                  lineHeight: 1.1,
                }}
              >
                Blending{" "}
                <span style={{ color: "#38BDF8" }}>90s aesthetics</span> with
                modern engineering
              </h2>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p
                style={{
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.85,
                  fontSize: "clamp(14px,1.5vw,16px)",
                }}
              >
                I'm a Full Stack Developer based in Dhaka who loves the
                intersection of design and code. I obsess over UI layouts,
                pixel-perfect details, and animations that feel alive — not just
                functional.
              </p>
            </FadeIn>

            <FadeIn delay={0.35}>
              <p
                style={{
                  color: "rgba(255,255,255,0.38)",
                  lineHeight: 1.85,
                  fontSize: "clamp(13px,1.4vw,15px)",
                }}
              >
                When I'm not shipping features, I'm exploring retro anime vibes,
                dissecting UI layouts, or solving complex backend architecture
                challenges. I believe great software is where engineering
                precision meets creative vision.
              </p>
            </FadeIn>

            {/* Stat pills */}
            <FadeIn delay={0.4}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 12,
                }}
              >
                {[
                  { val: "3+", label: "Years Experience" },
                  { val: "20+", label: "Projects Built" },
                  { val: "3", label: "Publications" },
                ].map((s) => (
                  <Glass
                    key={s.label}
                    style={{
                      padding: "16px 12px",
                      borderRadius: 16,
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "clamp(20px,2.5vw,26px)",
                        fontWeight: 900,
                        color: "#38BDF8",
                        lineHeight: 1,
                      }}
                    >
                      {s.val}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "rgba(255,255,255,0.3)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginTop: 6,
                      }}
                    >
                      {s.label}
                    </div>
                  </Glass>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {TAGS.map((t, i) => (
                  <motion.div
                    key={t}
                    whileHover={{ scale: 1.05, y: -2 }}
                    style={{
                      padding: "8px 16px",
                      borderRadius: 999,
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      fontSize: 13,
                      color: "rgba(255,255,255,0.6)",
                      cursor: "default",
                    }}
                  >
                    {t}
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 52px;
          align-items: center;
        }
        @media (max-width: 860px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .about-grid > div:first-child {
            max-width: 380px;
            margin: 0 auto;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}