"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";

const PROJECTS = [
  {
    id: "tutorhub",
    title: "TutorHub",
    subtitle: "Online Tutoring Platform",
    desc: "A full-stack tutoring platform connecting students with qualified tutors. Features role-based dashboards for students, tutors & admins, real-time messaging via Socket.io, Stripe payments, session scheduling, and dark/light mode.",
    image:
      "https://api.microlink.io/?url=https://tutorhub-nozib.netlify.app&screenshot=true&meta=false&embed=screenshot.url",
    emoji: "🎓",
    gradient: "135deg, #38BDF820, #6366F110",
    color: "#38BDF8",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Firebase",
      "Socket.io",
      "Stripe",
      "Tailwind CSS",
      "JWT",
    ],
    live: "https://tutorhub-nozib.netlify.app",
    github: "https://github.com/nozibuddowla/tutorhub-client",
    githubServer: "https://github.com/nozibuddowla/tutorhub-server",
    challenges: [
      "Implementing role-based access control across student, tutor, and admin dashboards with JWT + cookie auth",
      "Building real-time bidirectional messaging with Socket.io while maintaining message history in MongoDB",
      "Integrating Stripe payment flow tied to tutor application approval — payment unlocks tutor selection",
    ],
    improvements: [
      "Add WebRTC video call integration for live tutoring sessions directly in the platform",
      "AI-powered tutor-student matching based on subject, location, and learning style preferences",
      "Build a React Native mobile app with push notifications for session reminders",
    ],
  },
  {
    id: "zapshift",
    title: "ZapShift",
    subtitle: "Parcel Delivery Platform",
    desc: "A high-performance logistics and parcel delivery web application. Merchants and customers get a seamless experience for booking, tracking, and managing deliveries with a clean dashboard UI.",
    image:
      "https://api.microlink.io/?url=https://zapshift-nozib.netlify.app/&screenshot=true&meta=false&embed=screenshot.url",
    emoji: "⚡",
    gradient: "135deg, #BB6BD920, #6366F110",
    color: "#BB6BD9",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Firebase Auth",
      "Tailwind CSS",
      "JWT",
    ],
    live: "https://zapshift-nozib.netlify.app/",
    github: "https://github.com/nozibuddowla/zap-shift-client",
    githubServer: "https://github.com/nozibuddowla/zap-shift-server",
    challenges: [
      "Designing a parcel lifecycle state machine (booked → picked up → in transit → delivered) with atomic DB updates",
      "Building a merchant dashboard that handles bulk shipment creation and real-time status tracking",
      "Optimizing MongoDB queries for large-scale shipment records with compound indexes",
    ],
    improvements: [
      "Integrate Google Maps API for live delivery route visualization and ETA calculation",
      "Add automated SMS/email notifications at each delivery milestone via Twilio/SendGrid",
      "Build a mobile app for delivery riders with GPS tracking and barcode scanning",
    ],
  },
  {
    id: "artrium",
    title: "Artrium",
    subtitle: "Art & Craft E-Commerce",
    desc: "An online art-sharing and e-commerce platform where artists upload and display creative works, explore galleries, curate favorites, and connect through appreciation. Built with the MERN stack and Firebase auth.",
    image:
      "https://api.microlink.io/?url=https://artrium-b059f.web.app/&screenshot=true&meta=false&embed=screenshot.url",
    emoji: "🎨",
    gradient: "135deg, #68A06320, #38BDF810",
    color: "#68A063",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase Auth",
      "Tailwind CSS",
    ],
    live: "https://artrium-b059f.web.app/",
    github: "https://github.com/nozibuddowla/artrium-client",
    githubServer: "https://github.com/nozibuddowla/artrium-server",
    challenges: [
      "Managing large art file uploads with Cloudinary while keeping UX fast and responsive",
      "Building a curated gallery system with artist follow, like, and comment interactions in real time",
      "Dual auth strategy — Firebase for social login + JWT for API authorization on protected routes",
    ],
    improvements: [
      "Add AI art style recognition and tagging for automatic categorization of uploaded works",
      "Implement a bidding/auction system for limited edition digital and physical artworks",
      "Build a seller analytics dashboard with revenue tracking and audience insights",
    ],
  },
  {
    id: "skillswap",
    title: "Skill Swap",
    subtitle: "Community Skill Exchange",
    desc: "An interactive platform where users offer, learn, and exchange skills within their local community — from guitar lessons to coding help, yoga, or language exchange. Powered by Firebase with a Swiper-driven UI.",
    image:
      "https://api.microlink.io/?url=https://skill-swap-nozib.netlify.app&screenshot=true&meta=false&embed=screenshot.url",
    emoji: "🔄",
    gradient: "135deg, #F59E0B20, #EF444410",
    color: "#F59E0B",
    tech: [
      "React",
      "Firebase",
      "Firebase Auth",
      "React Router",
      "Axios",
      "Animate.css",
      "Swiper",
    ],
    live: "https://skill-swap-nozib.netlify.app",
    github: "https://github.com/nozibuddowla/skill-swap",
    githubServer: null,
    challenges: [
      "Building a skill-matching algorithm that surfaces relevant exchange partners by category and location",
      "Handling real-time notifications and live updates with Firebase listeners at scale",
      "Creating a fully accessible and mobile-first UI for a diverse, non-technical user base",
    ],
    improvements: [
      "Add in-app video calling for live skill sessions without leaving the platform",
      "Build a reputation system with verified skill badges and peer-reviewed ratings",
      "Expand to a React Native mobile app with location-based skill discovery",
    ],
  },
  {
    id: "heroapps",
    title: "Hero Apps",
    subtitle: "Application Directory",
    desc: "A directory for discovering and managing various web utilities built on a client-server architecture. Features JWT authentication, role-based access, and a fast MongoDB-backed search for large app collections.",
    image:
      "https://api.microlink.io/?url=https://heroapps-nozib.netlify.app&screenshot=true&meta=false&embed=screenshot.url",
    emoji: "🦸",
    gradient: "135deg, #6366F120, #38BDF810",
    color: "#6366F1",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT", "Tailwind CSS"],
    live: "https://heroapps-nozib.netlify.app",
    github: "https://github.com/nozibuddowla/hero-apps-client",
    githubServer: "https://github.com/nozibuddowla/hero-apps-server",
    challenges: [
      "Designing a scalable taxonomy system for categorizing diverse web utilities across multiple domains",
      "Implementing JWT refresh token rotation to keep sessions alive without compromising security",
      "Building a performant MongoDB search index on a large app collection with compound query support",
    ],
    improvements: [
      "Add user-submitted app reviews and a community rating system",
      "Build a browser extension for one-click access to bookmarked apps",
      "Integrate uptime monitoring and health checks for each listed app",
    ],
  },
  {
    id: "smartdeals",
    title: "Smart Deals",
    subtitle: "Product Discovery Platform",
    desc: "A responsive marketplace for buying and selling used products. Features advanced filtering, search with debouncing, Firebase Authentication, and real-time data flow between client and server.",
    image:
      "https://api.microlink.io/?url=https://smart-deals-nozib.netlify.app&screenshot=true&meta=false&embed=screenshot.url",
    emoji: "🛍️",
    gradient: "135deg, #EC489920, #F59E0B10",
    color: "#EC4899",
    tech: [
      "React",
      "Firebase Auth",
      "Node.js",
      "MongoDB",
      "Express",
      "Tailwind CSS",
    ],
    live: "https://smart-deals-nozib.netlify.app",
    github: "https://github.com/nozibuddowla/smart-deals-client",
    githubServer: "https://github.com/nozibuddowla/smart-deals-server",
    challenges: [
      "Building efficient search with debouncing across large product datasets to avoid excessive API calls",
      "Managing complex multi-filter state (category, price, condition) without Redux overhead",
      "Ensuring a fully mobile-first layout with dynamic grid adjustments across all breakpoints",
    ],
    improvements: [
      "Add price comparison across multiple vendors with a deal alert system via email",
      "Implement PWA support so users can browse saved deals offline",
      "Build an AI-powered recommendation engine based on browsing and purchase history",
    ],
  },
];

// ── Modal ─────────────────────────────────────────────────────────────────────
function ProjectModal({ project, onClose }) {
  const [imgError, setImgError] = useState(false);
  if (!project) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 200,
          background: "rgba(0,0,0,0.88)",
          backdropFilter: "blur(14px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          overflowY: "auto",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.88 }}
          transition={{ type: "spring", stiffness: 280, damping: 26 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: "rgba(8,10,18,0.99)",
            border: `1px solid ${project.color}28`,
            borderRadius: 26,
            padding: "40px 36px",
            maxWidth: 740,
            width: "100%",
            position: "relative",
            boxShadow: `0 0 100px ${project.color}12`,
            maxHeight: "90vh",
            overflowY: "auto",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 3,
              background: `linear-gradient(to right, ${project.color}, transparent)`,
              borderRadius: "26px 26px 0 0",
            }}
          />
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: 18,
              right: 18,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "50%",
              width: 38,
              height: 38,
              cursor: "pointer",
              color: "rgba(255,255,255,0.6)",
              fontSize: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ✕
          </button>

          {/* Preview image */}
          <div
            style={{
              width: "100%",
              height: 210,
              borderRadius: 16,
              marginBottom: 28,
              background: `linear-gradient(${project.gradient})`,
              border: `1px solid ${project.color}18`,
              overflow: "hidden",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 60,
            }}
          >
            {!imgError && (
              <img
                src={project.image}
                alt={project.title}
                onError={() => setImgError(true)}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            )}
            <span
              style={{
                position: "relative",
                zIndex: 1,
                opacity: imgError ? 1 : 0,
              }}
            >
              {project.emoji}
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(22px,3vw,28px)",
              fontWeight: 900,
              color: "#fff",
              marginBottom: 4,
            }}
          >
            {project.title}
          </h2>
          <p
            style={{
              color: project.color,
              fontWeight: 600,
              fontSize: 14,
              marginBottom: 18,
            }}
          >
            {project.subtitle}
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              marginBottom: 22,
            }}
          >
            {project.tech.map((t) => (
              <span
                key={t}
                style={{
                  fontSize: 12,
                  padding: "4px 12px",
                  borderRadius: 999,
                  background: `${project.color}14`,
                  border: `1px solid ${project.color}28`,
                  color: project.color,
                  fontWeight: 600,
                }}
              >
                {t}
              </span>
            ))}
          </div>

          <p
            style={{
              color: "rgba(255,255,255,0.52)",
              lineHeight: 1.8,
              fontSize: 15,
              marginBottom: 28,
            }}
          >
            {project.desc}
          </p>

          <div
            style={{
              display: "flex",
              gap: 12,
              marginBottom: 32,
              flexWrap: "wrap",
            }}
          >
            <motion.a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: `linear-gradient(135deg, ${project.color}, #6366F1)`,
                borderRadius: 999,
                padding: "12px 28px",
                color: "#fff",
                fontWeight: 700,
                fontSize: 14,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              🔗 Live Demo
            </motion.a>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 999,
                padding: "12px 28px",
                color: "#fff",
                fontWeight: 700,
                fontSize: 14,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              ⭐ Client Repo
            </motion.a>
            {project.githubServer && (
              <motion.a
                href={project.githubServer}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 999,
                  padding: "12px 28px",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 14,
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                🗄️ Server Repo
              </motion.a>
            )}
          </div>

          <div style={{ marginBottom: 26 }}>
            <h4
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: "#fff",
                marginBottom: 14,
              }}
            >
              ⚡ Challenges Faced
            </h4>
            {project.challenges.map((c, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                  marginBottom: 10,
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#F59E0B",
                    flexShrink: 0,
                    marginTop: 7,
                  }}
                />
                <p
                  style={{
                    color: "rgba(255,255,255,0.48)",
                    fontSize: 14,
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {c}
                </p>
              </div>
            ))}
          </div>

          <div>
            <h4
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: "#fff",
                marginBottom: 14,
              }}
            >
              🚀 Future Improvements
            </h4>
            {project.improvements.map((imp, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                  marginBottom: 10,
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#4ADE80",
                    flexShrink: 0,
                    marginTop: 7,
                  }}
                />
                <p
                  style={{
                    color: "rgba(255,255,255,0.48)",
                    fontSize: 14,
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {imp}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ── Card image ────────────────────────────────────────────────────────────────
function CardImage({ project }) {
  const [imgError, setImgError] = useState(false);
  return (
    <div
      style={{
        width: "100%",
        height: 180,
        flexShrink: 0,
        background: `linear-gradient(${project.gradient})`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 48,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {!imgError && (
        <img
          src={project.image}
          alt={project.title}
          onError={() => setImgError(true)}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      )}
      {imgError && <span>{project.emoji}</span>}
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel number="07" label="PROJECTS" color="#38BDF8" />

        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -8, boxShadow: `0 28px 64px ${p.color}1A` }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  backdropFilter: "blur(20px)",
                  borderRadius: 22,
                  overflow: "hidden",
                  cursor: "pointer",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    height: 3,
                    background: `linear-gradient(to right, ${p.color}, transparent)`,
                    flexShrink: 0,
                  }}
                />
                <CardImage project={p} />

                <div
                  style={{
                    padding: "22px 24px",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      fontSize: 13,
                      fontFamily: "monospace",
                      color: p.color,
                      marginBottom: 8,
                      fontWeight: 600,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3
                    style={{
                      fontSize: 19,
                      fontWeight: 800,
                      color: "#fff",
                      marginBottom: 4,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      color: p.color,
                      fontSize: 13,
                      fontWeight: 600,
                      marginBottom: 12,
                    }}
                  >
                    {p.subtitle}
                  </p>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.42)",
                      fontSize: 14,
                      lineHeight: 1.6,
                      marginBottom: 18,
                      flex: 1,
                    }}
                  >
                    {p.desc.slice(0, 115)}...
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 6,
                      marginBottom: 20,
                    }}
                  >
                    {p.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: 11,
                          padding: "3px 10px",
                          borderRadius: 999,
                          background: `${p.color}12`,
                          border: `1px solid ${p.color}24`,
                          color: p.color,
                          fontWeight: 600,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                    {p.tech.length > 3 && (
                      <span
                        style={{
                          fontSize: 11,
                          color: "rgba(255,255,255,0.28)",
                          padding: "3px 6px",
                        }}
                      >
                        +{p.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSelected(p)}
                    style={{
                      width: "100%",
                      background: `linear-gradient(135deg, ${p.color}1A, transparent)`,
                      border: `1px solid ${p.color}38`,
                      borderRadius: 12,
                      padding: "11px",
                      color: p.color,
                      fontWeight: 700,
                      fontSize: 14,
                      cursor: "pointer",
                      letterSpacing: "0.03em",
                    }}
                  >
                    View Details →
                  </motion.button>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
        }
        @media (max-width: 600px) {
          .projects-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
