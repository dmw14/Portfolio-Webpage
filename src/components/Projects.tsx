import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Github, Figma, Globe } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
        live: "https://dilip-webpage.vercel.app/",
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
        github: "https://github.com/dmw14/Yojana-Yantra"
      },
      status: "live",
      role: "Frontend Developer"
    },
    {
      title: "Samsung Galaxy Main Page & Watch UI Design",
      description: "Samsung Galaxy Main Page & Watch UI Design featuring pixel-perfect recreation of Samsung's official product pages, including the main homepage highlights and dedicated watch product pages with AI-powered health messaging.",
      image: "/lovable-uploads/129f4768-cee4-40ee-81ae-3272508a49d8.png",
      images: [
        {
          url: "/lovable-uploads/129f4768-cee4-40ee-81ae-3272508a49d8.png",
          title: "Homepage Highlights"
        },
        {
          url: "/lovable-uploads/1953d30f-e1dd-4da9-95ac-102b081eaf2c.png",
          title: "Galaxy Watch7 Page"
        },
        {
          url: "/lovable-uploads/6290ca2a-0cb4-4746-8272-1ccd5d94b101.png",
          title: "Galaxy Watch Ultra Page"
        }
      ],
      technologies: ["Figma", "UI Design", "Web Design", "Mobile UI"],
      features: [
        "Pixel-perfect Samsung homepage recreation",
        "Watch product detail pages design",
        "AI health features with engaging content",
        "Brand-consistent color schemes & typography",
        "User-focused navigation flow",
        "High-fidelity mockups with industry standards"
      ],
      links: {
        figma: true,
        github: null
      },
      status: "design",
      role: "UI/UX Designer",
      hasMultipleImages: true
    },
      {
        title: "SignatureDrive - Car Comparison Website",
        description: "Developed a professional car comparison platform focused on BMW, Mercedes, and Audi. Designed to help users easily compare specifications, features, and pricing. Built with modern web technologies ensuring a smooth, responsive, and user-friendly experience.",
        image: "/api/placeholder/600/400",
        technologies: ["React.js", "TypeScript", "Vite", "Tailwind CSS", "shadcn-ui", "Responsive Design"],
        features: [
          "Compare BMW, Mercedes, and Audi cars",
          "Clean and professional UI/UX",
          "Responsive and mobile-friendly design",
          "Fast performance with Vite",
          "Modern styling with Tailwind CSS and shadcn-ui"
        ],
        links: {
          live: null,
          github: "https://github.com/dmw14/SignatureDrive---CarCompareWebsite"
        },
        status: "in progress",
        role: "Frontend Developer"
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

  const DesignModal = ({ project }: { project: any }) => {
    const [modalImageIndex, setModalImageIndex] = useState(0);
    
    if (!project.images) return null;

    return (
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <img
            src={project.images[modalImageIndex].url}
            alt={project.images[modalImageIndex].title}
            className="w-full h-auto object-contain rounded-lg"
          />
          <div className="flex gap-2 justify-center flex-wrap">
            {project.images.map((img: any, imgIndex: number) => (
              <Button
                key={imgIndex}
                size="sm"
                variant={modalImageIndex === imgIndex ? "default" : "secondary"}
                onClick={() => setModalImageIndex(imgIndex)}
                className="px-4 py-2"
              >
                {img.title}
              </Button>
            ))}
          </div>
        </div>
      </DialogContent>
    );
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
                    {project.image?.startsWith('/lovable-uploads/') ? (
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
                        project.hasMultipleImages ? (
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="tech_outline"
                                size="sm"
                              >
                                <Figma className="w-4 h-4 mr-2" />
                                View Design
                              </Button>
                            </DialogTrigger>
                            <DesignModal project={project} />
                          </Dialog>
                        ) : (
                          <Button
                            variant="tech_outline"
                            size="sm"
                            onClick={() => typeof project.links.figma === 'string' && window.open(project.links.figma, '_blank')}
                          >
                            <Figma className="w-4 h-4 mr-2" />
                            View Design
                          </Button>
                        )
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