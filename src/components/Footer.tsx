import { Link } from "react-router-dom";
import { Github, Linkedin, Instagram, Mail, ExternalLink } from "lucide-react";
import AtomAnimation from "./animations/AtomAnimation"; // Import Atom Animation
import MoleculeAnimation from "./animations/MoleculeAnimation"; // Import Molecule Animation

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-12 px-6 md:px-12 border-t border-border relative overflow-hidden">
      {/* Background Animations - Positioned absolutely */}
      <div className="absolute top-10 left-10 opacity-10 pointer-events-none">
        <AtomAnimation />
      </div>
      <div className="absolute bottom-10 right-10 opacity-15 pointer-events-none">
        <MoleculeAnimation />
      </div>
      
      <div className="container mx-auto relative z-10"> {/* Ensure content is above animations */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo & Socials */}
          <div className="text-left md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img src="/logo.svg" alt="Ahmad Azzam Fuadie Logo" className="h-10 w-auto" />
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Digital Marketing Specialist bridging analytical rigor with creative strategy. 
              From chemical analysis to digital impact.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/ahmadazzamfuadie/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              {/* Add GitHub link if applicable, otherwise remove */}
              {/* <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a> */}
              <a 
                href="https://www.instagram.com/adieazzam/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="mailto:azzamadie@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="text-left">
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Get In Touch */}
          <div className="text-left">
            <h3 className="text-white text-lg font-semibold mb-4">Get In Touch</h3>
            <p className="text-muted-foreground mb-4">
              Interested in working together? Let's connect!
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Contact Me <ExternalLink size={16} />
            </Link>
          </div>
        </div>
        
        <div className="border-t border-border mt-10 pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Ahmad Azzam Fuadie. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

