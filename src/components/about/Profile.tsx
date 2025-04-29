
import { Download } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const Profile = () => {
  return (
    <ScrollReveal>
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          About Me
        </h1>
        
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          <div className="w-full md:w-1/3">
            <img 
              src="/lovable-uploads/1d121099-8d16-417d-9542-55bd12a925b5.png"
              alt="Ahmad Azzam Fuadie"
              className="rounded-lg shadow-lg w-full max-w-xs mx-auto hover-scale"
            />
            
            <div className="mt-6 flex justify-center">
              <a 
                href="#" 
                className="inline-flex items-center bg-teal text-white hover:bg-teal-600 transition-colors duration-300 font-medium px-5 py-2 rounded gap-2 btn-hover-effect"
              >
                Download CV <Download size={16} />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-2/3 text-left">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-teal animate-on-scroll">
              Digital Marketing Specialist with a Passion for Data and Innovation
            </h2>
            
            <div className="space-y-4 text-gray-300">
              <p className="animate-on-scroll" style={{transitionDelay: '100ms'}}>
                I'm Ahmad Azzam Fuadie, a Digital Marketing Specialist with a unique background in Chemical Engineering, 
                now leading data-driven marketing strategies at Dentsu for high-profile clients.
              </p>
              
              <p className="animate-on-scroll" style={{transitionDelay: '200ms'}}>
                My journey from engineering to marketing has given me a strong analytical foundation, 
                allowing me to approach marketing challenges with both creativity and data-driven precision.
              </p>
              
              <p className="animate-on-scroll" style={{transitionDelay: '300ms'}}>
                With expertise in SEM, social media marketing, and performance campaigns, I specialize in 
                creating marketing strategies that deliver measurable results and tangible ROI.
              </p>
              
              <p className="animate-on-scroll" style={{transitionDelay: '400ms'}}>
                I'm passionate about staying ahead of digital trends and continuously expanding my knowledge 
                to bring innovative solutions to the table.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default Profile;
