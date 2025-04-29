
import { Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

interface SkillsProps {
  skills: string[];
}

const Skills = ({ skills }: SkillsProps) => {
  return (
    <ScrollReveal delay={2}>
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white border-b border-gray-800 pb-4">
          Skills & Expertise
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="flex items-center gap-2 transform hover:translate-x-2 transition-transform duration-300"
            >
              <Check size={16} className="text-teal flex-shrink-0" />
              <span className="text-gray-300">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
};

export default Skills;
