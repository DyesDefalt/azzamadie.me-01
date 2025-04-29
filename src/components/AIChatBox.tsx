import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Send, Bot, User, Loader2, ChevronDown } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "./ui/dropdown-menu";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const availableModels = [
  { id: "google/gemini-2.0-flash-exp:free", name: "Gemini 2.0 Flash" },
  { id: "mistralai/mistral-small-3.1-24b-instruct:free", name: "Mistral Small 3.1" },
  { id: "qwen/qwen3-32b:free", name: "Qwen3 32b" },
  { id: "microsoft/mai-ds-r1:free", name: "Mai DS R1" },
  { id: "tngtech/deepseek-r1t-chimera:free", name: "DeepSeek R1T Chimera" },
  { id: "deepseek/deepseek-chat-v3-0324:free", name: "DeepSeek Chat V3" },
];

const AIChatBox = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi there! I'm Ahmad's AI assistant. I can help you with digital marketing questions or discuss potential collaborations. How can I assist you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState(availableModels[0]); // Default to Gemini Flash
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollViewport = scrollAreaRef.current.querySelector("div[data-radix-scroll-area-viewport]");
      if (scrollViewport) {
        setTimeout(() => {
          scrollViewport.scrollTop = scrollViewport.scrollHeight;
        }, 0); // Delay slightly to allow DOM update
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    scrollToBottom(); // Scroll after adding user message

    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // IMPORTANT: Replace with your actual OpenRouter API key if needed
          // "Authorization": `Bearer YOUR_OPENROUTER_API_KEY` 
        },
        body: JSON.stringify({
          model: selectedModel.id,
          messages: [
            { role: "system", content: "You are Ahmad Azzam Fuadie's AI assistant. Be helpful, concise, and professional. Answer questions about digital marketing, Ahmad's experience, and potential collaborations based on his portfolio context. Keep responses relatively brief." },
            ...messages.slice(-6), // Include some recent history
            userMessage,
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      const data = await response.json();
      const assistantMessage: Message = {
        role: "assistant",
        content: data.choices[0]?.message?.content || "Sorry, I couldn't get a response.",
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, something went wrong. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
      scrollToBottom(); // Scroll after adding assistant message
    }
  };

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-2xl mx-auto flex flex-col h-[600px]">
      <div className="flex flex-col space-y-1.5 p-6 border-b">
        <h3 className="font-semibold tracking-tight text-lg flex items-center">
          <Bot className="mr-2 h-5 w-5" /> Chat with Ahmad's AI Assistant
        </h3>
        <p className="text-sm text-muted-foreground">
          Ask questions about digital marketing, my experience, or services
        </p>
      </div>
      <ScrollArea className="flex-grow p-6" ref={scrollAreaRef}>
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 ${message.role === "user" ? "justify-end" : ""}`}
            >
              {message.role === "assistant" && (
                <Avatar className="h-8 w-8 border">
                  <AvatarImage src="/placeholder.svg" alt="AI Assistant" />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
              )}
              <div
                className={`rounded-lg px-4 py-2 max-w-[80%] ${message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"}`}
              >
                {/* Use ReactMarkdown for assistant messages */}
                {message.role === 'assistant' ? (
                  <ReactMarkdown 
                    remarkPlugins={[remarkGfm]} 
                    className="max-w-none text-sm leading-relaxed"
                    components={{
                      // Customize link rendering if needed
                      // a: ({node, ...props}) => <a {...props} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline"/>,
                    }}
                  >
                    {message.content}
                  </ReactMarkdown>
                ) : (
                  <p className="text-sm">{message.content}</p>
                )}
              </div>
              {message.role === "user" && (
                <Avatar className="h-8 w-8 border">
                  {/* Placeholder for user avatar if needed */}
                  <AvatarFallback><User className="h-4 w-4"/></AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-3">
              <Avatar className="h-8 w-8 border">
                <AvatarImage src="/placeholder.svg" alt="AI Assistant" />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              <div className="rounded-lg px-4 py-2 bg-muted flex items-center">
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                <span className="text-sm text-muted-foreground">Thinking...</span>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
      <div className="p-6 border-t">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <Input
            id="message"
            placeholder="Ask me about digital marketing..."
            className="flex-1"
            autoComplete="off"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center gap-1 text-xs">
                {selectedModel.name}
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {availableModels.map((model) => (
                <DropdownMenuItem 
                  key={model.id} 
                  onSelect={() => setSelectedModel(model)}
                  className="text-xs"
                >
                  {model.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
        <p className="text-xs text-center text-muted-foreground mt-2">
          Powered by {selectedModel.name} for seamless conversation about Ahmad's expertise.
        </p>
      </div>
    </div>
  );
};

export default AIChatBox;

