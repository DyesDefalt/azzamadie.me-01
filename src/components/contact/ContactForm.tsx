
import { useState } from "react";
import { toast } from "sonner";
import { Send } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData(initialFormData);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <ScrollReveal delay={4}>
      <form onSubmit={handleSubmit} className="bg-slate-900/90 rounded-lg p-6 shadow-lg border border-slate-700/50">
        <h2 className="text-2xl font-bold mb-6 text-white">
          Send Me a Message
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="group">
            <label htmlFor="name" className="block text-slate-200 mb-2 group-focus-within:text-blue-400 transition-colors">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-slate-800 text-white border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
              placeholder="Your name"
            />
          </div>
          
          <div className="group">
            <label htmlFor="email" className="block text-slate-200 mb-2 group-focus-within:text-blue-400 transition-colors">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-slate-800 text-white border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
              placeholder="Your email"
            />
          </div>
        </div>
        
        <div className="mb-6 group">
          <label htmlFor="subject" className="block text-slate-200 mb-2 group-focus-within:text-blue-400 transition-colors">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md bg-slate-800 text-white border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
            placeholder="Message subject"
          />
        </div>
        
        <div className="mb-6 group">
          <label htmlFor="message" className="block text-slate-200 mb-2 group-focus-within:text-blue-400 transition-colors">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md bg-slate-800 text-white border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors resize-none"
            placeholder="Your message"
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
          <Send size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </form>
    </ScrollReveal>
  );
};

export default ContactForm;
