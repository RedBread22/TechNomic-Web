'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export function ChatPortal({ children }: { children: React.ReactNode }) {
  const [host, setHost] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let el = document.getElementById('chat-root');
    if (!el) {
      el = document.createElement('div');
      el.id = 'chat-root';
      document.body.appendChild(el);
    }
    setHost(el);
  }, []);

  if (!host) return null;
  return createPortal(children, host);
}