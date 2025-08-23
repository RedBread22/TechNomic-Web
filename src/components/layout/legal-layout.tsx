import Link from 'next/link';
import { Header } from './header';
import { Footer } from './footer';
import { ArrowLeft } from 'lucide-react';

interface LegalLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function LegalLayout({ title, children }: LegalLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background py-16 sm:py-24">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Zur Startseite
          </Link>
          <div className="prose prose-invert max-w-none text-foreground/90 prose-h1:mb-4 prose-h1:text-4xl prose-h1:font-bold prose-h1:text-foreground prose-h2:text-2xl prose-h2:font-semibold prose-h2:text-foreground prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {title}
            </h1>
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
