// components/CursorGlow.js
"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Raw mouse position
  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);

  // Spring-smoothed position for the large glow blob (slow, dreamy)
  const glowX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const glowY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  // Spring-smoothed position for the small dot cursor (fast, snappy)
  const dotX = useSpring(mouseX, { stiffness: 300, damping: 28 });
  const dotY = useSpring(mouseY, { stiffness: 300, damping: 28 });

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setIsVisible(true);

    const handleMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    // Detect hover over interactive elements
    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd   = () => setIsHovering(false);

    const interactives = document.querySelectorAll(
      "a, button, [data-cursor-hover]"
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart);
      el.addEventListener("mouseleave", handleHoverEnd);
    });

    window.addEventListener("mousemove", handleMove);

    // Use MutationObserver to catch dynamically added elements
    const observer = new MutationObserver(() => {
      const newEls = document.querySelectorAll("a, button, [data-cursor-hover]");
      newEls.forEach((el) => {
        el.addEventListener("mouseenter", handleHoverStart);
        el.addEventListener("mouseleave", handleHoverEnd);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
      observer.disconnect();
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* ── Large ambient glow blob ── */}
      <motion.div
        style={{
          position: "fixed",
          top: 0, left: 0,
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
          width:  isHovering ? 300 : 400,
          height: isHovering ? 300 : 400,
          borderRadius: "50%",
          background: isHovering
            ? "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(56,189,248,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 9998,
          transition: "width 0.4s ease, height 0.4s ease, background 0.4s ease",
        }}
      />

      {/* ── Small snappy dot ── */}
      <motion.div
        style={{
          position: "fixed",
          top: 0, left: 0,
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width:  isHovering ? 40 : 10,
          height: isHovering ? 40 : 10,
          borderRadius: "50%",
          background: isHovering ? "transparent" : "#38BDF8",
          border: isHovering ? "1.5px solid #38BDF8" : "none",
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "difference",
          transition: "width 0.3s ease, height 0.3s ease, background 0.3s ease, border 0.3s ease",
        }}
      />
    </>
  );
}