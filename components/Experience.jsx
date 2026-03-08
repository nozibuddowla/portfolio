"use client";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import Glass from "./Glass";
import SectionLabel from "./SectionLabel";

const EXPERIENCE = [
  {
    title: "Associate IT Executive",
    company: "NexKraft Limited",
    period: "May 2024 – Present",
    type: "Full-time",
    location: "Dhaka, Bangladesh",
    color: "#38BDF8",
    icon: "💼",
    responsibilities: [
      "Act as technical liaison between clients and the development team to fulfill project requirements",
      "Monitor software usability and draft technical documentation and B2B proposals",
      "Translate complex client requirements into actionable development deliverables",
    ],
  },
  {
    title: "Junior Executive",
    company: "Seopage1 IT Solution",
    period: "Nov 2022 – Apr 2024",
    type: "Full-time",
    location: "Dhaka, Bangladesh",
    color: "#BB6BD9",
    icon: "🚀",
    responsibilities: [
      "Managed the full sales and support cycle for custom software solutions",
      "Translated client needs into technical deliverables for development teams",
      "Maintained client relationships and ensured on-time project delivery",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel number="04" label="EXPERIENCE" color="#BB6BD9" />

        {/* Badge */}
        <FadeIn delay={0.05}>
          <div style={{ marginBottom: 40 }}>
            <Glass
              style={{
                padding: "10px 20px",
                borderRadius: 999,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#4ADE80",
                  boxShadow: "0 0 8px #4ADE80",
                }}
              />
              <span
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                2.5+ Years in the Software Industry
              </span>
            </Glass>
          </div>
        </FadeIn>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          <div
            className="timeline-line"
            style={{
              position: "absolute",
              left: 6,
              top: 8,
              bottom: 8,
              width: 1,
              background:
                "linear-gradient(to bottom, #38BDF8, #BB6BD9, transparent)",
              opacity: 0.3,
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {EXPERIENCE.map((exp, i) => (
              <FadeIn key={i} delay={0.1 + i * 0.15}>
                <div
                  className="exp-row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    gap: "0 24px",
                    alignItems: "start",
                  }}
                >
                  {/* Dot */}
                  <div
                    style={{
                      width: 14,
                      height: 14,
                      borderRadius: "50%",
                      background: exp.color,
                      boxShadow: `0 0 12px ${exp.color}`,
                      flexShrink: 0,
                      marginTop: 4,
                      border: "2px solid rgba(255,255,255,0.15)",
                    }}
                  />

                  {/* Card */}
                  <motion.div
                    whileHover={{
                      y: -4,
                      boxShadow: `0 16px 48px ${exp.color}15`,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Glass
                      style={{
                        padding: "28px 28px",
                        borderRadius: 20,
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
                          background: `linear-gradient(to right, ${exp.color}, transparent)`,
                        }}
                      />

                      {/* Header */}
                      <div
                        className="exp-header"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          gap: 12,
                          marginBottom: 16,
                          flexWrap: "wrap",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            gap: 14,
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{
                              width: 44,
                              height: 44,
                              borderRadius: 12,
                              flexShrink: 0,
                              background: `${exp.color}15`,
                              border: `1px solid ${exp.color}30`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: 20,
                            }}
                          >
                            {exp.icon}
                          </div>
                          <div>
                            <h3
                              style={{
                                fontSize: "clamp(15px, 2vw, 18px)",
                                fontWeight: 800,
                                color: "#fff",
                              }}
                            >
                              {exp.title}
                            </h3>
                            <p
                              style={{
                                color: exp.color,
                                fontWeight: 600,
                                fontSize: 14,
                              }}
                            >
                              {exp.company}
                            </p>
                          </div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end",
                            gap: 6,
                          }}
                        >
                          <Glass
                            style={{
                              padding: "5px 14px",
                              borderRadius: 999,
                              fontSize: 12,
                              color: exp.color,
                              fontWeight: 600,
                            }}
                          >
                            {exp.period}
                          </Glass>
                          <div
                            style={{
                              display: "flex",
                              gap: 8,
                              alignItems: "center",
                              flexWrap: "wrap",
                              justifyContent: "flex-end",
                            }}
                          >
                            <span
                              style={{
                                fontSize: 11,
                                padding: "3px 10px",
                                borderRadius: 999,
                                background: "rgba(74,222,128,0.1)",
                                border: "1px solid rgba(74,222,128,0.3)",
                                color: "#4ADE80",
                                fontWeight: 600,
                              }}
                            >
                              {exp.type}
                            </span>
                            <span
                              style={{
                                color: "rgba(255,255,255,0.3)",
                                fontSize: 12,
                              }}
                            >
                              📍 {exp.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div
                        style={{
                          height: 1,
                          background: "rgba(255,255,255,0.06)",
                          marginBottom: 16,
                        }}
                      />

                      {/* Responsibilities */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 10,
                        }}
                      >
                        {exp.responsibilities.map((r, j) => (
                          <motion.div
                            key={j}
                            initial={{ opacity: 0, x: -16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 + j * 0.08 }}
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
                                background: exp.color,
                                flexShrink: 0,
                                marginTop: 7,
                                boxShadow: `0 0 6px ${exp.color}`,
                              }}
                            />
                            <p
                              style={{
                                color: "rgba(255,255,255,0.55)",
                                fontSize: 14,
                                lineHeight: 1.7,
                                margin: 0,
                              }}
                            >
                              {r}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </Glass>
                  </motion.div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .timeline-line { display: none; }
          .exp-row { grid-template-columns: 1fr !important; gap: 12px !important; }
          .exp-row > div:first-child { display: none; }
          .exp-header { flex-direction: column; align-items: flex-start !important; }
          .exp-header > div:last-child { align-items: flex-start !important; }
        }
      `}</style>
    </section>
  );
}
