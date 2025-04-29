
import { GraduationCap } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

interface EducationItem {
  degree: string;
  school: string;
  year: string;
  description?: string;
}

interface EducationProps {
  education: EducationItem[];
}

const Education = ({ education }: EducationProps) => {
  return (
    <ScrollReveal delay={4}>
      <div className="text-left">
        <h2 className="text-2xl font-bold mb-6 text-white border-b border-gray-800 pb-4">
          Education
        </h2>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-teal/30 animate-on-scroll"
            >
              <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-teal transform -translate-x-[3px]"></div>
              <div>
                <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                <div className="flex flex-wrap gap-2 items-center text-gray-400 mb-2">
                  <span>{edu.school}</span>
                  <span className="text-gray-500">|</span>
                  <span>{edu.year}</span>
                </div>
                {edu.description && <p className="text-gray-400 text-sm">{edu.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
};

export default Education;
