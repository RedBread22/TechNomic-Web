
'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ChatPanel } from './chat-panel';
import { useIsMobile } from '@/hooks/use-mobile';

// --- CONFIG ---
const OPEN_ON_LOAD_PARAM = 'chat'; // e.g. ?chat=open
// --------------

const fabVariants = {
  hidden: { scale: 0, opacity: 0, y: 50 },
  visible: { scale: 1, opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 20, delay: 0.5 }},
};

const panelVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
};

// Dedicated component for the mobile overlay to simplify positioning
const ChatOverlay = ({ onClose }: { onClose: () => void }) => (
    <motion.div
      key="panel-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
    >
      <motion.div
        key="panel"
        variants={panelVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="w-full"
      >
        <ChatPanel onClose={onClose} />
      </motion.div>
    </motion.div>
);


export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const isMobile = useIsMobile();

  // Handle open state from URL param
  useEffect(() => {
    if (searchParams.get(OPEN_ON_LOAD_PARAM) === 'open') {
      setIsOpen(true);
    }
  }, [searchParams]);

  const toggleOpen = () => setIsOpen(prev => !prev);

  return (
    <>
      {/* FAB */}
      <div className="fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6">
        <AnimatePresence>
          {!isOpen && (
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
                aria-label="Chat öffnen"
              >
                <MessageSquare className="h-8 w-8" />
                <span className="sr-only">Chat öffnen</span>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          isMobile ? (
            <ChatOverlay onClose={() => setIsOpen(false)} />
          ) : (
            <motion.div
                key="panel-container-desktop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed bottom-24 right-4 z-50 w-full max-w-[420px] sm:right-6"
            >
              <motion.div
                  key="panel-desktop"
                  variants={panelVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
              >
                <ChatPanel onClose={() => setIsOpen(false)} />
              </motion.div>
            </motion.div>
          )
        )}
      </AnimatePresence>
    </>
  );
}
