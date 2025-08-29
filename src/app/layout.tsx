import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { AppProvider } from '@/context/app-context';
import { Toaster } from '@/components/ui/toaster';
import { Background } from '@/components/background';
import { ChatWidget } from '@/components/chat/chat-widget';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'TechNomic | Innovative IT, Websites & KI-Automatisierung',
  description:
    'Moderne Weblösungen, Cloud-Hosting und smarte Automationen aus Bad Mitterndorf – DSGVO-konform und lokal betreut für Ihren digitalen Erfolg.',
  openGraph: {
    title: 'TechNomic | Innovative IT, Websites & KI-Automatisierung',
    description:
      'Moderne Weblösungen, Cloud-Hosting und smarte Automationen aus Bad Mitterndorf – DSGVO-konform und lokal betreut für Ihren digitalen Erfolg.',
    url: 'https://technomic.web.app', // Replace with your actual URL
    siteName: 'TechNomic',
    images: [
      {
        url: 'https://placehold.co/1200x630.png', // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: 'TechNomic - Innovative IT-Lösungen',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="dark">
      <body className={`${inter.variable} font-body antialiased overflow-x-hidden`}>
        <AppProvider>
          <Background />
          {children}
          <Toaster />
          <Suspense fallback={null}>
            <ChatWidget />
          </Suspense>
        </AppProvider>
      </body>
    </html>
  );
}
