"use client";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const SKILLS = [
  { name: "React",         color: "#61DAFB" },
  { name: "Next.js",       color: "#ffffff" },
  { name: "Node.js",       color: "#68A063" },
  { name: "TypeScript",    color: "#3178C6" },
  { name: "Tailwind",      color: "#38BDF8" },
  { name: "GSAP",          color: "#88CE02" },
  { name: "Framer Motion", color: "#BB6BD9" },
  { name: "MongoDB",       color: "#47A248" },
  { name: "PostgreSQL",    color: "#336791" },
  { name: "Docker",        color: "#2496ED" },
  { name: "Git",            color: "#F05032" },
  { name: "REST APIs",     color: "#FF6B6B" },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <FadeIn>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 48 }}>
            <div style={{ height: 1, width: 40, background: "linear-gradient(to right, transparent, #BB6BD9)", flexShrink: 0 }} />
            <span style={{ color: "#BB6BD9", fontFamily: "monospace", fontSize: 13, letterSpacing: "0.2em" }}>
              02. SKILLS
            </span>
          </div>
        </FadeIn>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          {SKILLS.map(({ name, color }, i) => (
            <FadeIn key={name} delay={i * 0.04}>
              <motion.div
                whileHover={{ scale: 1.08, boxShadow: `0 0 24px ${color}40` }}
                whileTap={{ scale: 0.96 }}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: `1px solid ${color}30`,
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  borderRadius: 12,
                  padding: "12px 20px",
                  cursor: "default",
                  display: "flex", alignItems: "center", gap: 8,
                }}
              >
                <div style={{
                  width: 8, height: 8, borderRadius: "50%",
                  background: color, boxShadow: `0 0 8px ${color}`,
                  flexShrink: 0,
                }} />
                <span style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600, fontSize: 14 }}>
                  {name}
                </span>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}