"use client";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const SKILLS = [
  { name: "React", color: "#61DAFB", category: "Frontend" },
  { name: "Next.js", color: "#e2e8f0", category: "Frontend" },
  { name: "TypeScript", color: "#3178C6", category: "Frontend" },
  { name: "Tailwind CSS", color: "#38BDF8", category: "Frontend" },
  { name: "Framer Motion", color: "#BB6BD9", category: "Frontend" },
  { name: "GSAP", color: "#88CE02", category: "Frontend" },
  { name: "Node.js", color: "#68A063", category: "Backend" },
  { name: "Express.js", color: "#ffffff", category: "Backend" },
  { name: "MongoDB", color: "#47A248", category: "Backend" },
  { name: "PostgreSQL", color: "#336791", category: "Backend" },
  { name: "REST APIs", color: "#FF6B6B", category: "Backend" },
  { name: "JWT / Auth", color: "#F59E0B", category: "Backend" },
  { name: "Firebase", color: "#FFCA28", category: "Tools" },
  { name: "Git", color: "#F05032", category: "Tools" },
  { name: "Docker", color: "#2496ED", category: "Tools" },
  { name: "Socket.io", color: "#4ADE80", category: "Tools" },
];

const CATEGORIES = ["Frontend", "Backend", "Tools"];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "80px 24px" }}>
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
                background: "linear-gradient(to right, transparent, #BB6BD9)",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                color: "#BB6BD9",
                fontFamily: "monospace",
                fontSize: 13,
                letterSpacing: "0.2em",
              }}
            >
              02. SKILLS
            </span>
          </div>
        </FadeIn>

        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {CATEGORIES.map((cat, ci) => (
            <FadeIn key={cat} delay={ci * 0.1}>
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 16,
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      fontFamily: "monospace",
                      color: "rgba(255,255,255,0.25)",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                    }}
                  >
                    {cat}
                  </span>
                  <div
                    style={{
                      flex: 1,
                      height: 1,
                      background: "rgba(255,255,255,0.05)",
                    }}
                  />
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {SKILLS.filter((s) => s.category === cat).map(
                    ({ name, color }, i) => (
                      <FadeIn key={name} delay={ci * 0.1 + i * 0.04}>
                        <motion.div
                          whileHover={{
                            scale: 1.07,
                            y: -3,
                            boxShadow: `0 8px 30px ${color}25`,
                          }}
                          whileTap={{ scale: 0.95 }}
                          style={{
                            background: "rgba(255,255,255,0.04)",
                            border: `1px solid ${color}28`,
                            backdropFilter: "blur(16px)",
                            WebkitBackdropFilter: "blur(16px)",
                            borderRadius: 12,
                            padding: "10px 18px",
                            cursor: "default",
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            transition: "border-color 0.2s",
                          }}
                        >
                          <div
                            style={{
                              width: 7,
                              height: 7,
                              borderRadius: "50%",
                              background: color,
                              boxShadow: `0 0 8px ${color}`,
                              flexShrink: 0,
                            }}
                          />
                          <span
                            style={{
                              color: "rgba(255,255,255,0.8)",
                              fontWeight: 600,
                              fontSize: 13,
                              whiteSpace: "nowrap",
                            }}
                          >
                            {name}
                          </span>
                        </motion.div>
                      </FadeIn>
                    ),
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}