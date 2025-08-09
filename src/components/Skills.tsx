import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Globe, 
  Palette, 
  Brain, 
  Database, 
  GitBranch, 
  Wrench,
  Laptop
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "JavaScript", "Java", "C", "C++", "TypeScript"],
      color: "tech-primary"
    },
    {
      title: "Web Development",
      icon: <Globe className="w-6 h-6" />,
      skills: ["React.js", "HTML", "CSS", "Node.js", "Vite", "Tailwind CSS"],
      color: "tech-secondary"
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="w-6 h-6" />,
      skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "Design Systems"],
      color: "tech-accent"
    },
    {
      title: "Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      skills: ["pandas", "scikit-learn", "Data Analysis", "Python ML"],
      color: "tech-success"
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["MySQL", "Firebase", "Database Design"],
      color: "tech-primary"
    },
    {
      title: "Version Control",
      icon: <GitBranch className="w-6 h-6" />,
      skills: ["Git", "GitHub", "Collaboration"],
      color: "tech-secondary"
    },
    {
      title: "Development Tools",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["VS Code", "Postman", "Chrome DevTools"],
      color: "tech-accent"
    },
    {
      title: "Frameworks & Libraries",
      icon: <Laptop className="w-6 h-6" />,
      skills: ["React", "TypeScript", "Tailwind", "Vite"],
      color: "tech-success"
    }
  ];

  const getColorClass = (color: string) => {
    const colorMap = {
      "tech-primary": "text-tech-primary bg-tech-primary/10 border-tech-primary/20",
      "tech-secondary": "text-tech-secondary bg-tech-secondary/10 border-tech-secondary/20",
      "tech-accent": "text-tech-accent bg-tech-accent/10 border-tech-accent/20",
      "tech-success": "text-tech-success bg-tech-success/10 border-tech-success/20"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap["tech-primary"];
  };

  return (
    <section id="skills" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-tech bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise and tools I work with
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${getColorClass(category.color)}`}>
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className={`text-xs px-2 py-1 transition-all duration-300 hover:scale-105 ${getColorClass(category.color)} border`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;