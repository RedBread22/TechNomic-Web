'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ChatPanel } from './chat-panel';
import { useIsMobile } from '@/hooks/use-mobile';
import { ChatPortal } from './ChatPortal';

const OPEN_ON_LOAD_PARAM = 'chat';

const fabVariants = {
  hidden: { scale: 0, opacity: 0, y: 50 },
  visible: { scale: 1, opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 20, delay: 0.4 } },
};

const panelVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.25, ease: 'easeOut' } },
};

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (searchParams.get(OPEN_ON_LOAD_PARAM) === 'open') setIsOpen(true);
  }, [searchParams]);

  const toggleOpen = () => setIsOpen(p => !p);

  return (
    <>
      {/* FAB */}
      <AnimatePresence>
        {!isOpen && (
          <ChatPortal>
            <motion.div
              key="fab"
              variants={fabVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed z-[9998]"
              style={{
                right: 'max(16px, env(safe-area-inset-right))',
                bottom: 'max(16px, env(safe-area-inset-bottom))',
              }}
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
          </ChatPortal>
        )}
      </AnimatePresence>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <ChatPortal>
            {isMobile ? (
              // MOBILE: Overlay + Bottom-Sheet
              <>
                <motion.div
                  key="overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[9998] bg-black/50"
                  onClick={toggleOpen}
                />
                <motion.div
                  key="sheet"
                  variants={panelVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="fixed z-[9999] flex justify-center"
                   style={{
                    left: 'max(12px, env(safe-area-inset-left))',
                    right: 'max(12px, env(safe-area-inset-right))',
                    bottom: 'max(12px, env(safe-area-inset-bottom))',
                  }}
                >
                  <div className="w-full max-w-[420px]">
                    <ChatPanel onClose={() => setIsOpen(false)} />
                  </div>
                </motion.div>
              </>
            ) : (
              // DESKTOP: Bottom-Right, width capped
                <motion.div
                  key="panel-desktop"
                  variants={panelVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="fixed z-[9999]"
                  style={{
                    right: 'max(16px, env(safe-area-inset-right))',
                    bottom: 'calc(max(16px, env(safe-area-inset-bottom)) + 80px)',
                    width: 'min(420px, calc(100vw - 32px))',
                  }}
                >
                  <ChatPanel onClose={() => setIsOpen(false)} />
                </motion.div>
            )}
          </ChatPortal>
        )}
      </AnimatePresence>
    </>
  );
}
