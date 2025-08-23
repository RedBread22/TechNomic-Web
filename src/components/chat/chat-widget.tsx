'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageSquare, X } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ChatPanel } from './chat-panel';
import { useIsMobile } from '@/hooks/use-mobile';


// --- CONFIG ---
const OPEN_ON_LOAD_PARAM = 'chat'; // e.g. ?chat=open
const STORAGE_KEY_OPEN = 'chatWidgetOpen';
// --------------

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const isMobile = useIsMobile();

  // Handle open state from localStorage and URL param
  useEffect(() => {
    const shouldOpenOnLoad = searchParams.get(OPEN_ON_LOAD_PARAM) === 'open';
    const savedState = localStorage.getItem(STORAGE_KEY_OPEN);
    
    if (shouldOpenOnLoad) {
      setIsOpen(true);
    } else if (savedState) {
      setIsOpen(JSON.parse(savedState));
    }
  }, [searchParams]);

  // Persist open state to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_OPEN, JSON.stringify(isOpen));
  }, [isOpen]);

  const toggleOpen = () => setIsOpen(prev => !prev);
  
  const fabVariants = {
    hidden: { scale: 0, opacity: 0, y: 50 },
    visible: { scale: 1, opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 20, delay: 0.5 }},
  };
  
  const panelVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  };


  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {isOpen ? (
            <motion.div
                key="panel"
                variants={panelVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
            >
             <ChatPanel onClose={() => setIsOpen(false)} />
            </motion.div>
        ) : (
          <motion.div
            key="fab"
            variants={fabVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className="h-16 w-16 rounded-full bg-primary/80 text-primary-foreground shadow-2xl backdrop-blur-md hover:bg-primary"
              onClick={toggleOpen}
            >
              <MessageSquare className="h-8 w-8" />
              <span className="sr-only">Chat öffnen</span>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
