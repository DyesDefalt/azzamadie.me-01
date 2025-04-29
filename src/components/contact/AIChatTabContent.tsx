
import ScrollReveal from "@/components/ScrollReveal";
import AIChatBox from "@/components/AIChatBox";

const AIChatTabContent = () => {
  return (
    <ScrollReveal>
      <div className="max-w-3xl mx-auto">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Chat with Ahmad's AI Assistant</h2>
          <p className="text-gray-400">Ask questions about digital marketing, my experience, or services</p>
        </div>
        <AIChatBox />
        <p className="text-xs text-gray-500 mt-4 text-center">
          Powered by GPT-4o for seamless conversation about Ahmad's expertise.
        </p>
      </div>
    </ScrollReveal>
  );
};

export default AIChatTabContent;
