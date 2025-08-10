import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Figma, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Dilip Industries Website",
      description: "Designed and developed a responsive product showcase website for a local food brand selling Supari, Dhana Dal, and Saunf. Built using React.js, deployed temporarily on Vercel for demonstration purposes. Focused on clean UI/UX and mobile-friendly design.",
      image: "/api/placeholder/600/400",
      technologies: ["React.js", "JavaScript", "CSS", "Vercel", "Responsive Design"],
      features: [
        "Responsive product showcase design",
        "Mobile-friendly user interface",
        "Clean and modern UI/UX",
        "Fast deployment on Vercel",
        "Product-focused layout design"
      ],
      links: {
        live: "https://dilip-industries.vercel.app/",
        github: null
      },
      status: "live",
      role: "Freelance Web Developer"
    },
    {
      title: "Yojana Yantra",
      description: "A responsive platform designed to help users navigate and discover government schemes effectively. Built with modern React architecture and pixel-perfect UI implementation.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Figma"],
      features: [
        "Responsive and user-friendly frontend",
        "High-performance React with TypeScript",
        "Modular UI components with Tailwind CSS",
        "Pixel-perfect Figma to code translation",
        "Clean code architecture"
      ],
      links: {
        live: "https://yojanayantra.vercel.app/",
        github: null
      },
      status: "live",
      role: "Frontend Developer"
    },
    {
      title: "Samsung Galaxy Watch Clone",
      description: "A pixel-perfect recreation of Samsung's Galaxy Watch7 product page, featuring modern design principles, AI-powered health messaging, and sophisticated product showcase layouts.",
      image: "/lovable-uploads/6aa7f933-a05f-4b59-959e-95ce215309e5.png",
      technologies: ["Figma", "UI Design", "Product Design", "Typography"],
      features: [
        "Pixel-perfect Samsung design recreation",
        "AI-powered health feature messaging",
        "Modern product showcase layout",
        "Professional typography and spacing",
        "Brand-consistent color schemes"
      ],
      links: {
        figma: "/lovable-uploads/6aa7f933-a05f-4b59-959e-95ce215309e5.png",
        github: null
      },
      status: "design",
      role: "UI/UX Designer"
    },
    {
      title: "YojnaBot - Government Scheme Assistant",
      description: "Comprehensive chatbot interface design for government welfare schemes discovery. Features conversational UI patterns, multi-screen flows, and accessibility-focused design for helping users navigate complex government programs.",
      image: "/lovable-uploads/f01bf78c-8e79-4c4e-a4dd-7375e90eafcf.png",
      technologies: ["Figma", "UX Design", "Conversational UI", "Government Tech"],
      features: [
        "Multi-screen conversational flow design",
        "Government scheme information architecture",
        "Accessibility-focused interface design",
        "Clean, user-friendly chat patterns",
        "Comprehensive onboarding experience"
      ],
      links: {
        figma: "/lovable-uploads/f01bf78c-8e79-4c4e-a4dd-7375e90eafcf.png",
        github: null
      },
      status: "design",
      role: "UI/UX Designer"
    },
    {
      title: "Spotify Clone UI",
      description: "Complete mobile music streaming interface recreation featuring multiple screens including player, playlist, and album views. Showcases dark theme design, music player controls, and modern mobile UI patterns.",
      image: "/lovable-uploads/be898bab-d993-4162-9840-ce6e7c41b095.png",
      technologies: ["Figma", "Mobile UI", "Music App Design", "Dark Theme"],
      features: [
        "Complete mobile music streaming interface",
        "Multiple screen designs (player, playlist, album)",
        "Dark mode design implementation",
        "Music player controls and navigation",
        "Modern mobile UI patterns"
      ],
      links: {
        figma: "/lovable-uploads/be898bab-d993-4162-9840-ce6e7c41b095.png",
        github: null
      },
      status: "design",
      role: "UI/UX Designer"
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      live: { label: "Live Project", color: "bg-tech-success text-white" },
      design: { label: "Design Project", color: "bg-tech-accent text-white" },
      development: { label: "In Development", color: "bg-tech-secondary text-white" }
    };
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.design;
    return <Badge className={config.color}>{config.label}</Badge>;
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-tech bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my development and design work, from web applications to UI/UX designs
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-gradient-card shadow-medium hover:shadow-large transition-all duration-300"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Project Image */}
                  <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    {project.image.startsWith('/lovable-uploads/') ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover aspect-video"
                      />
                    ) : (
                      <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-tech-primary/10 to-tech-secondary/10">
                        <div className="text-tech-primary/30">
                          <Globe className="w-24 h-24" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                        {project.title}
                      </h3>
                      {getStatusBadge(project.status)}
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <Badge variant="secondary" className="mb-3 bg-tech-primary/10 text-tech-primary">
                        {project.role}
                      </Badge>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-tech-primary mt-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="bg-muted text-muted-foreground hover:bg-tech-primary/10 hover:text-tech-primary transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      {project.links.live && (
                        <Button
                          variant="tech"
                          size="sm"
                          asChild
                        >
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <ExternalLink className="w-4 h-4" />
                            View Live
                          </a>
                        </Button>
                      )}
                      
                      {project.links.github && (
                        <Button
                          variant="tech_outline"
                          size="sm"
                          asChild
                        >
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <Github className="w-4 h-4" />
                            Source Code
                          </a>
                        </Button>
                      )}

                      {project.links.figma && (
                        <Button
                          variant="tech_outline"
                          size="sm"
                          onClick={() => window.open(project.links.figma, '_blank')}
                        >
                          <Figma className="w-4 h-4" />
                          View Design
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;