"use client";

export default function Glass({ children, className = "", style = {} }) {
  return (
  <div
    className={className}
    style={{
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderRadius: "20px",
      boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
      ...style,
    }}
  >
    {children}
  </div>
);
}