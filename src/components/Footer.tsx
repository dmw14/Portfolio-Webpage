import { Github, Linkedin, Mail, Terminal } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/30 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Terminal className="w-5 h-5 text-neon-cyan/60" />
              <span className="text-xl font-bold font-mono">
                <span className="text-neon-green">dhruv</span>
                <span className="text-muted-foreground">::</span>
                <span className="text-neon-cyan">portfolio</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground font-mono">
              Full Stack Developer · Mumbai, India
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-3 mb-8">
            {[
              { icon: Mail, href: "mailto:ingaledhruv4144@gmail.com", label: "Email" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/dmw14", label: "LinkedIn" },
              { icon: Github, href: "https://github.com/dmw14", label: "GitHub" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="p-2.5 rounded-lg border border-border/30 text-muted-foreground hover:text-neon-cyan hover:border-neon-cyan/20 hover:bg-neon-cyan/5 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent mb-6" />

          {/* Bottom */}
          <div className="text-center space-y-3">
            <p className="text-xs text-muted-foreground font-mono">
              <span className="text-neon-green">$</span>
              <span className="ml-2">echo</span>
              <span className="text-neon-cyan ml-1">"© {currentYear} Dhruv Sunil Ingale. All rights reserved."</span>
            </p>
            <p className="text-[11px] text-muted-foreground/60 font-mono">
              B.E. Computer Engineering @ DJSCE, Mumbai (Expected 2027) ·
              Open to freelance & internship opportunities
            </p>
            <p className="text-[11px] text-muted-foreground/40 font-mono">
              process.exit(0) — built with React + TypeScript + ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;