'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

const navLinks = [
  { href: '#vorteile', label: 'Ihre Vorteile' },
  { href: '#ueber-mich', label: 'Über mich' },
  { href: '#ablauf', label: 'Ablauf' },
  { href: '#konfigurator', label: 'Konfigurator' },
  { href: '#faq', label: 'FAQ' },
  { href: '#kontakt', label: 'Kontakt' },
];

export function Header() {
  const [activeLink, setActiveLink] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // scrollThreshold: 10px
      setIsScrolled(window.scrollY > 10);
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement;
        if (section && section.offsetTop <= scrollPosition) {
          setActiveLink(navLinks[i].href);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const DesktopNav = () => (
    <>
      {navLinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={cn(
            'relative py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground',
            'after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 after:ease-in-out after:content-[\'\']',
            activeLink === href && 'text-foreground after:scale-x-100'
          )}
        >
          {label}
        </Link>
      ))}
    </>
  );
  
  const MobileNav = () => (
    <>
      {navLinks.map(({ href, label }) => (
        <SheetClose key={href} asChild>
          <Link
            href={href}
            className={cn(
              'relative py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground',
              'after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 after:ease-in-out after:content-[\'\']',
              activeLink === href && 'text-foreground after:scale-x-100'
            )}
          >
            {label}
          </Link>
        </SheetClose>
      ))}
    </>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full bg-transparent backdrop-blur-lg transition-all duration-300',
        isScrolled
          ? 'border-b border-white/10 bg-black/30'
          : 'bg-black/0'
      )}
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-6 md:flex">
          <DesktopNav />
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:flex rounded-full">
            <Link href="#konfigurator">Konfigurator starten</Link>
          </Button>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Menü öffnen</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] border-l-white/10 bg-background/80 backdrop-blur-xl">
                <div className="flex h-full flex-col p-6">
                  <div className="mb-8 flex items-center justify-between">
                    <Logo />
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Menü schließen</span>
                      </Button>
                    </SheetClose>
                  </div>
                  <nav className="flex flex-col gap-6">
                    <MobileNav />
                  </nav>
                  <SheetClose asChild>
                    <Button asChild className="mt-auto rounded-full">
                      <Link href="#konfigurator">Konfigurator starten</Link>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
