
import { useState } from "react";
import { Mail, MessageSquare } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ScrollReveal from "@/components/ScrollReveal";
import ContactTabContent from "./ContactTabContent";
import AIChatTabContent from "./AIChatTabContent";

const ContactTabs = () => {
  const [activeTab, setActiveTab] = useState("contact");

  return (
    <ScrollReveal delay={2}>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="grid grid-cols-2 max-w-md mx-auto mb-8">
          <TabsTrigger value="contact" className="flex items-center gap-2 hover-lift">
            <Mail size={16} />
            <span className="hidden sm:inline">Contact</span>
          </TabsTrigger>
          <TabsTrigger value="chat" className="flex items-center gap-2 hover-lift">
            <MessageSquare size={16} />
            <span className="hidden sm:inline">AI Chat</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="contact" className="animate-in fade-in-50 slide-in-from-bottom-5 duration-500">
          <ContactTabContent />
        </TabsContent>
        
        <TabsContent value="chat" className="mt-4 animate-in fade-in-50 slide-in-from-bottom-5 duration-500">
          <AIChatTabContent />
        </TabsContent>
      </Tabs>
    </ScrollReveal>
  );
};

export default ContactTabs;
