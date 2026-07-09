import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Phone, Linkedin, Github, MapPin, Send, ArrowRight } from "lucide-react";

const Contact = () => {
  const sectionRef = useScrollReveal();

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "ingaledhruv4144@gmail.com",
      href: "mailto:ingaledhruv4144@gmail.com",
      command: "mail --to",
      color: "cyan"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 8180842424",
      href: "tel:+918180842424",
      command: "call --direct",
      color: "green"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "Dhruv Ingale - dmw14",
      href: "https://www.linkedin.com/in/dmw14",
      command: "connect --linkedin",
      color: "purple"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "Dhruv Ingale - dmw14",
      href: "https://github.com/dmw14",
      command: "git clone --profile",
      color: "blue"
    }
  ];

  const getColorClass = (color: string) => {
    const map: Record<string, { text: string; bg: string; border: string; hoverBg: string }> = {
      cyan: { text: "text-neon-cyan", bg: "bg-neon-cyan/10", border: "border-neon-cyan/20", hoverBg: "hover:bg-neon-cyan/15" },
      green: { text: "text-neon-green", bg: "bg-neon-green/10", border: "border-neon-green/20", hoverBg: "hover:bg-neon-green/15" },
      purple: { text: "text-neon-purple", bg: "bg-neon-purple/10", border: "border-neon-purple/20", hoverBg: "hover:bg-neon-purple/15" },
      blue: { text: "text-neon-blue", bg: "bg-neon-blue/10", border: "border-neon-blue/20", hoverBg: "hover:bg-neon-blue/15" },
    };
    return map[color] || map.cyan;
  };

  return (
    <section id="contact" className="py-24 relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 reveal">
            <span className="inline-block font-mono text-sm text-neon-cyan/60 mb-4">
              {'// section: 08'}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-cyan">Get In Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations.
              Let's connect and build something amazing!
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            {contactInfo.map((contact, index) => {
              const colors = getColorClass(contact.color);
              return (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`reveal reveal-delay-${index + 1} group neon-border rounded-xl p-5 bg-card/50 backdrop-blur-sm hover-lift transition-all duration-300`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${colors.bg} ${colors.text} ${colors.hoverBg} transition-colors`}>
                      {contact.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-foreground text-sm">{contact.label}</h3>
                        <span className="text-[10px] font-mono text-muted-foreground hidden sm:inline">
                          {contact.command}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors truncate">
                        {contact.value}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-neon-cyan group-hover:translate-x-1 transition-all" />
                  </div>
                </a>
              );
            })}
          </div>

          {/* Location */}
          <div className="reveal reveal-delay-5 neon-border rounded-xl p-6 bg-card/50 backdrop-blur-sm mb-10">
            <div className="flex items-center gap-4 text-center justify-center flex-col sm:flex-row sm:text-left">
              <div className="p-3 rounded-lg bg-neon-cyan/10 text-neon-cyan">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  Based in Mumbai, India
                </h3>
                <p className="text-sm text-muted-foreground">
                  Open to remote work opportunities and local collaborations
                </p>
              </div>
            </div>
          </div>

          {/* CTA — Terminal Style */}
          <div className="reveal reveal-delay-6">
            <div className="gradient-border rounded-xl">
              <div className="p-8 md:p-10 bg-card/90 rounded-xl text-center">
                <Send className="w-10 h-10 text-neon-cyan mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Ready to Start a Project?
                </h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed text-sm">
                  Whether you need a frontend developer, UI/UX designer, or someone passionate
                  about building scalable applications, I'm excited to bring your ideas to life.
                  Let's create something amazing together!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:ingaledhruv4144@gmail.com"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 font-mono text-sm font-semibold rounded-xl bg-gradient-to-r from-neon-cyan to-neon-blue text-background hover:shadow-[0_0_30px_hsla(180,100%,50%,0.3)] transition-all duration-300"
                  >
                    <Mail className="w-4 h-4" />
                    send_email()
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dmw14"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-mono text-sm font-semibold rounded-xl border border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/10 hover:border-neon-cyan/50 hover:shadow-[0_0_20px_hsla(180,100%,50%,0.15)] transition-all duration-300"
                  >
                    <Linkedin className="w-4 h-4" />
                    connect_linkedin()
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Response */}
          <div className="text-center mt-8 reveal reveal-delay-7">
            <p className="text-sm text-muted-foreground font-mono">
              <span className="text-neon-green">❯</span>
              <span className="text-neon-cyan ml-2">response_time</span>
              <span className="text-muted-foreground"> = </span>
              <span className="text-neon-green">"~24 hours"</span>
              <span className="text-muted-foreground">;</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;