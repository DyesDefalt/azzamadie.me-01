
import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/contact/PageHeader";
import ContactTabs from "@/components/contact/ContactTabs";

const Contact = () => {
  return (
    <main className="pt-24 pb-16 min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <PageHeader />
          <ContactTabs />
        </div>
      </div>
    </main>
  );
};

export default Contact;
