import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const sectionRef = useScrollReveal();

  const experiences = [
    {
      title: "Full Stack Development Intern",
      company: "Dynamisch IT Pvt Ltd",
      period: "Jul 2026 - Present",
      type: "Hybrid",
      location: "Pune",
      responsibilities: [
        "Developing and maintaining full-stack web applications using modern frontend and backend technologies.",
        "Collaborating with cross-functional teams to implement new features, debug issues, and enhance application performance.",
        "Participating in code reviews, Agile/Scrum ceremonies, and version control workflows using Git and GitHub while gaining hands-on industry experience."
      ]
    },
    {
      title: "Freelance Web Developer",
      company: "Dilip Industries",
      period: "Jan 2026",
      type: "Freelance",
      location: "Remote",
      responsibilities: [
        "Designed and developed a fully responsive company website for Dilip Industries to showcase their industrial products and services.",
        "Created structured product pages with detailed descriptions and user-friendly navigation to enhance customer understanding.",
        "Delivered a customized web solution focused on performance, usability, and aligning with client requirements for improved online presence."
      ]
    },
    {
      title: "Growth & Operations Intern",
      company: "LearnNex (Wipro Partnership)",
      period: "July 2025",
      type: "Remote",
      location: "Bangalore",
      responsibilities: [
        "Contributed to strategic growth planning and operations management for the LearnNex platform.",
        "Assisted in business development initiatives supporting expansion in tech driven education solutions.",
        "Collaborated with cross functional teams to deliver operational insights increasing user engagement."
      ]
    }
  ];

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case "Hybrid": return "bg-neon-cyan/10 text-neon-cyan border-neon-cyan/20";
      case "Freelance": return "bg-neon-green/10 text-neon-green border-neon-green/20";
      case "Remote": return "bg-neon-purple/10 text-neon-purple border-neon-purple/20";
      default: return "bg-neon-blue/10 text-neon-blue border-neon-blue/20";
    }
  };

  return (
    <section id="experience" className="py-24 relative" ref={sectionRef}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 reveal">
            <span className="inline-block font-mono text-sm text-neon-cyan/60 mb-4">
              {'// section: 03'}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-cyan">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional journey in development and operations
            </p>
          </div>

          {/* Timeline */}
          <div className="relative pl-14 md:pl-16">
            {/* Vertical Line */}
            <div className="timeline-line" />

            <div className="space-y-10">
              {experiences.map((experience, index) => (
                <div
                  key={index}
                  className={`relative reveal reveal-delay-${Math.min(index + 1, 4)}`}
                >
                  {/* Timeline Dot */}
                  <div className={`timeline-dot pulse-glow`} style={{ top: '28px' }} />

                  {/* Card */}
                  <div className="neon-border rounded-xl p-6 md:p-8 bg-card/50 backdrop-blur-sm hover-lift">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="text-xl md:text-2xl font-bold text-foreground">
                            {experience.title}
                          </h3>
                          <span className={`inline-flex items-center px-2.5 py-0.5 text-xs font-mono rounded-md border ${getTypeBadgeColor(experience.type)}`}>
                            {experience.type}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-neon-cyan mb-3 font-mono">
                          {experience.company}
                        </h4>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-neon-cyan/60" />
                            <span className="font-mono">{experience.period}</span>
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-neon-purple/60" />
                            {experience.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="space-y-3 mt-4 pt-4 border-t border-border/50">
                      {experience.responsibilities.map((resp, respIndex) => (
                        <div key={respIndex} className="flex items-start gap-3">
                          <span className="text-neon-green mt-1 text-sm font-mono shrink-0">▸</span>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {resp}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;