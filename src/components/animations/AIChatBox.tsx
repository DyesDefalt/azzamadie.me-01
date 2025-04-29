import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import ReactMarkdown from 'react-markdown'; // Import ReactMarkdown
import remarkGfm from 'remark-gfm'; // Import remarkGfm for GitHub Flavored Markdown

interface Message {
  role: "user" | "assistant";
  content: string;
}

const AIChatBox = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi there! I'm Ahmad's AI assistant. I can help you with digital marketing questions or discuss potential collaborations. How can I assist you today?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user" as const, content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Using a placeholder API key - replace with actual key management in production
      const apiKey = "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"; 
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
          "HTTP-Referer": "https://kgikvnmd.manus.space/", // Use the deployed preview URL or final domain
          "X-Title": "Ahmad's Portfolio AI Assistant",
        },
        body: JSON.stringify({
          model: "microsoft/mai-ds-r1:free", // Consider a model known for better formatting if issues persist
          messages: [...messages, userMessage],
          temperature: 0.7,
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("AI API Error Response:", errorData);
        throw new Error(`Failed to get a response from the AI: ${response.statusText}`);
      }

      const data = await response.json();
      const aiResponse = data.choices[0]?.message?.content || "Sorry, I couldn't generate a response.";

      setMessages((prev) => [...prev, { role: "assistant", content: aiResponse }]);
    } catch (error) {
      console.error("AI API error:", error);
      toast.error(`Failed to communicate with AI assistant: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again.`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[500px] bg-slate-900/90 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-slate-700/50">
      <div className="p-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white flex justify-between items-center border-b border-slate-700/50">
        <h3 className="text-lg font-medium flex items-center gap-2">
          <Bot size={20} className="text-blue-400" />
          Chat with Ahmad's AI Assistant
        </h3>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-slate-900 to-slate-950">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`flex ${message.role === "assistant" ? "justify-start" : "justify-end"}`}
          >
            <div 
              className={`max-w-[80%] rounded-lg p-3 transition-all hover:shadow-lg ${
                message.role === "assistant" 
                  ? "bg-slate-800/90 text-slate-100 border border-slate-700/50 text-left" // Added text-left for assistant
                  : "bg-blue-600 text-white text-left" // Added text-left for user for consistency
              }`}
            >
              <div className="flex items-start gap-2">
                {message.role === "assistant" ? (
                  <Bot className="mt-1 text-blue-400 flex-shrink-0" size={16} />
                ) : (
                  <User className="mt-1 text-blue-100 flex-shrink-0" size={16} />
                )}
                {/* Use ReactMarkdown for assistant messages */}
                {message.role === 'assistant' ? (
                  <ReactMarkdown 
                    remarkPlugins={[remarkGfm]} 
                    className="prose prose-sm prose-invert max-w-none text-sm leading-relaxed"
                    components={{
                      // Customize link rendering if needed
                      // a: ({node, ...props}) => <a {...props} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline"/>,
                    }}
                  >
                    {message.content}
                  </ReactMarkdown>
                ) : (
                  <p className="text-sm leading-relaxed">{message.content}</p>
                )}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSubmit} className="p-4 border-t border-slate-700/50 bg-slate-900">
        <div className="flex gap-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me about digital marketing..."
            className="min-h-10 resize-none bg-slate-800 text-slate-100 border-slate-700 focus:border-blue-500 focus:ring-blue-500"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          />
          <Button 
            type="submit" 
            disabled={isLoading || !input.trim()} 
            className="bg-blue-600 hover:bg-blue-700 text-white transition-colors"
          >
            {isLoading ? <Loader2 className="animate-spin" /> : <Send size={18} />}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AIChatBox;

