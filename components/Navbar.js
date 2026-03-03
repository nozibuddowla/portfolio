"use client";
import { useState } from "react";
import { Glass } from "./Glass";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar({ active, setActive }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (link) => {
    setActive(link);
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0,
          zIndex: 100, padding: "16px 20px",
          display: "flex", justifyContent: "center",
        }}
      >
        <Glass
          style={{
            borderRadius: 999,
            padding: "12px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: 820,
            width: "100%",
          }}
        >
          {/* Logo */}
          <span style={{ fontWeight: 900, fontSize: 20, letterSpacing: "-1px", color: "#fff" }}>
            NOZIB.
          </span>

          {/* Desktop links */}
          <div
            className="desktop-nav"
            style={{ display: "flex", gap: 28 }}
          >
            {NAV_LINKS.map((l) => (
              <button
                key={l}
                onClick={() => handleNav(l)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontSize: 13, fontWeight: 500, letterSpacing: "0.05em",
                  color: active === l ? "#38BDF8" : "rgba(255,255,255,0.5)",
                  transition: "color 0.2s", padding: 0,
                }}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Hamburger button (mobile) */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
            style={{
              display: "none",
              background: "none", border: "none", cursor: "pointer",
              padding: 4, flexDirection: "column", gap: 5,
            }}
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={
                  menuOpen
                    ? i === 0 ? { rotate: 45, y: 9 }
                    : i === 1 ? { opacity: 0 }
                    : { rotate: -45, y: -9 }
                    : { rotate: 0, y: 0, opacity: 1 }
                }
                transition={{ duration: 0.25 }}
                style={{
                  display: "block", width: 22, height: 2,
                  background: "#38BDF8", borderRadius: 2,
                }}
              />
            ))}
          </button>
        </Glass>
      </motion.nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "fixed", top: 80, left: 16, right: 16,
              zIndex: 99,
              background: "rgba(6,8,16,0.95)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderRadius: 20,
              padding: "20px 0",
            }}
          >
            {NAV_LINKS.map((l, i) => (
              <motion.button
                key={l}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => handleNav(l)}
                style={{
                  display: "block", width: "100%", textAlign: "left",
                  background: "none", border: "none", cursor: "pointer",
                  padding: "14px 28px", fontSize: 16, fontWeight: 600,
                  color: active === l ? "#38BDF8" : "rgba(255,255,255,0.6)",
                  letterSpacing: "0.05em",
                  borderLeft: active === l ? "2px solid #38BDF8" : "2px solid transparent",
                  transition: "color 0.2s",
                }}
              >
                {l}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}