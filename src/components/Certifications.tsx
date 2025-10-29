import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, Calendar, Users } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Certificate of Growth & Operations",
      organization: "LearnNex",
      partner: "Wipro",
      date: "July 14, 2025",
      recipient: "Dhruv Ingale",
      description: "In recognition of outstanding and professional performance to the growth and operations for LearnNex.",
      image: "/lovable-uploads/c5f6a152-4aba-464c-b47f-464d983a43f1.png",
      category: "Professional Development",
      skills: ["Growth Strategy", "Operations Management", "Business Development"],
      credentialId: "LN-GO-2025-0714",
      type: "professional"
    },
    {
      title: "Python for Data Science",
      organization: "NPTEL",
      partner: "Indian Institute of Technology Madras",
      date: "Jan-Feb 2025",
      recipient: "DHRUV",
      description: "Elite NPTEL Online Certification (Funded by the MoE, Govt. of India) for successfully completing the 4-week course with consolidated score of 63%.",
      details: {
        onlineAssignments: "22.92/25",
        proctoredExam: "40.1/75"
      },
      image: "/lovable-uploads/03db87e1-5921-40a6-8434-679cd99605f3.png",
      category: "Technical Skills",
      skills: ["Python", "Data Science", "Programming"],
      credentialId: "NPTEL25CS60S440202867",
      type: "technical"
    },
    {
      title: "Intro to Machine Learning",
      organization: "Kaggle",
      date: "February 5, 2025",
      recipient: "Dhruv Ingale",
      description: "Certificate of completion for successfully completing the Intro to Machine Learning course on Kaggle.",
      instructors: ["Dan Becker", "Alexis Cook"],
      image: "/lovable-uploads/d450cc54-8a7c-42c9-a9a4-e095fec2285d.png",
      category: "Machine Learning",
      skills: ["Machine Learning", "Data Analysis", "Python"],
      credentialId: "KAGGLE-ML-2025-0205",
      type: "technical"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colorMap = {
      "Professional Development": "tech-primary",
      "Technical Skills": "tech-secondary", 
      "Machine Learning": "tech-accent"
    };
    return colorMap[category as keyof typeof colorMap] || "tech-primary";
  };

  const getTypeIcon = (type: string) => {
    return type === "professional" ? <Users className="w-5 h-5" /> : <Award className="w-5 h-5" />;
  };

  return (
    <section id="certifications" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-tech bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional certifications and achievements that validate my expertise
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-gradient-card shadow-medium hover:shadow-large transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                  {/* Certificate Image */}
                  <div className="lg:col-span-1">
                    <div className="relative rounded-lg overflow-hidden bg-white shadow-soft">
                      <img
                        src={cert.image}
                        alt={`${cert.title} Certificate`}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>

                  {/* Certificate Details */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Header */}
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            {cert.title}
                          </h3>
                          <div className="flex items-center gap-2 text-lg text-tech-primary font-semibold">
                            {getTypeIcon(cert.type)}
                            <span>{cert.organization}</span>
                            {cert.partner && (
                              <>
                                <span className="text-muted-foreground">•</span>
                                <span className="text-muted-foreground">{cert.partner}</span>
                              </>
                            )}
                          </div>
                        </div>
                        <Badge
                          className={`bg-${getCategoryColor(cert.category)}/10 text-${getCategoryColor(cert.category)} border-${getCategoryColor(cert.category)}/20`}
                        >
                          {cert.category}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <Calendar className="w-4 h-4" />
                        <span>{cert.date}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Special Details for NPTEL */}
                    {cert.details && (
                      <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-semibold text-foreground mb-3">Course Performance:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Online Assignments:</span>
                            <div className="font-semibold text-tech-success">{cert.details.onlineAssignments}</div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Proctored Exam:</span>
                            <div className="font-semibold text-tech-secondary">{cert.details.proctoredExam}</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Instructors for Kaggle */}
                    {cert.instructors && (
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Instructors:</h4>
                        <div className="flex gap-2">
                          {cert.instructors.map((instructor, idx) => (
                            <Badge key={idx} variant="secondary" className="bg-tech-primary/10 text-tech-primary">
                              {instructor}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Skills */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Skills Validated:</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="secondary"
                            className={`bg-${getCategoryColor(cert.category)}/10 text-${getCategoryColor(cert.category)} hover:bg-${getCategoryColor(cert.category)}/20 transition-colors`}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Credential ID */}
                    <div className="pt-4 border-t border-border">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="text-sm text-muted-foreground">
                          <span className="font-medium">Credential ID:</span> {cert.credentialId}
                        </div>
                        <Button
                          variant="tech_outline"
                          size="sm"
                          onClick={() => window.open(cert.image, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Certificate
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <Card className="p-6 bg-gradient-card shadow-soft text-center">
              <Award className="w-8 h-8 text-tech-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-tech-primary mb-2">3</div>
              <div className="text-muted-foreground">Certifications Earned</div>
            </Card>
            <Card className="p-6 bg-gradient-card shadow-soft text-center">
              <Users className="w-8 h-8 text-tech-secondary mx-auto mb-3" />
              <div className="text-3xl font-bold text-tech-secondary mb-2">3</div>
              <div className="text-muted-foreground">Organizations</div>
            </Card>
            <Card className="p-6 bg-gradient-card shadow-soft text-center">
              <Calendar className="w-8 h-8 text-tech-accent mx-auto mb-3" />
              <div className="text-3xl font-bold text-tech-accent mb-2">2025</div>
              <div className="text-muted-foreground">Latest Certification</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;