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
            <Glass style={{ padding: "32px 28px", borderRadius: 24, position: "relative", overflow: "hidden" }}>

              {/* Watermark — hidden on mobile */}
              <div className="edu-watermark" style={{
                position: "absolute", top: -10, right: 16,
                fontSize: 100, opacity: 0.03, userSelect: "none",
                fontWeight: 900, lineHeight: 1, pointerEvents: "none",
              }}>
                BSc
              </div>

              {/* Icon + header row */}
              <div className="edu-header">
                {/* Icon */}
                <div style={{
                  width: 52, height: 52, borderRadius: 14, flexShrink: 0,
                  background: `${edu.color}15`, border: `1px solid ${edu.color}30`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 24,
                }}>
                  {edu.icon}
                </div>

                {/* Title block */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{
                    fontSize: "clamp(15px, 2.5vw, 20px)",
                    fontWeight: 800, color: "#fff",
                    marginBottom: 4, lineHeight: 1.3,
                  }}>
                    {edu.degree}
                  </h3>
                  <p style={{ color: edu.color, fontWeight: 600, fontSize: "clamp(13px, 1.8vw, 15px)", lineHeight: 1.4 }}>
                    {edu.institution}
                  </p>
                </div>

                {/* Period pill + location — stacks below on mobile */}
                <div className="edu-meta">
                  <Glass style={{ padding: "6px 14px", borderRadius: 999, fontSize: 13, color: edu.color, fontWeight: 600, display: "inline-block" }}>
                    {edu.period}
                  </Glass>
                  <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, marginTop: 6, whiteSpace: "nowrap" }}>
                    📍 {edu.location}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: "rgba(255,255,255,0.06)", margin: "20px 0" }} />

              {/* Highlights */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {edu.highlights.map((h, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + j * 0.08 }}
                    style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
                  >
                    <div style={{
                      width: 6, height: 6, borderRadius: "50%", flexShrink: 0,
                      background: edu.color, marginTop: 7,
                      boxShadow: `0 0 6px ${edu.color}`,
                    }} />
                    <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                      {h}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Award badges */}
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 20 }}>
                <Badge label="🏆 CS Fest Runner-up 2018" color="#F59E0B" />
                <Badge label="🏅 Blockchain Olympiad Finalist 2021" color="#38BDF8" />
                <Badge label="📄 3 Research Publications" color="#BB6BD9" />
              </div>
            </Glass>
          </FadeIn>
        ))}
      </div>

      <style>{`
        /* Icon + title + meta in a row on desktop */
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

        /* Mobile: stack meta below title */
        @media (max-width: 600px) {
          .edu-meta {
            margin-left: 0;
            text-align: left;
            width: 100%;
          }
          .edu-watermark {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}