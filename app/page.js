"use client";
import dynamic from "next/dynamic";

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

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
    </main>
  );
}
