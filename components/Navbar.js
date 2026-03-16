"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Glass from "./Glass";

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Education", id: "education" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navbar({ active, setActive }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (link) => {
    setActive(link.label);
    setMenuOpen(false);
    const el = document.getElementById(link.id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "14px 20px",
          display: "flex",
          justifyContent: "center",
          transition: "padding 0.3s",
        }}
      >
        <Glass
          style={{
            borderRadius: 999,
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: 960,
            width: "100%",
            boxShadow: scrolled ? "0 8px 40px rgba(0,0,0,0.5)" : "none",
            transition: "box-shadow 0.3s",
          }}
        >
          {/* Logo */}
          <span
            onClick={() => handleNav({ label: "Home", id: "home" })}
            style={{
              fontWeight: 900,
              fontSize: 18,
              letterSpacing: "-1px",
              color: "#fff",
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            NOZIB.
          </span>

          {/* Desktop nav */}
          <div className="desktop-nav" style={{ display: "flex", gap: 6 }}>
            {NAV_LINKS.map((l) => (
              <button
                key={l.label}
                onClick={() => handleNav(l)}
                style={{
                  background:
                    active === l.label ? "rgba(56,189,248,0.1)" : "none",
                  border:
                    active === l.label
                      ? "1px solid rgba(56,189,248,0.2)"
                      : "1px solid transparent",
                  borderRadius: 999,
                  cursor: "pointer",
                  fontSize: 13,
                  fontWeight: active === l.label ? 600 : 500,
                  letterSpacing: "0.03em",
                  color:
                    active === l.label ? "#38BDF8" : "rgba(255,255,255,0.5)",
                  padding: "6px 14px",
                  transition: "all 0.2s",
                }}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Hamburger */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
            style={{
              display: "none",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 10,
              cursor: "pointer",
              padding: "8px",
              flexDirection: "column",
              gap: 5,
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={
                  menuOpen
                    ? i === 0
                      ? { rotate: 45, y: 7 }
                      : i === 1
                        ? { opacity: 0, scaleX: 0 }
                        : { rotate: -45, y: -7 }
                    : { rotate: 0, y: 0, opacity: 1, scaleX: 1 }
                }
                transition={{ duration: 0.2 }}
                style={{
                  display: "block",
                  width: 18,
                  height: 2,
                  background: "#38BDF8",
                  borderRadius: 2,
                  transformOrigin: "center",
                }}
              />
            ))}
          </button>
        </Glass>
      </motion.nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "fixed",
              top: 76,
              left: 16,
              right: 16,
              zIndex: 99,
              background: "rgba(6,8,16,0.98)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              borderRadius: 20,
              padding: "8px",
              boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
            }}
          >
            {NAV_LINKS.map((l, i) => (
              <motion.button
                key={l.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => handleNav(l)}
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background:
                    active === l.label ? "rgba(56,189,248,0.08)" : "none",
                  border: "none",
                  borderRadius: 12,
                  cursor: "pointer",
                  padding: "12px 16px",
                  fontSize: 15,
                  fontWeight: 600,
                  color:
                    active === l.label ? "#38BDF8" : "rgba(255,255,255,0.6)",
                  transition: "all 0.15s",
                }}
              >
                {l.label}
                {active === l.label && (
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#38BDF8",
                      boxShadow: "0 0 8px #38BDF8",
                    }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 98,
              background: "rgba(0,0,0,0.3)",
            }}
          />
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 860px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
