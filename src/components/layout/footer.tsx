import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Logo } from '@/components/logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Logo />
            <p className="text-sm text-foreground/60">
              © {currentYear} TechNomic. Alle Rechte vorbehalten.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <Link href="#" className="text-foreground/80 hover:text-foreground">
              Impressum
            </Link>
            <Link href="#" className="text-foreground/80 hover:text-foreground">
              Datenschutz
            </Link>
            <Link href="#" className="text-foreground/80 hover:text-foreground">
              AGB
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-foreground/60 hover:text-foreground" />
            </Link>
            <Link href="#" aria-label="GitHub">
              <Github className="h-5 w-5 text-foreground/60 hover:text-foreground" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-foreground/60 hover:text-foreground" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
