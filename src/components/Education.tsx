import { useScrollReveal, useCountUp } from "@/hooks/useScrollReveal";
import { GraduationCap, Calendar, TrendingUp } from "lucide-react";

const Education = () => {
  const sectionRef = useScrollReveal();
  const cgpaRef = useCountUp(8, 1500);
  const semRef = useCountUp(6, 1500);
  const yearRef = useCountUp(2027, 2000);

  const educationData = [
    {
      institution: "Dwarkadas Jivanlal Sanghvi College of Engineering, Mumbai",
      degree: "Bachelor of Engineering (B.E.) in Computer Engineering",
      period: "August 2023 - 2027",
      score: "CGPA: 8.14/10 (till 6th Semester)",
      status: "current",
      description: "Pursuing comprehensive computer engineering curriculum with focus on software development, algorithms, and emerging technologies."
    },
    {
      institution: "Jaysingpur College, Jaysingpur",
      degree: "Class 12 - MH State Board",
      period: "March 2023",
      score: "77.67%",
      status: "completed",
      description: "Completed higher secondary education with strong foundation in science and mathematics."
    },
    {
      institution: "Alphonsa School & Jr. College, Yadrav, Ichalkaranji",
      degree: "Class 10 - MH State Board",
      period: "March 2021",
      score: "88.60%",
      status: "completed",
      description: "Completed secondary education with excellent academic performance."
    }
  ];

  return (
    <section id="education" className="py-24 relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 reveal">
            <span className="inline-block font-mono text-sm text-neon-cyan/60 mb-4">
              {'// section: 04'}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-cyan">Education</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              My academic journey and achievements
            </p>
          </div>

          {/* Education Cards — Code File Style */}
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`reveal reveal-delay-${index + 1} terminal-window hover-lift ${
                  edu.status === 'current' ? 'ring-1 ring-neon-cyan/20' : ''
                }`}
              >
                {/* File Tab Header */}
                <div className="terminal-header">
                  <div className="terminal-dot terminal-dot-red" />
                  <div className="terminal-dot terminal-dot-yellow" />
                  <div className="terminal-dot terminal-dot-green" />
                  <span className="ml-3 text-xs font-mono text-muted-foreground">
                    {edu.status === 'current' ? '📂 current_education.md' : `📄 education_${index + 1}.md`}
                  </span>
                  {edu.status === 'current' && (
                    <span className="ml-auto text-[10px] font-mono px-2 py-0.5 rounded-full bg-neon-green/10 text-neon-green border border-neon-green/20">
                      ● active
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    {/* Main Content */}
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-2.5 rounded-lg ${
                          edu.status === 'current'
                            ? 'bg-neon-cyan text-background'
                            : 'bg-neon-cyan/10 text-neon-cyan'
                        }`}>
                          <GraduationCap className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-foreground mb-1">
                            {edu.degree}
                          </h3>
                          <h4 className="text-base text-neon-cyan font-mono mb-3">
                            {edu.institution}
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {edu.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Info Panel */}
                    <div className="lg:w-56 space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-3.5 h-3.5 text-neon-cyan/60" />
                        <span className="font-mono text-muted-foreground">{edu.period}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-3.5 h-3.5 text-neon-green" />
                        <span className="text-sm font-mono px-2.5 py-1 rounded-md bg-neon-green/10 text-neon-green border border-neon-green/20">
                          {edu.score}
                        </span>
                      </div>

                      {edu.status === 'current' && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-md bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-glow-pulse" />
                          Currently Pursuing
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
            {[
              { ref: cgpaRef, label: "Current CGPA", suffix: ".14", color: "neon-cyan" },
              { ref: semRef, label: "Semesters Done", suffix: "", color: "neon-purple" },
              { ref: yearRef, label: "Expected Grad", suffix: "", color: "neon-green" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`reveal reveal-delay-${index + 5} neon-border rounded-xl p-6 bg-card/50 backdrop-blur-sm text-center hover-lift`}
              >
                <div className={`text-3xl font-bold font-mono text-${stat.color} mb-2`}>
                  <span ref={stat.ref}>0</span>{stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground font-mono">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;