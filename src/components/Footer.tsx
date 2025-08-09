import { Heart, Code, Palette } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-hero border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-tech bg-clip-text text-transparent">
                Dhruv Sunil Ingale
              </span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Frontend Developer • UI/UX Designer • ML Enthusiast
            </p>
          </div>

          {/* Skills Icons */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="flex items-center gap-2 text-tech-primary">
              <Code className="w-5 h-5" />
              <span className="text-sm font-medium">Development</span>
            </div>
            <div className="flex items-center gap-2 text-tech-secondary">
              <Palette className="w-5 h-5" />
              <span className="text-sm font-medium">Design</span>
            </div>
            <div className="flex items-center gap-2 text-tech-accent">
              <Heart className="w-5 h-5" />
              <span className="text-sm font-medium">Innovation</span>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-muted-foreground text-sm">
                © {currentYear} Dhruv Sunil Ingale. All rights reserved.
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <span>Built with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>using React & TypeScript</span>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-6 text-xs text-muted-foreground">
            <p>
              Currently pursuing B.E. Computer Engineering at DJSCE, Mumbai (Expected 2027) • 
              Available for freelance projects and internship opportunities
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;