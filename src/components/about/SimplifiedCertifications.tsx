
import { Award } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useIsMobile } from "@/hooks/use-mobile";

interface CertificationItem {
  name: string;
  issuer: string;
  logo: string;
}

interface SimplifiedCertificationsProps {
  certifications: CertificationItem[];
}

const SimplifiedCertifications = ({ certifications }: SimplifiedCertificationsProps) => {
  const isMobile = useIsMobile();
  
  return (
    <ScrollReveal delay={5}>
      <div className="text-left">
        <h2 className="text-2xl font-bold mb-6 text-white border-b border-gray-800 pb-4">
          Key Certifications
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors hover:shadow-md flex flex-col items-center text-center animate-on-scroll"
            >
              <div className="w-16 h-16 mb-3 flex items-center justify-center bg-white/10 rounded-full p-2">
                <img 
                  src={cert.logo} 
                  alt={`${cert.issuer} logo`} 
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                  }}
                />
              </div>
              <h3 className="text-lg font-bold text-white">{cert.name}</h3>
              <p className="text-gray-400">{cert.issuer}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-4 text-center">
          <a 
            href="/resume.pdf" 
            target="_blank" 
            className="text-teal hover:text-teal-400 transition-colors inline-flex items-center gap-1"
          >
            <Award size={16} />
            <span>View All Certifications</span>
          </a>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default SimplifiedCertifications;
