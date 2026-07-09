import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Code2, FileText } from "lucide-react";

const About = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="about" className="py-24 relative" ref={sectionRef}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 reveal">
            <span className="inline-block font-mono text-sm text-neon-cyan/60 mb-4">
              {'// section: 01'}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-cyan">About Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A passionate developer driven by innovation and continuous learning
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* README.md Card */}
            <div className="lg:col-span-3 reveal reveal-delay-1">
              <div className="terminal-window h-full">
                <div className="terminal-header">
                  <div className="terminal-dot terminal-dot-red" />
                  <div className="terminal-dot terminal-dot-yellow" />
                  <div className="terminal-dot terminal-dot-green" />
                  <span className="ml-3 text-xs font-mono text-muted-foreground flex items-center gap-1.5">
                    <FileText className="w-3 h-3" />
                    README.md
                  </span>
                </div>
                <div className="p-6 md:p-8">
                  {/* Markdown-style content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-neon-cyan font-mono flex items-center gap-2">
                      <span className="text-neon-cyan/40">#</span>
                      My Journey
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-[15px]">
                      Currently pursuing Computer Engineering at Dwarkadas Jivanlal Sanghvi College 
                      of Engineering, Mumbai, I'm passionate about creating digital solutions that 
                      make a difference. My journey in tech started with a curiosity about how things 
                      work and has evolved into a strong focus on building efficient, scalable, and 
                      user-centric applications. I continuously work on improving my problem-solving 
                      skills and exploring modern technologies to build better systems.
                    </p>

                    <div className="pt-4 border-t border-border/50">
                      <div className="font-mono text-sm space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-neon-purple">const</span>
                          <span className="text-neon-cyan">location</span>
                          <span className="text-muted-foreground">=</span>
                          <span className="text-neon-green">"Mumbai, India"</span>
                          <span className="text-muted-foreground">;</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-neon-purple">const</span>
                          <span className="text-neon-cyan">education</span>
                          <span className="text-muted-foreground">=</span>
                          <span className="text-neon-green">"B.E. Computer Eng"</span>
                          <span className="text-muted-foreground">;</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-neon-purple">const</span>
                          <span className="text-neon-cyan">passion</span>
                          <span className="text-muted-foreground">=</span>
                          <span className="text-neon-green">"Building cool stuff"</span>
                          <span className="text-muted-foreground">;</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Panel — Web Dev Focus */}
            <div className="lg:col-span-2 reveal reveal-delay-2">
              <div className="neon-border rounded-xl p-6 bg-card/50 backdrop-blur-sm h-full flex flex-col justify-center">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-neon-cyan/10 text-neon-cyan">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-2">
                      Web Development
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      Building responsive web applications with modern web technologies
                    </p>
                    <div className="font-mono text-xs space-y-1.5 text-muted-foreground">
                      <div>
                        <span className="text-neon-green">❯</span> React + TypeScript
                      </div>
                      <div>
                        <span className="text-neon-green">❯</span> Node.js + Express
                      </div>
                      <div>
                        <span className="text-neon-green">❯</span> MongoDB + PostgreSQL
                      </div>
                      <div>
                        <span className="text-neon-green">❯</span> AWS + Docker
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;