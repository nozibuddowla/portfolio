"use client";
import { motion } from "framer-motion";

export const Orbs = () => (
  <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
    <motion.div
      animate={{ x: [0, 60, -30, 0], y: [0, -40, 60, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      style={{
        position: "absolute", top: "10%", left: "5%",
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 70%)",
        filter: "blur(60px)",
      }}
    />
    <motion.div
      animate={{ x: [0, -50, 40, 0], y: [0, 50, -30, 0] }}
      transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      style={{
        position: "absolute", top: "40%", right: "5%",
        width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(187,107,217,0.12) 0%, transparent 70%)",
        filter: "blur(80px)",
      }}
    />
    <motion.div
      animate={{ x: [0, 30, -60, 0], y: [0, -60, 20, 0] }}
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      style={{
        position: "absolute", bottom: "10%", left: "30%",
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(104,160,99,0.1) 0%, transparent 70%)",
        filter: "blur(70px)",
      }}
    />
  </div>
);