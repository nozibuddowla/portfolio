
"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const SectionLabel = dynamic(() => import("../components/SectionLabel"), { ssr: false });
const FadeIn = dynamic(() => import("../components/FadeIn"), { ssr: false });
const Glass = dynamic(() => import("../components/Glass"), { ssr: false });
const Badge = dynamic(() => import("../components/Badge"), { ssr: false });

export default function Education () {

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
  return (
    <section id="education" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel number="05" label="EDUCATION" color="#38BDF8" />

        {EDUCATION.map((edu, i) => (
          <FadeIn key={i} delay={0.1}>
            <Glass style={{ padding: "40px 40px", borderRadius: 24, position: "relative", overflow: "hidden" }}>
              {/* Background watermark */}
              <div style={{
                position: "absolute", top: -20, right: 20,
                fontSize: 120, opacity: 0.03, userSelect: "none",
                fontWeight: 900, lineHeight: 1,
              }}>
                BSc
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "0 24px" }}>
                {/* Icon */}
                <div style={{
                  width: 56, height: 56, borderRadius: 16,
                  background: `${edu.color}15`, border: `1px solid ${edu.color}30`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 26, flexShrink: 0,
                }}>
                  {edu.icon}
                </div>

                {/* Content */}
                <div>
                  {/* Header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 6 }}>
                    <div>
                      <h3 style={{ fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 4 }}>
                        {edu.degree}
                      </h3>
                      <p style={{ color: edu.color, fontWeight: 600, fontSize: 15 }}>
                        {edu.institution}
                      </p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <Glass style={{ padding: "6px 14px", borderRadius: 999, fontSize: 13, color: edu.color, fontWeight: 600, borderColor: `${edu.color}30` }}>
                        {edu.period}
                      </Glass>
                      <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, marginTop: 6 }}>
                        📍 {edu.location}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div style={{ height: 1, background: "rgba(255,255,255,0.06)", margin: "16px 0" }} />

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
                          width: 6, height: 6, borderRadius: "50%",
                          background: edu.color, flexShrink: 0, marginTop: 7,
                          boxShadow: `0 0 6px ${edu.color}`,
                        }} />
                        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.6 }}>
                          {h}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Awards row */}
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 20 }}>
                    <Badge label="🏆 CS Fest Runner-up 2018" color="#F59E0B" />
                    <Badge label="🏅 Blockchain Olympiad Finalist 2021" color="#38BDF8" />
                    <Badge label="📄 3 Research Publications" color="#BB6BD9" />
                  </div>
                </div>
              </div>
            </Glass>
          </FadeIn>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          #education .edu-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

