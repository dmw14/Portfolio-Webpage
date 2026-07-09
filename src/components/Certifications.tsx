import { useScrollReveal, useCountUp } from "@/hooks/useScrollReveal";
import { Award, ExternalLink, Calendar, Users } from "lucide-react";

const Certifications = () => {
  const sectionRef = useScrollReveal();
  const certCountRef = useCountUp(3, 1200);
  const orgCountRef = useCountUp(3, 1200);
  const yearCountRef = useCountUp(2025, 1800);

  const certifications = [
    {
      title: "Certificate of Growth & Operations",
      organization: "LearnNex",
      partner: "Wipro",
      date: "July 14, 2025",
      description: "In recognition of outstanding and professional performance to the growth and operations for LearnNex.",
      image: "/lovable-uploads/c5f6a152-4aba-464c-b47f-464d983a43f1.png",
      category: "Professional Development",
      skills: ["Growth Strategy", "Operations Management", "Business Development"],
      credentialId: "LN-GO-2025-0714",
      type: "professional",
      color: "cyan"
    },
    {
      title: "Python for Data Science",
      organization: "NPTEL",
      partner: "Indian Institute of Technology Madras",
      date: "Jan-Feb 2025",
      description: "Elite NPTEL Online Certification (Funded by the MoE, Govt. of India) for successfully completing the 4-week course with consolidated score of 63%.",
      details: {
        onlineAssignments: "22.92/25",
        proctoredExam: "40.1/75",
        totalCandidates: "15251"
      },
      image: "/lovable-uploads/03db87e1-5921-40a6-8434-679cd99605f3.png",
      category: "Technical Skills",
      skills: ["Python", "Data Science", "Programming"],
      credentialId: "NPTEL25CS60S440202867",
      type: "technical",
      color: "green"
    },
    {
      title: "Intro to Machine Learning",
      organization: "Kaggle",
      partner: null,
      date: "February 5, 2025",
      description: "Certificate of completion for successfully completing the Intro to Machine Learning course on Kaggle.",
      instructors: ["Dan Becker", "Alexis Cook"],
      image: "/lovable-uploads/d450cc54-8a7c-42c9-a9a4-e095fec2285d.png",
      category: "Machine Learning",
      skills: ["Machine Learning", "Data Analysis", "Python"],
      credentialId: "KAGGLE-ML-2025-0205",
      type: "technical",
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const map: Record<string, { text: string; badge: string; border: string }> = {
      cyan: { text: "text-neon-cyan", badge: "bg-neon-cyan/10 text-neon-cyan border-neon-cyan/20", border: "border-neon-cyan/15" },
      green: { text: "text-neon-green", badge: "bg-neon-green/10 text-neon-green border-neon-green/20", border: "border-neon-green/15" },
      purple: { text: "text-neon-purple", badge: "bg-neon-purple/10 text-neon-purple border-neon-purple/20", border: "border-neon-purple/15" },
    };
    return map[color] || map.cyan;
  };

  return (
    <section id="certifications" className="py-24 relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 reveal">
            <span className="inline-block font-mono text-sm text-neon-cyan/60 mb-4">
              {'// section: 06'}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-cyan">Certifications</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional certifications validating my expertise
            </p>
          </div>

          {/* Certifications */}
          <div className="space-y-8">
            {certifications.map((cert, index) => {
              const colors = getColorClasses(cert.color);
              return (
                <div
                  key={index}
                  className={`reveal reveal-delay-${index + 1} gradient-border hover-lift transition-all duration-500`}
                >
                  <div className="p-6 md:p-8 bg-card/80 rounded-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                      {/* Certificate Image */}
                      <div className="lg:col-span-1">
                        <div className="rounded-lg overflow-hidden bg-secondary/30 border border-border/30">
                          <img
                            src={cert.image}
                            alt={`${cert.title} Certificate`}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      </div>

                      {/* Certificate Details */}
                      <div className="lg:col-span-3 space-y-5">
                        {/* Header */}
                        <div>
                          <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                            <div>
                              <h3 className="text-xl font-bold text-foreground mb-2">
                                {cert.title}
                              </h3>
                              <div className="flex items-center gap-2 text-base font-mono">
                                <span className={colors.text}>
                                  {cert.type === "professional" ? <Users className="w-4 h-4 inline mr-1" /> : <Award className="w-4 h-4 inline mr-1" />}
                                  {cert.organization}
                                </span>
                                {cert.partner && (
                                  <>
                                    <span className="text-muted-foreground">•</span>
                                    <span className="text-muted-foreground text-sm">{cert.partner}</span>
                                  </>
                                )}
                              </div>
                            </div>
                            <span className={`text-xs font-mono px-2.5 py-1 rounded-md border ${colors.badge}`}>
                              {cert.category}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
                            <Calendar className="w-3.5 h-3.5" />
                            {cert.date}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {cert.description}
                        </p>

                        {/* NPTEL Details */}
                        {cert.details && (
                          <div className="grid grid-cols-3 gap-4 p-4 rounded-lg bg-secondary/30 border border-border/30">
                            <div className="text-center">
                              <div className="text-xs text-muted-foreground mb-1 font-mono">assignments</div>
                              <div className="font-bold text-neon-green font-mono text-sm">{cert.details.onlineAssignments}</div>
                            </div>
                            <div className="text-center">
                              <div className="text-xs text-muted-foreground mb-1 font-mono">proctored_exam</div>
                              <div className="font-bold text-neon-purple font-mono text-sm">{cert.details.proctoredExam}</div>
                            </div>
                            <div className="text-center">
                              <div className="text-xs text-muted-foreground mb-1 font-mono">total_candidates</div>
                              <div className="font-bold text-neon-cyan font-mono text-sm">{cert.details.totalCandidates}</div>
                            </div>
                          </div>
                        )}

                        {/* Instructors */}
                        {cert.instructors && (
                          <div>
                            <span className="text-xs font-mono text-muted-foreground block mb-2">instructors:</span>
                            <div className="flex gap-2">
                              {cert.instructors.map((instructor, idx) => (
                                <span key={idx} className="text-xs font-mono px-3 py-1.5 rounded-md bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20">
                                  {instructor}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Skills */}
                        <div>
                          <span className="text-xs font-mono text-muted-foreground block mb-2">skills_validated:</span>
                          <div className="flex flex-wrap gap-2">
                            {cert.skills.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className={`text-xs font-mono px-3 py-1.5 rounded-md border transition-all duration-300 hover:scale-105 ${colors.badge}`}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Credential + Action */}
                        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/30">
                          <span className="text-xs font-mono text-muted-foreground">
                            credential_id: <span className="text-foreground/70">{cert.credentialId}</span>
                          </span>
                          <button
                            onClick={() => window.open(cert.image, '_blank')}
                            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono rounded-lg border border-border/50 text-muted-foreground hover:text-neon-cyan hover:border-neon-cyan/30 hover:bg-neon-cyan/5 transition-all duration-300"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            view_certificate()
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
            {[
              { icon: Award, ref: certCountRef, label: "Certifications", color: "text-neon-cyan" },
              { icon: Users, ref: orgCountRef, label: "Organizations", color: "text-neon-purple" },
              { icon: Calendar, ref: yearCountRef, label: "Latest Year", color: "text-neon-green" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`reveal reveal-delay-${index + 5} neon-border rounded-xl p-6 bg-card/50 backdrop-blur-sm text-center hover-lift`}
              >
                <stat.icon className={`w-7 h-7 ${stat.color} mx-auto mb-3`} />
                <div className={`text-3xl font-bold font-mono ${stat.color} mb-2`}>
                  <span ref={stat.ref}>0</span>
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

export default Certifications;