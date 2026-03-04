"use client";
import { useEffect } from 'react';
import Lenis from 'lenis';

import dynamic from "next/dynamic";

const CursorGlow = dynamic(() => import("../components/CursorGlow"), { ssr: false });

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);
return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>
    <CursorGlow />
    {children}
  </>;
}