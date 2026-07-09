import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink, Github, Globe } from "lucide-react";

const Projects = () => {
  const sectionRef = useScrollReveal();

  const projects = [
    {
      title: "Yojana Yantra",
      subtitle: "Government Scheme Discovery Platform",
      description:
        "Built a full-stack platform to simplify discovery of government schemes by categorizing and presenting information in a clear, user-friendly format, improving accessibility over traditional government portals.",
      technologies: ["React", "FastAPI", "AWS", "OpenAI API", "Docker"],
      features: [
        "Eligibility-check system to help users quickly identify applicable government schemes",
        "Automated data scraping and web search integration for up-to-date scheme information",
        "Detailed scheme insights including eligibility, documents, and application steps",
        "Deployed on AWS with Docker for scalability and reliability",
        "Integrated direct application links for seamless navigation"
      ],
      links: {
        live: "https://yojanayantra.vercel.app/",
        github: "https://github.com/dmw14/Yojana-Yantra"
      },
      status: "live",
      role: "Full Stack Developer",
      color: "cyan"
    },
    {
      title: "CloudVault",
      subtitle: "Cloud File Storage & Sharing Platform",
      description:
        "Developed a full-stack cloud-based file storage and sharing platform enabling users to upload, manage, and securely access files via shareable links.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Cloudinary"],
      features: [
        "Secure file upload and sharing with unique shareable links",
        "RESTful backend with Express and file handling using Multer",
        "Cloudinary integration for optimized cloud storage and CDN delivery",
        "Stored only file metadata (URL, public ID) in MongoDB for efficiency",
        "Responsive frontend with seamless API communication using Axios"
      ],
      links: {
        live: null,
        github: "https://github.com/dmw14/CloudVault"
      },
      status: "live",
      role: "Full Stack Developer",
      color: "green"
    },
    {
      title: "SignatureDrive",
      subtitle: "Luxury Car Comparison Platform",
      description:
        "Built a full-stack car comparison platform that allows users to explore and compare BMW, Mercedes-Benz, and Audi models with detailed specifications, pricing, and real-time updates.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase"],
      features: [
        "Compare luxury cars with detailed specs, variants, and pricing",
        "Dynamic data-driven UI for real-time comparison updates",
        "Supabase integration for backend and real-time data handling",
        "Reusable component-based architecture for scalability",
        "Fully responsive modern UI design"
      ],
      links: {
        live: "https://signature-drive.vercel.app",
        github: "https://github.com/dmw14/SignatureDrive---CarCompareWebsite"
      },
      status: "live",
      role: "Full Stack Developer",
      color: "purple"
    },
    {
      title: "College Connect",
      subtitle: "College Communication Platform",
      description:
        "Developed a full-stack college communication platform with real-time updates and role-based access control to streamline communication between students and administrators.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "PostgreSQL", "TanStack Query", "Supabase"],
      features: [
        "Role-based authentication system for students and admins",
        "Admin dashboard for categorized notices (academic, exam, events, urgent)",
        "Student query system with status tracking and response workflow",
        "Row-Level Security (RLS) for secure data access",
        "Efficient server-state management using TanStack Query"
      ],
      links: {
        live: null,
        github: "https://github.com/dmw14/College-Connect"
      },
      status: "live",
      role: "Full Stack Developer",
      color: "blue"
    }
  ];

  const getAccentColor = (color: string) => {
    const map: Record<string, { text: string; border: string; glow: string; badge: string; urlColor: string }> = {
      cyan: { text: "text-neon-cyan", border: "border-neon-cyan/20", glow: "hover:shadow-[0_0_25px_hsla(180,100%,50%,0.2)]", badge: "bg-neon-cyan/10 text-neon-cyan border-neon-cyan/20", urlColor: "text-neon-cyan/50" },
      green: { text: "text-neon-green", border: "border-neon-green/20", glow: "hover:shadow-[0_0_25px_hsla(120,100%,50%,0.15)]", badge: "bg-neon-green/10 text-neon-green border-neon-green/20", urlColor: "text-neon-green/50" },
      purple: { text: "text-neon-purple", border: "border-neon-purple/20", glow: "hover:shadow-[0_0_25px_hsla(271,91%,65%,0.2)]", badge: "bg-neon-purple/10 text-neon-purple border-neon-purple/20", urlColor: "text-neon-purple/50" },
      blue: { text: "text-neon-blue", border: "border-neon-blue/20", glow: "hover:shadow-[0_0_25px_hsla(211,100%,50%,0.2)]", badge: "bg-neon-blue/10 text-neon-blue border-neon-blue/20", urlColor: "text-neon-blue/50" },
    };
    return map[color] || map.cyan;
  };

  return (
    <section id="projects" className="py-24 relative" ref={sectionRef}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 reveal">
            <span className="inline-block font-mono text-sm text-neon-cyan/60 mb-4">
              {'// section: 05'}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-cyan">Featured Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A showcase of my development work — from web apps to full-stack platforms
            </p>
          </div>

          {/* Projects */}
          <div className="space-y-10">
            {projects.map((project, index) => {
              const accent = getAccentColor(project.color);
              return (
                <div
                  key={index}
                  className={`reveal reveal-delay-${Math.min(index + 1, 4)} browser-window hover-lift ${accent.glow} transition-all duration-500`}
                >
                  {/* Browser Chrome */}
                  <div className="browser-chrome">
                    <div className="terminal-dot terminal-dot-red" />
                    <div className="terminal-dot terminal-dot-yellow" />
                    <div className="terminal-dot terminal-dot-green" />
                    <div className="browser-url">
                      <span className={accent.urlColor}>
                        {project.links.live
                          ? project.links.live.replace('https://', '')
                          : `github.com/dmw14/${project.title.replace(/\s+/g, '-')}`
                        }
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 md:p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                      {/* Left — Info */}
                      <div className="lg:col-span-3">
                        {/* Title */}
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                            {project.title}
                          </h3>
                          <span className={`text-xs font-mono px-2.5 py-1 rounded-md border ${accent.badge}`}>
                            {project.status === 'live' ? '● Live' : '◐ Dev'}
                          </span>
                        </div>
                        <p className={`text-sm font-mono ${accent.text} mb-4`}>
                          {project.subtitle}
                        </p>

                        <p className="text-muted-foreground mb-5 leading-relaxed text-sm">
                          {project.description}
                        </p>

                        {/* Role */}
                        <div className="mb-5">
                          <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-muted-foreground">
                            role: {project.role}
                          </span>
                        </div>

                        {/* Tech Stack */}
                        <div className="mb-6">
                          <span className="text-xs font-mono text-muted-foreground mb-2 block">
                            {`// tech_stack`}
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className={`text-xs font-mono px-3 py-1.5 rounded-lg border transition-all duration-300 hover:scale-105 ${accent.badge}`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-3">
                          {project.links.live && (
                            <a
                              href={project.links.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-mono rounded-lg bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20 hover:bg-neon-cyan/20 hover:border-neon-cyan/40 hover:shadow-[0_0_15px_hsla(180,100%,50%,0.2)] transition-all duration-300`}
                            >
                              <ExternalLink className="w-4 h-4" />
                              view_live()
                            </a>
                          )}
                          {project.links.github && (
                            <a
                              href={project.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-mono rounded-lg border border-border/50 text-muted-foreground hover:text-foreground hover:border-border hover:bg-secondary/50 transition-all duration-300"
                            >
                              <Github className="w-4 h-4" />
                              source_code()
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Right — Features */}
                      <div className="lg:col-span-2">
                        <div className="terminal-window h-full">
                          <div className="terminal-header">
                            <div className="terminal-dot terminal-dot-red" />
                            <div className="terminal-dot terminal-dot-yellow" />
                            <div className="terminal-dot terminal-dot-green" />
                            <span className="ml-2 text-xs font-mono text-muted-foreground">
                              features.log
                            </span>
                          </div>
                          <div className="terminal-body text-xs space-y-2.5">
                            <div className="text-neon-green mb-3">
                              ❯ cat features.log
                            </div>
                            {project.features.map((feature, fIndex) => (
                              <div key={fIndex} className="flex items-start gap-2">
                                <span className="text-neon-cyan/40 shrink-0">{`//`}</span>
                                <span className="text-muted-foreground leading-relaxed">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
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

export default Projects;