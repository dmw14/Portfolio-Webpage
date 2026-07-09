import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Clock, Users, Lightbulb, Gamepad2, Car, Trophy, Cpu } from "lucide-react";

const SkillsInterests = () => {
  const sectionRef = useScrollReveal();

  const softSkills = [
    { icon: <Clock className="w-5 h-5" />, skill: "Time Management", command: "schedule --optimize" },
    { icon: <Users className="w-5 h-5" />, skill: "Teamwork & Collaboration", command: "collab --sync-all" },
    { icon: <Lightbulb className="w-5 h-5" />, skill: "Creativity & Innovation", command: "think --outside-box" }
  ];

  const interests = [
    { name: "Automobiles & Machines", icon: <Car className="w-4 h-4" />, color: "neon-cyan" },
    { name: "Badminton", icon: <Trophy className="w-4 h-4" />, color: "neon-green" },
    { name: "Cricket", icon: <Gamepad2 className="w-4 h-4" />, color: "neon-purple" },
    { name: "Automotive Technology", icon: <Cpu className="w-4 h-4" />, color: "neon-blue" }
  ];

  return (
    <section id="skills-interests" className="py-24 relative" ref={sectionRef}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 reveal">
            <span className="inline-block font-mono text-sm text-neon-cyan/60 mb-4">
              {'// section: 07'}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-cyan">Skills & Interests</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Personal capabilities beyond the code
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Soft Skills — Terminal Output */}
            <div className="reveal reveal-delay-1 terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot terminal-dot-red" />
                <div className="terminal-dot terminal-dot-yellow" />
                <div className="terminal-dot terminal-dot-green" />
                <span className="ml-3 text-xs font-mono text-muted-foreground">soft-skills.sh</span>
              </div>
              <div className="terminal-body space-y-5">
                <div className="text-neon-green font-mono text-xs mb-4">
                  ❯ ./run soft-skills.sh
                </div>
                {softSkills.map((item, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-neon-cyan/60 font-mono text-xs">$</span>
                      <span className="text-neon-green font-mono text-xs">{item.command}</span>
                    </div>
                    <div className="flex items-center gap-3 pl-5">
                      <div className="text-neon-cyan group-hover:text-neon-green transition-colors">
                        {item.icon}
                      </div>
                      <span className="text-foreground font-medium text-sm">
                        {item.skill}
                      </span>
                      <span className="text-neon-green text-xs font-mono ml-auto">✓ loaded</span>
                    </div>
                  </div>
                ))}
                <div className="pt-3 border-t border-border/30">
                  <span className="text-neon-green font-mono text-xs">
                    ❯ <span className="text-muted-foreground">process complete — 3 skills loaded</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Interests — Holographic Cards */}
            <div className="reveal reveal-delay-2 neon-border rounded-xl p-6 md:p-8 bg-card/50 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-neon-cyan font-mono mb-6 flex items-center gap-2">
                <span className="text-neon-cyan/40">#</span>
                Interests
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className={`group flex items-center gap-4 p-4 rounded-lg border border-${interest.color}/10 bg-${interest.color}/5 hover:bg-${interest.color}/10 hover:border-${interest.color}/30 transition-all duration-300 cursor-default`}
                  >
                    <div className={`p-2 rounded-md bg-${interest.color}/10 text-${interest.color}`}>
                      {interest.icon}
                    </div>
                    <span className="text-foreground font-medium text-sm">
                      {interest.name}
                    </span>
                    <span className={`ml-auto text-xs font-mono text-${interest.color}/60`}>
                      ●
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsInterests;