import { useEffect, useRef, useState, useCallback } from "react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

// ── Matrix Rain Canvas ──
const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const chars = "01アイウエオカキクケコサシスセソ{}[]()<>=/\\|;:,.~`!@#$%^&*";
    const fontSize = 14;
    let columns: number;
    let drops: number[];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = new Array(columns).fill(1).map(() => Math.random() * -100);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.fillStyle = "rgba(10, 10, 15, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "hsla(180, 100%, 50%, 0.15)";
      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

      for (let i = 0; i < columns; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Brighter for leading character
        if (Math.random() > 0.95) {
          ctx.fillStyle = "hsla(180, 100%, 50%, 0.6)";
        } else {
          ctx.fillStyle = "hsla(180, 100%, 50%, 0.12)";
        }

        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.5;
      }
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

// ── Typewriter Hook ──
const useTypewriter = (words: string[], typingSpeed = 80, deletingSpeed = 50, pauseTime = 2000) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length + (isDeleting ? -1 : 1)));
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
};

// ── Main Hero Component ──
const Hero = () => {
  const typedText = useTypewriter(
    ["Full Stack Developer", "Web Developer", "UI/UX Enthusiast", "Problem Solver"],
    70,
    40,
    2500
  );

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Matrix Background */}
      <MatrixRain />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_20%,hsl(240,10%,4%)_70%)]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 z-[1] bg-grid-pattern opacity-40" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Terminal-style greeting */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 font-mono text-sm text-neon-cyan animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-glow-pulse" />
            <span>~/portfolio $</span>
            <span className="text-muted-foreground">whoami</span>
          </div>

          {/* Name — Glitch Effect */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span
              className="glitch text-gradient-cyan inline-block"
              data-text="Dhruv Sunil Ingale"
            >
              Dhruv Sunil Ingale
            </span>
          </h1>

          {/* Typewriter Role */}
          <div className="mb-8 animate-slide-up">
            <span className="inline-flex items-center text-xl sm:text-2xl md:text-3xl font-mono">
              <span className="text-neon-green mr-3">{'>'}</span>
              <span className="text-foreground">{typedText}</span>
              <span className="typewriter-cursor"></span>
            </span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in font-light">
            Passionate developer focused on building modern, scalable applications
            that solve real-world problems. Strong emphasis on clean design,
            performance, and delivering seamless user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14 animate-fade-in">
            <button
              id="hero-cta-projects"
              onClick={() => scrollToSection("projects")}
              className="group relative px-8 py-4 font-mono text-sm font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_hsla(180,100%,50%,0.3)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-blue opacity-90 group-hover:opacity-100 transition-opacity" />
              <span className="relative text-background flex items-center justify-center gap-2">
                <span className="text-background/70">{'>'}</span>
                view_projects()
              </span>
            </button>
            <button
              id="hero-cta-contact"
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 font-mono text-sm font-semibold rounded-xl border border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/10 hover:border-neon-cyan/50 hover:shadow-[0_0_20px_hsla(180,100%,50%,0.15)] transition-all duration-300"
            >
              <span className="text-neon-cyan/50 mr-1">$</span>
              get_in_touch()
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-14 animate-fade-in">
            {[
              { icon: Mail, href: "mailto:ingaledhruv4144@gmail.com", label: "Email", id: "hero-social-email" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/dmw14", label: "LinkedIn", id: "hero-social-linkedin" },
              { icon: Github, href: "https://github.com/dmw14", label: "GitHub", id: "hero-social-github" },
            ].map((social) => (
              <a
                key={social.label}
                id={social.id}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="group p-4 rounded-xl border border-border/50 bg-card/30 hover:bg-neon-cyan/5 hover:border-neon-cyan/30 hover:shadow-[0_0_15px_hsla(180,100%,50%,0.15)] transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-neon-cyan transition-colors" />
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div
            className="flex flex-col items-center cursor-pointer animate-float group"
            onClick={() => scrollToSection("skills")}
          >
            <span className="text-xs font-mono text-muted-foreground mb-2 group-hover:text-neon-cyan transition-colors">
              scroll_down()
            </span>
            <ChevronDown className="w-5 h-5 text-neon-cyan/60 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;