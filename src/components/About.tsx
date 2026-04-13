import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Palette } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-tech bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A passionate developer driven by innovation and continuous learning
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Bio Section */}
            <Card className="p-8 bg-gradient-card shadow-medium">
              <h3 className="text-2xl font-semibold mb-6 text-tech-primary">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Currently pursuing Computer Engineering at Dwarkadas Jivanlal Sanghvi College of Engineering, Mumbai, I'm passionate about creating digital solutions that make a difference. My journey in tech started with a curiosity about how things work and has evolved into a strong focus on building efficient, scalable, and user-centric applications. I continuously work on improving my problem-solving skills and exploring modern technologies to build better systems.
              </p>
            </Card>

            {/* Web Development Highlight */}
            <div className="flex items-center">
              <Card className="p-6 bg-card shadow-soft hover:shadow-medium transition-all duration-300 w-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-tech-primary/10 text-tech-primary">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Web Development</h4>
                    <p className="text-muted-foreground">Building responsive web applications with modern web technologies</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;