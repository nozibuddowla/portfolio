"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });
const Hero = dynamic(() => import("../components/Hero"), { ssr: false });
const About = dynamic(() => import("../components/About"), { ssr: false });
const Skills = dynamic(() => import("../components/Skills"), { ssr: false });
const Education = dynamic(() => import("../components/Education"), {
  ssr: false,
});
const Experience = dynamic(() => import("../components/Experience"), {
  ssr: false,
});
const Projects = dynamic(() => import("../components/Projects"), {
  ssr: false,
});

export default function Home() {
  const [active, setActive] = useState("Home");
  return (
    <main>
      <Navbar active={active} setActive={setActive} />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
    </main>
  );
}
