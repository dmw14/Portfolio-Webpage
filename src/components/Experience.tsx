import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Web Developer Intern",
      company: "Developers Arena",
      period: "Oct 2025 - Present",
      type: "Internship",
      location: "Remote",
      responsibilities: [
        "Contributing to real-world web development projects under industry mentors",
        "Building and enhancing interactive front-end components using modern web technologies",
        "Gaining hands-on experience in full-stack development and deployment workflows"
      ]
    },
    {
      title: "Growth & Operations Intern",
      company: "LearnNex (Wipro Partnership)",
      period: "July 2025",
      type: "Internship",
      location: "Remote",
      responsibilities: [
        "Contributed to strategic growth planning and operations management for the LearnNex platform",
        "Assisted in business development initiatives supporting expansion in tech driven education solutions",
        "Collaborated with cross functional teams to deliver operational insights increasing user engagement"
      ]
    },
    {
      title: "Freelance Web Developer",
      company: "Dilip Industries",
      period: "Jan 2025",
      type: "Freelance",
      location: "Remote",
      responsibilities: [
        "Designed and developed a responsive product showcase website to display company products",
        "Optimized for mobile and user friendly interactions, focusing on clean UI/UX and brand consistency",
        "Deployed on Vercel for demonstration and client review"
      ]
    }
  ];

  const getTypeBadge = (type: string) => {
    const typeConfig = {
      "Internship": { color: "bg-tech-accent text-white" },
      "Freelance": { color: "bg-tech-success text-white" },
      "Full-time": { color: "bg-tech-primary text-white" }
    };
    const config = typeConfig[type as keyof typeof typeConfig] || typeConfig["Full-time"];
    return <Badge className={config.color}>{type}</Badge>;
  };

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-tech bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional experience in development and operations
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <Card
                key={index}
                className="p-8 bg-gradient-card shadow-medium hover:shadow-large transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-foreground">
                        {experience.title}
                      </h3>
                      {getTypeBadge(experience.type)}
                    </div>
                    <h4 className="text-xl text-tech-primary font-semibold mb-3">
                      {experience.company}
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="space-y-3">
                  {experience.responsibilities.map((responsibility, respIndex) => (
                    <div key={respIndex} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-tech-primary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">
                        {responsibility}
                      </p>
                    </div>
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

export default Experience;