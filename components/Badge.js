"use client";

export default function Badge({ label, color }) {
    return (
        <span style={{
            fontSize: 11, padding: "4px 12px", borderRadius: 999,
            background: `${color}15`, border: `1px solid ${color}30`,
            color, fontWeight: 600, whiteSpace: "nowrap",
        }}>
            {label}
        </span>
    );
}