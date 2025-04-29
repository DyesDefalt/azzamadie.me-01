
import { Link } from "react-router-dom";
import { Send } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const ContactCTA = () => {
  return (
    <section className="py-20 px-6 bg-teal relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.2),transparent_70%)]"></div>
      
      <ScrollReveal>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-background animate-on-scroll">
            Ready to boost your digital marketing results?
          </h2>
          
          <p className="text-background/90 text-lg mb-10 max-w-2xl mx-auto animate-on-scroll" style={{transitionDelay: '100ms'}}>
            Let's discuss your goals and create a strategy that delivers measurable success.
            I'm available for freelance projects and consultations.
          </p>
          
          <Link
            to="/contact"
            className="inline-flex items-center bg-background text-teal hover:bg-white transition-colors duration-300 font-medium px-8 py-4 rounded-lg gap-2 btn-hover-effect animate-on-scroll"
            style={{transitionDelay: '200ms'}}
          >
            Get in touch <Send size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default ContactCTA;
