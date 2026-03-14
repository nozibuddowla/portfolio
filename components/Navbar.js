"use client";
import { useState } from "react";
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

   const handleNav = (link) => {
     setActive(link.label);
     setMenuOpen(false);

     // Smooth scroll to the section
     const el = document.getElementById(link.id);
     if (el) {
       el.scrollIntoView({ behavior: "smooth", block: "start" });
     }
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
          padding: "16px 20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Glass
          style={{
            borderRadius: 999,
            padding: "12px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: 900,
            width: "100%",
          }}
        >
          {/* Logo — click scrolls to top */}
          <span
            onClick={() => handleNav({ label: "Home", id: "home" })}
            style={{
              fontWeight: 900,
              fontSize: 20,
              letterSpacing: "-1px",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            NOZIB.
          </span>

          {/* Desktop links */}
          <div className="desktop-nav" style={{ display: "flex", gap: 24 }}>
            {NAV_LINKS.map((l) => (
              <button
                key={l.label}
                onClick={() => handleNav(l)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  color:
                    active === l.label ? "#38BDF8" : "rgba(255,255,255,0.5)",
                  transition: "color 0.2s",
                  padding: 0,
                  position: "relative",
                }}
              >
                {l.label}
                {/* Active underline dot */}
                {active === l.label && (
                  <motion.div
                    layoutId="nav-dot"
                    style={{
                      position: "absolute",
                      bottom: -6,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: "#38BDF8",
                    }}
                  />
                )}
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
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 4,
              flexDirection: "column",
              gap: 5,
            }}
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={
                  menuOpen
                    ? i === 0
                      ? { rotate: 45, y: 9 }
                      : i === 1
                        ? { opacity: 0 }
                        : { rotate: -45, y: -9 }
                    : { rotate: 0, y: 0, opacity: 1 }
                }
                transition={{ duration: 0.25 }}
                style={{
                  display: "block",
                  width: 22,
                  height: 2,
                  background: "#38BDF8",
                  borderRadius: 2,
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "fixed",
              top: 80,
              left: 16,
              right: 16,
              zIndex: 99,
              background: "rgba(6,8,16,0.97)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderRadius: 20,
              padding: "12px 0",
            }}
          >
            {NAV_LINKS.map((l, i) => (
              <motion.button
                key={l.label}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleNav(l)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "13px 28px",
                  fontSize: 15,
                  fontWeight: 600,
                  color:
                    active === l.label ? "#38BDF8" : "rgba(255,255,255,0.6)",
                  letterSpacing: "0.05em",
                  borderLeft:
                    active === l.label
                      ? "2px solid #38BDF8"
                      : "2px solid transparent",
                  transition: "color 0.2s",
                }}
              >
                {l.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}