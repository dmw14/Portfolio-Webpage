import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, TrendingUp } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      institution: "Dwarkadas Jivanlal Sanghvi College of Engineering, Mumbai",
      degree: "Bachelor of Engineering (B.E.) in Computer Engineering",
      period: "August 2023 - 2027",
      score: "CGPA: 8.2/10 (till 4th Semester)",
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
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-tech bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              My academic journey and achievements
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <Card
                key={index}
                className={`p-8 bg-gradient-card shadow-medium hover:shadow-large transition-all duration-300 ${
                  edu.status === 'current' ? 'ring-2 ring-tech-primary/20' : ''
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  {/* Main Content */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-lg ${
                        edu.status === 'current' 
                          ? 'bg-tech-primary text-white' 
                          : 'bg-tech-primary/10 text-tech-primary'
                      }`}>
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {edu.degree}
                        </h3>
                        <h4 className="text-lg text-tech-primary font-medium mb-3">
                          {edu.institution}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Info Panel */}
                  <div className="lg:w-64 space-y-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{edu.period}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-tech-success" />
                      <Badge
                        variant="secondary"
                        className="bg-tech-success/10 text-tech-success hover:bg-tech-success/20"
                      >
                        {edu.score}
                      </Badge>
                    </div>

                    {edu.status === 'current' && (
                      <Badge className="bg-tech-primary text-white">
                        Currently Pursuing
                      </Badge>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <Card className="p-6 bg-gradient-card shadow-soft text-center">
              <div className="text-3xl font-bold text-tech-primary mb-2">8.2</div>
              <div className="text-muted-foreground">Current CGPA</div>
            </Card>
            <Card className="p-6 bg-gradient-card shadow-soft text-center">
              <div className="text-3xl font-bold text-tech-secondary mb-2">4</div>
              <div className="text-muted-foreground">Semesters Completed</div>
            </Card>
            <Card className="p-6 bg-gradient-card shadow-soft text-center">
              <div className="text-3xl font-bold text-tech-accent mb-2">2027</div>
              <div className="text-muted-foreground">Expected Graduation</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;