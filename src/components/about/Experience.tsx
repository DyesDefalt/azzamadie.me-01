
import { Briefcase } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  clients?: string[];
}

interface ExperienceProps {
  experience: ExperienceItem[];
}

const Experience = ({ experience }: ExperienceProps) => {
  return (
    <ScrollReveal delay={3}>
      <div className="mb-16 text-left">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white border-b border-gray-800 pb-4">
          Work Experience
        </h2>
        
        <div className="space-y-8">
          {experience.map((job, index) => (
            <div 
              key={index} 
              className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-teal/30 animate-on-scroll"
            >
              <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-teal transform -translate-x-[3px]"></div>
              <h3 className="text-xl font-bold text-white">{job.title}</h3>
              <div className="flex flex-wrap gap-2 items-center text-teal mb-3">
                <span>{job.company}</span>
                <span className="text-gray-500">|</span>
                <span>{job.period}</span>
                <span className="text-gray-500">|</span>
                <span>{job.location}</span>
              </div>
              
              <p className="text-gray-400">{job.description}</p>
              
              {job.clients && (
                <div className="mt-3">
                  <p className="text-white font-medium">Key Clients:</p>
                  <div className="flex gap-2 mt-1 flex-wrap">
                    {job.clients.map((client, i) => (
                      <span 
                        key={i} 
                        className="inline-block bg-secondary/50 px-3 py-1 rounded-full text-sm text-gray-300"
                      >
                        {client}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <a 
            href="/resume.pdf" 
            target="_blank" 
            className="text-teal hover:text-teal-400 transition-colors inline-flex items-center gap-1"
          >
            <Briefcase size={16} />
            <span>View Full Resume</span>
          </a>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default Experience;
