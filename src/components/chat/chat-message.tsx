
'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export interface Message {
  id: string;
  role: 'user' | 'bot';
  text: string;
}

export function ChatMessage({ message }: { message: Message }) {
  const isBot = message.role === 'bot';

  return (
    <div
      className={cn('flex items-start gap-3', {
        'justify-end': !isBot,
      })}
    >
      {isBot && (
        <Avatar className="h-12 w-12 border border-white/10">
           <AvatarImage src="/images/4Bot.png" alt="Bot-Avatar" />
           <AvatarFallback className="bg-transparent text-sm">AI</AvatarFallback>
        </Avatar>
      )}
      <div
        className={cn(
          'markdown-bubble max-w-[75%] rounded-2xl px-4 py-2.5 text-sm',
          isBot
            ? 'rounded-bl-none border border-white/10 bg-white/5'
            : 'rounded-br-none bg-primary text-primary-foreground'
        )}
      >
        {isBot ? (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              a: ({node, ...props}) => <a target="_blank" rel="noopener noreferrer" {...props} />,
            }}
          >
            {message.text}
          </ReactMarkdown>
        ) : (
          message.text
        )}
      </div>
      {!isBot && (
        <Avatar className="h-12 w-12">
          <AvatarFallback className="bg-accent text-accent-foreground text-sm font-bold">DU</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
