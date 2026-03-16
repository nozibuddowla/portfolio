"use client";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import Glass from "./Glass";
import Badge from "./Badge";
import SectionLabel from "./SectionLabel";

const EDUCATION = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "American International University-Bangladesh (AIUB)",
    period: "2016 – 2021",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Published 3 research papers on Blockchain technology at international conferences & journals",
      "1st Runner-up at CS Fest – AIUB (2018)",
      "Finalist at Blockchain Olympiad Bangladesh (2021)",
      "Final year thesis: Blockchain-Based Peer-to-Peer Sustainable Energy Trading in Microgrid",
    ],
    color: "#38BDF8",
    icon: "🎓",
  },
];

export default function Education() {
  return (
    <section id="education" style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel number="03" label="EDUCATION" color="#38BDF8" />

        {EDUCATION.map((edu, i) => (
          <FadeIn key={i} delay={0.1}>
            <Glass
              style={{
                padding: "clamp(24px,4vw,36px)",
                borderRadius: 24,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: `linear-gradient(to right, ${edu.color}, transparent)`,
                }}
              />

              {/* Watermark */}
              <div
                className="edu-watermark"
                style={{
                  position: "absolute",
                  bottom: -20,
                  right: 8,
                  fontSize: "clamp(60px,10vw,100px)",
                  opacity: 0.03,
                  userSelect: "none",
                  fontWeight: 900,
                  lineHeight: 1,
                  pointerEvents: "none",
                  color: edu.color,
                }}
              >
                BSc
              </div>

              {/* Header */}
              <div className="edu-header">
                <div
                  style={{
                    width: 54,
                    height: 54,
                    borderRadius: 14,
                    flexShrink: 0,
                    background: `${edu.color}15`,
                    border: `1px solid ${edu.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 26,
                  }}
                >
                  {edu.icon}
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3
                    style={{
                      fontSize: "clamp(15px,2.2vw,20px)",
                      fontWeight: 800,
                      color: "#fff",
                      marginBottom: 5,
                      lineHeight: 1.3,
                    }}
                  >
                    {edu.degree}
                  </h3>
                  <p
                    style={{
                      color: edu.color,
                      fontWeight: 600,
                      fontSize: "clamp(13px,1.6vw,15px)",
                    }}
                  >
                    {edu.institution}
                  </p>
                </div>

                <div className="edu-meta">
                  <div
                    style={{
                      background: `${edu.color}15`,
                      border: `1px solid ${edu.color}30`,
                      borderRadius: 999,
                      padding: "6px 16px",
                      fontSize: 13,
                      color: edu.color,
                      fontWeight: 600,
                      display: "inline-block",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {edu.period}
                  </div>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.3)",
                      fontSize: 12,
                      marginTop: 8,
                      whiteSpace: "nowrap",
                    }}
                  >
                    📍 {edu.location}
                  </p>
                </div>
              </div>

              <div
                style={{
                  height: 1,
                  background: "rgba(255,255,255,0.06)",
                  margin: "24px 0",
                }}
              />

              {/* Highlights */}
              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                {edu.highlights.map((h, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + j * 0.08 }}
                    style={{
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        flexShrink: 0,
                        background: edu.color,
                        marginTop: 8,
                        boxShadow: `0 0 6px ${edu.color}`,
                      }}
                    />
                    <p
                      style={{
                        color: "rgba(255,255,255,0.55)",
                        fontSize: "clamp(13px,1.4vw,14px)",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {h}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Badges */}
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  flexWrap: "wrap",
                  marginTop: 24,
                }}
              >
                <Badge label="🏆 CS Fest Runner-up 2018" color="#F59E0B" />
                <Badge
                  label="🏅 Blockchain Olympiad Finalist 2021"
                  color="#38BDF8"
                />
                <Badge label="📄 3 Research Publications" color="#BB6BD9" />
              </div>
            </Glass>
          </FadeIn>
        ))}
      </div>

      <style>{`
        .edu-header {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          flex-wrap: wrap;
        }
        .edu-meta {
          margin-left: auto;
          text-align: right;
          flex-shrink: 0;
        }
        @media (max-width: 640px) {
          .edu-meta { margin-left: 0; text-align: left; width: 100%; order: 3; }
          .edu-watermark { display: none; }
        }
      `}</style>
    </section>
  );
}
