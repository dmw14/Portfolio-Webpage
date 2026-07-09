import { useEffect, useMemo } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import SkillsInterests from "@/components/SkillsInterests";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// ── Floating Code Particles ──
const FloatingParticles = () => {
  const particles = useMemo(() => {
    const symbols = ["{", "}", "</>", "=>", "( )", "[]", "//", "&&", "||", "!=", "===", "++", "::", "/*", "*/", "0x", "fn", "->"];
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      left: `${Math.random() * 100}%`,
      duration: `${15 + Math.random() * 25}s`,
      delay: `${Math.random() * 20}s`,
      size: `${10 + Math.random() * 6}px`,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            fontSize: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        >
          {p.symbol}
        </span>
      ))}
    </div>
  );
};

const Index = () => {
  // Smooth scroll offset for fixed header
  useEffect(() => {
    const handleHashClick = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    handleHashClick();
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Floating Code Particles */}
      <FloatingParticles />

      {/* Grid background */}
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.15] pointer-events-none z-0" />

      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Certifications />
        <SkillsInterests />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
