
import { Award } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
}

interface CertificationsProps {
  certifications: CertificationItem[];
}

const Certifications = ({ certifications }: CertificationsProps) => {
  return (
    <ScrollReveal delay={5}>
      <div>
        <h2 className="text-2xl font-bold mb-6 text-white border-b border-gray-800 pb-4">
          Certifications
        </h2>
        
        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="flex gap-4 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors animate-on-scroll"
            >
              <div className="flex-shrink-0 mt-1">
                <Award size={20} className="text-teal" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{cert.name}</h3>
                <p className="text-gray-400">{cert.issuer} | {cert.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
};

export default Certifications;
