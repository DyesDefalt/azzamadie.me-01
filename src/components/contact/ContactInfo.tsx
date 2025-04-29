
import { Mail, Smartphone, MapPin, Linkedin, Instagram } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const ContactInfo = () => {
  return (
    <ScrollReveal delay={3}>
      <div className="bg-secondary rounded-lg p-6 mb-8 hover-lift shine-effect">
        <h2 className="text-2xl font-bold mb-6 text-white">
          Contact Information
        </h2>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4 group">
            <Mail className="text-teal mt-1 group-hover:scale-110 transition-transform" size={20} />
            <div>
              <h3 className="text-white font-medium">Email</h3>
              <a 
                href="mailto:azzamadie@gmail.com" 
                className="text-gray-400 hover:text-teal transition-colors"
              >
                azzamadie@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-start gap-4 group">
            <Smartphone className="text-teal mt-1 group-hover:scale-110 transition-transform" size={20} />
            <div>
              <h3 className="text-white font-medium">Phone</h3>
              <p className="text-gray-400">+62 123 456 7890</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 group">
            <MapPin className="text-teal mt-1 group-hover:scale-110 transition-transform" size={20} />
            <div>
              <h3 className="text-white font-medium">Location</h3>
              <p className="text-gray-400">Jakarta, Indonesia</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="text-white font-medium mb-4">Connect with me</h3>
          <div className="flex gap-4">
            <a 
              href="https://www.linkedin.com/in/ahmadazzamfuadie/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-background/50 hover:bg-teal p-3 rounded-full transition-colors hover:scale-110 transform duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-white" />
            </a>
            <a 
              href="https://www.instagram.com/adieazzam/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-background/50 hover:bg-teal p-3 rounded-full transition-colors hover:scale-110 transform duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default ContactInfo;
