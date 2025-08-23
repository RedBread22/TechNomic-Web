'use client';

import { useEffect, useRef, useState } from 'react';
import { SendHorizonal, X } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { ChatMessage, type Message } from './chat-message';
import { TypingIndicator } from './typing-indicator';
import Link from 'next/link';

// --- CONFIG ---
const WEBHOOK_URL = 'https://myn8n.technomic.at/webhook/ec30c1b9-a8eb-4e56-a860-c5a48a7f3938';
const PERSIST_HISTORY = true;
const STORAGE_KEY_CONVERSATION = 'chatConversation';
const STORAGE_KEY_ID = 'chatConversationId';
// --------------

export function ChatPanel({
  onClose,
  className,
}: {
  onClose: () => void;
  className?: string;
}) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [conversationId, setConversationId] = useState<string>('');
  const [inputValue, setInputValue] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const { toast } = useToast();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Load conversation from localStorage on mount
  useEffect(() => {
    if (PERSIST_HISTORY) {
      const savedMessages = localStorage.getItem(STORAGE_KEY_CONVERSATION);
      const savedId = localStorage.getItem(STORAGE_KEY_ID);
      if (savedMessages) {
        setMessages(JSON.parse(savedMessages));
      }
      if (savedId) {
        setConversationId(savedId);
      } else {
        const newId = uuidv4();
        setConversationId(newId);
        localStorage.setItem(STORAGE_KEY_ID, newId);
      }
    } else {
       const newId = uuidv4();
       setConversationId(newId);
    }
  }, []);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (PERSIST_HISTORY) {
      localStorage.setItem(STORAGE_KEY_CONVERSATION, JSON.stringify(messages));
    }
  }, [messages]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages, isBotTyping]);


  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isSending) return;

    const newUserMessage: Message = { id: uuidv4(), role: 'user', text };
    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');
    setIsSending(true);
    setIsBotTyping(true);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          conversationId: conversationId,
          sessionId: conversationId,
          user: 'website',
          page: window.location.href,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      const botReplyText = responseData.reply || 'Entschuldigung, ich konnte keine Antwort finden.';
      
      const newBotMessage: Message = { id: uuidv4(), role: 'bot', text: botReplyText };
      setMessages(prev => [...prev, newBotMessage]);

    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        variant: 'destructive',
        title: 'Fehler beim Senden',
        description: 'Bitte später erneut versuchen.',
      });
       const errorBotMessage: Message = { id: uuidv4(), role: 'bot', text: 'Fehler: Nachricht konnte nicht gesendet werden.' };
       setMessages(prev => [...prev, errorBotMessage]);
    } finally {
      setIsSending(false);
      setIsBotTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputValue);
    }
  };

  return (
    <div
      className={cn(
        'flex h-[70vh] w-full max-w-[420px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-background/50 shadow-2xl backdrop-blur-xl',
        className
      )}
      role="dialog"
      aria-labelledby="chat-header"
    >
      {/* Header */}
      <header id="chat-header" className="flex items-center justify-between border-b border-white/10 p-4">
        <h2 className="text-lg font-semibold">Chat</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5" />
          <span className="sr-only">Chat schließen</span>
        </Button>
      </header>

      {/* Messages */}
      <ScrollArea className="flex-1" ref={scrollAreaRef}>
        <div className="space-y-6 p-4">
          {messages.map(msg => (
            <ChatMessage key={msg.id} message={msg} />
          ))}
          {isBotTyping && <TypingIndicator />}
        </div>
      </ScrollArea>
      
      <div className='px-4 pb-2 text-center text-xs text-muted-foreground'>
         Hinweis: Nachrichten werden an unseren Automations-Dienst verarbeitet.
      </div>


      {/* Composer */}
      <div className="border-t border-white/10 p-4">
        <div className="relative">
          <Input
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Nachricht schreiben..."
            className="h-11 rounded-full bg-white/5 pr-12"
            disabled={isSending}
            aria-label="Nachricht schreiben"
          />
          <Button
            type="submit"
            size="icon"
            className="absolute right-1.5 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full"
            onClick={() => handleSendMessage(inputValue)}
            disabled={isSending || !inputValue.trim()}
          >
            <SendHorizonal className="h-5 w-5" />
            <span className="sr-only">Senden</span>
          </Button>
        </div>
        <div className="mt-2.5 flex justify-center gap-x-4 text-xs">
            <Link href="#" className="text-muted-foreground hover:text-foreground">Datenschutz</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">Impressum</Link>
        </div>
      </div>
    </div>
  );
}
