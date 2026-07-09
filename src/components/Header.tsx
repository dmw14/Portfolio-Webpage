import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Track active section
      const sections = navItems.map(item => item.id);
      sections.unshift("hero");
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Education", id: "education" },
    { label: "Projects", id: "projects" },
    { label: "Certifications", id: "certifications" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-strong shadow-[0_1px_0_hsla(180,100%,50%,0.15)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo — Terminal Prompt Style */}
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => scrollToSection("hero")}
          >
            <Terminal className="w-5 h-5 text-neon-cyan group-hover:animate-glow-pulse transition-colors" />
            <span className="font-mono text-lg font-semibold">
              <span className="text-neon-green">dhruv</span>
              <span className="text-muted-foreground">@</span>
              <span className="text-neon-purple">portfolio</span>
              <span className="text-muted-foreground">:~$</span>
              <span className="typewriter-cursor"></span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 font-mono text-sm transition-all duration-300 rounded-lg
                  ${activeSection === item.id
                    ? "text-neon-cyan"
                    : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {activeSection === item.id && (
                  <span className="absolute inset-0 bg-neon-cyan/5 rounded-lg" />
                )}
                <span className="relative">
                  <span className="text-neon-cyan/50 mr-1">./</span>
                  {item.label.toLowerCase()}
                </span>
              </button>
            ))}
            <button
              id="nav-cta-contact"
              onClick={() => scrollToSection("contact")}
              className="ml-4 px-5 py-2 font-mono text-sm rounded-lg bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20 hover:bg-neon-cyan/20 hover:border-neon-cyan/40 hover:shadow-[0_0_15px_hsla(180,100%,50%,0.2)] transition-all duration-300"
            >
              $ connect
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden p-2 rounded-lg text-foreground hover:text-neon-cyan hover:bg-neon-cyan/5 transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-border/50 space-y-1">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-3 font-mono text-sm rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-neon-cyan bg-neon-cyan/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span className="text-neon-green mr-2">❯</span>
                {item.label.toLowerCase()}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full text-left px-4 py-3 mt-2 font-mono text-sm text-neon-cyan bg-neon-cyan/5 rounded-lg border border-neon-cyan/10"
            >
              <span className="text-neon-green mr-2">$</span>
              connect --now
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;