import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Code,
  Globe,
  Palette,
  Brain,
  Database,
  Wrench,
  Cloud,
  GitBranch
} from "lucide-react";

const Skills = () => {
  const sectionRef = useScrollReveal();

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-5 h-5" />,
      command: "ls ~/skills/languages",
      skills: ["Python", "Java", "JavaScript", "C", "C++", "TypeScript"],
      color: "cyan"
    },
    {
      title: "Web Development",
      icon: <Globe className="w-5 h-5" />,
      command: "ls ~/skills/web",
      skills: ["React.js", "HTML", "CSS", "Express.js", "Node.js", "Vite", "Tailwind CSS"],
      color: "green"
    },
    {
      title: "Cloud & Storage",
      icon: <Cloud className="w-5 h-5" />,
      command: "ls ~/skills/cloud",
      skills: ["AWS", "Cloudinary"],
      color: "purple"
    },
    {
      title: "Databases",
      icon: <Database className="w-5 h-5" />,
      command: "ls ~/skills/databases",
      skills: ["MongoDB", "Supabase", "PostgreSQL", "MySQL"],
      color: "blue"
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="w-5 h-5" />,
      command: "ls ~/skills/design",
      skills: ["Figma", "Prototyping", "Design Systems"],
      color: "pink"
    },
    {
      title: "Machine Learning & Data",
      icon: <Brain className="w-5 h-5" />,
      command: "ls ~/skills/ml",
      skills: ["Pandas", "scikit-learn", "Data Preprocessing & Visualization"],
      color: "orange"
    },
    {
      title: "Version Control",
      icon: <GitBranch className="w-5 h-5" />,
      command: "ls ~/skills/vcs",
      skills: ["Git", "GitHub"],
      color: "cyan"
    },
    {
      title: "Dev Tools",
      icon: <Wrench className="w-5 h-5" />,
      command: "ls ~/skills/tools",
      skills: ["VS Code", "Postman"],
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    const map: Record<string, { text: string; bg: string; border: string; badge: string }> = {
      cyan: { text: "text-neon-cyan", bg: "bg-neon-cyan/10", border: "border-neon-cyan/20", badge: "bg-neon-cyan/10 text-neon-cyan border-neon-cyan/20" },
      green: { text: "text-neon-green", bg: "bg-neon-green/10", border: "border-neon-green/20", badge: "bg-neon-green/10 text-neon-green border-neon-green/20" },
      purple: { text: "text-neon-purple", bg: "bg-neon-purple/10", border: "border-neon-purple/20", badge: "bg-neon-purple/10 text-neon-purple border-neon-purple/20" },
      blue: { text: "text-neon-blue", bg: "bg-neon-blue/10", border: "border-neon-blue/20", badge: "bg-neon-blue/10 text-neon-blue border-neon-blue/20" },
      pink: { text: "text-neon-pink", bg: "bg-neon-pink/10", border: "border-neon-pink/20", badge: "bg-neon-pink/10 text-neon-pink border-neon-pink/20" },
      orange: { text: "text-neon-orange", bg: "bg-neon-orange/10", border: "border-neon-orange/20", badge: "bg-neon-orange/10 text-neon-orange border-neon-orange/20" },
    };
    return map[color] || map.cyan;
  };

  return (
    <section id="skills" className="py-24 relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 reveal">
            <span className="inline-block font-mono text-sm text-neon-cyan/60 mb-4">
              {'// section: 02'}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-cyan">Technical Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical toolkit
            </p>
          </div>

          {/* Skills Grid — Terminal Window Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {skillCategories.map((category, index) => {
              const colors = getColorClasses(category.color);
              return (
                <div
                  key={index}
                  className={`reveal reveal-delay-${Math.min(index + 1, 8)} terminal-window hover-lift group`}
                >
                  {/* Terminal Chrome */}
                  <div className="terminal-header">
                    <div className="terminal-dot terminal-dot-red" />
                    <div className="terminal-dot terminal-dot-yellow" />
                    <div className="terminal-dot terminal-dot-green" />
                    <span className="ml-2 text-xs font-mono text-muted-foreground truncate">
                      {category.title.toLowerCase().replace(/\s+/g, '-')}
                    </span>
                  </div>

                  {/* Terminal Body */}
                  <div className="terminal-body min-h-[160px]">
                    {/* Command */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-neon-green">❯</span>
                      <span className="text-muted-foreground text-xs">{category.command}</span>
                    </div>

                    {/* Category Icon + Title */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className={`p-1.5 rounded-md ${colors.bg} ${colors.text}`}>
                        {category.icon}
                      </div>
                      <span className={`font-semibold text-sm ${colors.text}`}>
                        {category.title}
                      </span>
                    </div>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`inline-block px-2.5 py-1 text-xs rounded-md border transition-all duration-300 hover:scale-105 ${colors.badge}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;