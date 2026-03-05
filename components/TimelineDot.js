"use client";

export  const TimelineDot = ({ color }) => (
  <div style={{
    width: 14, height: 14, borderRadius: "50%",
    background: color, boxShadow: `0 0 12px ${color}`,
    flexShrink: 0, marginTop: 4,
    border: "2px solid rgba(255,255,255,0.15)",
  }} />
);