
import React, { useState } from 'react';
import { MessageSquare, X, Send, Loader2, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';


const mockChatResponse = async (message: string) => {
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const responses = [
    "Hello! I'm Jaswanth's AI assistant. How can I help you today?",
    "Jaswanth is a cybersecurity professional and system administrator with expertise in IT operations.",
    "You can contact Jaswanth via email at contact@jaswanthnarne.com or through the contact form on this site.",
    "Jaswanth has certifications in ethical hacking and network security.",
    "I'm an AI assistant trained to provide information about Jaswanth's portfolio and experience.",
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
};

interface ChatMessage {
  id: number;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatbotButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      content: "Hi there! I'm Jaswanth's AI assistant. How can I help you learn more about his work and experience?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;
    
    const userMessage: ChatMessage = {
      id: Date.now(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    
    try {
      const response = await mockChatResponse(inputMessage);
      
      const botMessage: ChatMessage = {
        id: Date.now() + 1,
        content: response,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error getting chat response:', error);
      toast.error('Failed to get response. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isLoading) {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 p-4 rounded-full bg-gradient-to-r from-cyan to-purple text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all z-40"
      >
        <MessageSquare size={24} />
      </button>
      
      {/* Chat Window */}
      <div 
        className={cn(
          'fixed bottom-6 right-6 w-[350px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[calc(100vh-4rem)] bg-navy-light rounded-lg shadow-2xl z-50 flex flex-col transition-all duration-300 border border-white/10',
          isChatOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        )}
      >
        {/* Chat Header */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-r from-cyan to-purple rounded-full">
              <Bot size={18} className="text-white" />
            </div>
            <h3 className="font-bold">Jaswanth's AI Assistant</h3>
          </div>
          <button 
            onClick={() => setIsChatOpen(false)}
            className="text-white/70 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div 
              key={message.id}
              className={cn(
                'max-w-[80%] p-3 rounded-lg',
                message.sender === 'user' 
                  ? 'bg-navy ml-auto rounded-tr-none' 
                  : 'bg-navy-dark mr-auto rounded-tl-none border border-white/5'
              )}
            >
              <p className="text-sm">{message.content}</p>
              <p className="text-xs text-white/40 mt-1 text-right">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          ))}
          
          {isLoading && (
            <div className="bg-navy-dark max-w-[80%] p-3 rounded-lg rounded-tl-none border border-white/5 mr-auto">
              <div className="flex items-center space-x-2">
                <Loader2 size={14} className="animate-spin text-cyan" />
                <p className="text-sm text-white/70">Thinking...</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Chat Input */}
        <div className="p-4 border-t border-white/10">
          <div className="flex space-x-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="bg-navy border-white/10 focus:border-cyan focus:ring-cyan"
              disabled={isLoading}
            />
            <Button
              onClick={handleSendMessage}
              disabled={isLoading || !inputMessage.trim()}
              className="bg-gradient-to-r from-cyan to-purple hover:from-cyan-dark hover:to-purple-dark transition-all"
            >
              <Send size={18} />
            </Button>
          </div>
          <p className="text-xs text-white/40 mt-2 text-center">
            Powered by AI - Ask me anything about Jaswanth
          </p>
        </div>
      </div>
    </>
  );
};

export default ChatbotButton;
