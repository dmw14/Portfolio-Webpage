import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Lightbulb } from "lucide-react";

const SkillsInterests = () => {
  const softSkills = [
    { icon: <Clock className="w-5 h-5" />, skill: "Time Management" },
    { icon: <Users className="w-5 h-5" />, skill: "Teamwork & Collaboration" },
    { icon: <Lightbulb className="w-5 h-5" />, skill: "Creativity & Innovation" }
  ];

  const interests = [
    "Automobiles & Machines",
    "Badminton",
    "Cricket",
    "Automotive Technology",
    "Engineering Innovations"
  ];

  return (
    <section id="skills-interests" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-tech bg-clip-text text-transparent">
                Skills & Interests
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Personal capabilities and interests that drive my passion
            </p>
          </div>

          {/* Skills and Interests Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Soft Skills */}
            <Card className="p-8 bg-gradient-card shadow-medium">
              <h3 className="text-2xl font-semibold mb-6 text-tech-primary">Soft Skills</h3>
              <div className="space-y-4">
                {softSkills.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="text-tech-secondary">{item.icon}</div>
                    <span className="text-foreground font-medium">{item.skill}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Interests */}
            <Card className="p-8 bg-gradient-card shadow-medium">
              <h3 className="text-2xl font-semibold mb-6 text-tech-primary">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-3 py-1 text-sm bg-tech-primary/10 text-tech-primary hover:bg-tech-primary/20 transition-colors"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsInterests;