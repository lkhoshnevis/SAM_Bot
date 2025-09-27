import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

interface ChatInterfaceProps {
  onSendMessage: (name: string, message: string) => void;
}

export default function ChatInterface({ onSendMessage }: ChatInterfaceProps) {
  const [name, setName] = useState("");
  const message = `Hey Sam, my name is ${name || "____"} nice to meet you.`;

  const handleSend = () => {
    if (name.trim()) {
      onSendMessage(name, message);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Name Input */}
      <div className="mb-6">
        <Input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="text-center text-lg border-2 border-primary/20 focus:border-primary rounded-2xl py-3"
          data-testid="input-name"
        />
      </div>

      {/* Chat Interface */}
      <div className="bg-card rounded-2xl p-4 mb-6 border border-card-border">
        {/* Chat Header */}
        <div className="flex items-center justify-center mb-4">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground text-sm font-bold">S</span>
          </div>
          <span className="ml-2 text-sm font-medium">Sam</span>
        </div>

        {/* Message Preview */}
        <div className="flex justify-end mb-4">
          <div className="bg-primary text-primary-foreground px-4 py-3 rounded-2xl rounded-tr-md max-w-[85%] shadow-sm">
            <p className="text-sm leading-relaxed">{message}</p>
          </div>
        </div>

        {/* Input Area */}
        <div className="flex items-center bg-muted rounded-2xl px-4 py-2">
          <div className="flex-1 py-2 px-2">
            <span className="text-muted-foreground text-sm">{message}</span>
          </div>
          <Button
            size="icon"
            onClick={handleSend}
            disabled={!name.trim()}
            className="ml-2 h-8 w-8 rounded-full bg-primary hover:bg-primary/90"
            data-testid="button-send"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Send Button */}
      <Button
        onClick={handleSend}
        disabled={!name.trim()}
        size="lg"
        className="w-full py-4 text-lg font-medium rounded-2xl"
        data-testid="button-send-message"
      >
        click send to get introduced
      </Button>
    </div>
  );
}