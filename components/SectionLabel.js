"use client";
import FadeIn from "./FadeIn";

export default function SectionLabel({ number, label, color }) {
    return (
        <FadeIn>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 60 }}>
                <div style={{ height: 1, width: 40, background: `linear-gradient(to right, transparent, ${color})`, flexShrink: 0 }} />
                <span style={{ color, fontFamily: "monospace", fontSize: 13, letterSpacing: "0.2em" }}>
                    {number}. {label}
                </span>
            </div>
        </FadeIn>
    );
}