
import ScrollReveal from "@/components/ScrollReveal";

const PageHeader = () => {
  return (
    <ScrollReveal>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Get In Touch
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Interested in working together? Reach out through the contact form, or try my AI assistants for 
          immediate responses and a glimpse of my tech-forward approach.
        </p>
      </div>
    </ScrollReveal>
  );
};

export default PageHeader;
