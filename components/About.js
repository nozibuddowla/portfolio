"use client";
import FadeIn from "./FadeIn";
import Glass from "./Glass";

export default function About() {
  return (
    <section id="about" style={{ padding: "50px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Section label */}
        <FadeIn>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 60 }}>
            <div
              style={{
                height: 1, width: 40,
                background: "linear-gradient(to right, transparent, #38BDF8)",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                color: "#38BDF8", fontFamily: "monospace",
                fontSize: 13, letterSpacing: "0.2em",
              }}
            >
              01. ABOUT
            </span>
          </div>
        </FadeIn>

        {/* Two-column grid */}
        <div className="about-grid">

          {/* Image card */}
          <FadeIn delay={0.1}>
            <Glass style={{ padding: 24, borderRadius: 24 }}>
              <div
                style={{
                  width: "100%",
                  paddingBottom: "100%",
                  borderRadius: 16,
                  position: "relative",
                  overflow: "hidden",
                  background:
                    "linear-gradient(135deg, rgba(56,189,248,0.1), rgba(187,107,217,0.1))",
                }}
              >
                <div
                  style={{
                    position: "absolute", inset: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  <img
                    src="/images/nozib-anime.png"
                    alt="Nozib anime version"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              </div>
            </Glass>
          </FadeIn>

          {/* Text content */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <FadeIn delay={0.2}>
              <h2
                style={{
                  fontSize: "clamp(26px, 3vw, 48px)",
                  fontWeight: 900, lineHeight: 1.15,
                }}
              >
                Blending{" "}
                <span style={{ color: "#38BDF8" }}>90s aesthetics</span>{" "}
                with modern engineering
              </h2>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p
                style={{
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.8, fontSize: 16,
                }}
              >
                I'm a developer who loves the intersection of design and code.
                I obsess over UI layouts, pixel-perfect details, and animations
                that feel alive — not just functional.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p
                style={{
                  color: "rgba(255,255,255,0.4)",
                  lineHeight: 1.8, fontSize: 15,
                }}
              >
                When I'm not shipping features, I'm exploring retro anime vibes,
                dissecting UI layouts, or solving complex backend architecture
                challenges.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {["UI Obsessed", "Backend Architect", "Anime Fan", "90s Aesthetic"].map(
                  (t) => (
                    <Glass
                      key={t}
                      style={{
                        padding: "8px 16px", borderRadius: 999,
                        fontSize: 13, color: "rgba(255,255,255,0.6)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {t}
                    </Glass>
                  )
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }

        /* Tablet & mobile: stack vertically */
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }

          /* Limit image height on mobile so it doesn't dominate */
          .about-grid > *:first-child {
            max-width: 340px;
            margin: 0 auto;
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .about-grid {
            gap: 28px;
          }
        }
      `}</style>
    </section>
  );
}