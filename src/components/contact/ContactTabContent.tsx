
import ScrollReveal from "@/components/ScrollReveal";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactTabContent = () => {
  return (
    <ScrollReveal delay={1}>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8">
        {/* Contact Info */}
        <div className="md:col-span-2 text-left">
          <ContactInfo />
        </div>
        
        {/* Contact Form */}
        <div className="md:col-span-3">
          <ContactForm />
        </div>
      </div>
    </ScrollReveal>
  );
};

export default ContactTabContent;
