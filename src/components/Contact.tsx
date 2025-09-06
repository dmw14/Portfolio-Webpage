import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "ingaledhruv4144@gmail.com",
      href: "mailto:ingaledhruv4144@gmail.com",
      color: "tech-primary"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 8180842424",
      href: "tel:+918180842424",
      color: "tech-secondary"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "dhruv-ingale-dmw14",
      href: "https://www.linkedin.com/in/dhruv-ingale-dmw14",
      color: "tech-accent"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "dhruv-ingale",
      href: "https://github.com/dhruv-ingale",
      color: "tech-success"
    }
  ];

  const getColorClass = (color: string) => {
    return {
      "tech-primary": "text-tech-primary bg-tech-primary/10 hover:bg-tech-primary/20",
      "tech-secondary": "text-tech-secondary bg-tech-secondary/10 hover:bg-tech-secondary/20",
      "tech-accent": "text-tech-accent bg-tech-accent/10 hover:bg-tech-accent/20",
      "tech-success": "text-tech-success bg-tech-success/10 hover:bg-tech-success/20"
    }[color] || "text-tech-primary bg-tech-primary/10 hover:bg-tech-primary/20";
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-tech bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. 
              Let's connect and discuss how we can work together!
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((contact, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300 group"
              >
                <a
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 w-full"
                >
                  <div className={`p-3 rounded-lg transition-all duration-300 ${getColorClass(contact.color)}`}>
                    {contact.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">
                      {contact.label}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </a>
              </Card>
            ))}
          </div>

          {/* Location Info */}
          <Card className="p-8 bg-gradient-card shadow-medium mb-12">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-tech-primary/10 text-tech-primary">
                  <MapPin className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                Based in Mumbai, India
              </h3>
              <p className="text-muted-foreground">
                Currently studying at Dwarkadas Jivanlal Sanghvi College of Engineering, Mumbai.
                Open to remote work opportunities and local collaborations.
              </p>
            </div>
          </Card>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="p-8 bg-gradient-tech text-white shadow-large">
              <div className="max-w-2xl mx-auto">
                <Send className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Start a Project?
                </h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Whether you need a frontend developer, UI/UX designer, or someone 
                  passionate about machine learning, I'm excited to bring your ideas to life. 
                  Let's create something amazing together!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="secondary"
                    size="lg"
                    asChild
                    className="bg-white text-tech-primary hover:bg-white/90"
                  >
                    <a href="mailto:dhruv.ingale1404@gmail.com">
                      <Mail className="w-5 h-5 mr-2" />
                      Send Email
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                  >
                    <a 
                      href="https://www.linkedin.com/in/dhruv-ingale-dmw14"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5 mr-2" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Quick Response Promise */}
          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              <span className="font-semibold text-tech-primary">Quick Response:</span> 
              I typically respond to emails within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;