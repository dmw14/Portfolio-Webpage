import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowDown01, ArrowDown01Icon, ArrowDownAZIcon, ArrowDownCircle, ArrowDownFromLine, ArrowLeft, ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-gradient-to-br from-tech-primary/5 to-tech-secondary/5"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-tech bg-clip-text text-transparent">
                Dhruv Sunil Ingale
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6 animate-slide-in-left">
              Web Developer • UI/UX Designer • ML Enthusiast
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in">
              I am a passionate Frontend Developer and UI/UX Designer with experience 
              in building interactive web applications using React.js and Figma. I also 
              have a keen interest in Machine Learning & Artificial Intelligence, 
              currently exploring real-world applications.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button
              variant="tech"
              size="xl"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button
              variant="tech_outline"
              size="xl"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12 animate-fade-in">
            <a
              href="mailto:ingaledhruv4144@gmail.com"
              className="p-3 rounded-full bg-card hover:bg-tech-primary/10 transition-all duration-300 shadow-soft hover:shadow-medium"
            >
              <Mail className="w-6 h-6 text-tech-primary" />
            </a>
            <a
              href="https://www.linkedin.com/in/dhruv-ingale-dmw14"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-tech-primary/10 transition-all duration-300 shadow-soft hover:shadow-medium"
            >
              <Linkedin className="w-6 h-6 text-tech-primary" />
            </a>
            <a
              href="https://github.com/dmw14"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-tech-primary/10 transition-all duration-300 shadow-soft hover:shadow-medium"
            >
              <Github className="w-6 h-6 text-tech-primary" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div
            className="flex flex-col items-center cursor-pointer animate-float"
            onClick={() => scrollToSection("about")}
          >
            <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
            <ArrowDown className="w-6 h-6 text-tech-primary animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;