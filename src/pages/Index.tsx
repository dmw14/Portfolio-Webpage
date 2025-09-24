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

const Index = () => {
  return (
    <div className="min-h-screen">
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
  );
};

export default Index;
