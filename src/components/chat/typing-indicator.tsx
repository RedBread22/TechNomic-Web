'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export function TypingIndicator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'flex items-center justify-start gap-1.5 rounded-2xl rounded-bl-none border border-white/10 bg-white/5 px-4 py-3.5',
        className
      )}
      aria-live="polite"
      aria-label="Assistent tippt…"
    >
        <motion.span
            className="h-2 w-2 rounded-full bg-muted-foreground"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
        />
        <motion.span
            className="h-2 w-2 rounded-full bg-muted-foreground"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
        />
        <motion.span
            className="h-2 w-2 rounded-full bg-muted-foreground"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        />
    </div>
  );
}
