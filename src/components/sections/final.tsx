import Link from 'next/link';
import { Logo } from '@/components/logo';

const linkColumns = [
    {
      title: 'Lernen',
      links: ['Developer-Guides', 'API-Referenz', 'Beispiele', 'Bibliotheken', 'GitHub'],
    },
    {
      title: 'Bleiben Sie in Kontakt',
      links: ['Blog', 'X', 'YouTube', 'Events', 'Newsletter'],
    },
    {
      title: 'Support',
      links: ['Support kontaktieren', 'Community', 'Release-Notes', 'FAQs'],
    },
    {
      title: 'Tools für Entwickler',
      links: ['Android', 'Chrome', 'Firebase', 'Google Cloud', 'Alle Produkte'],
    },
  ];

export function FinalSection() {
    const currentYear = new Date().getFullYear();
  return (
    <section id="abschluss" className="relative bg-background overflow-hidden flex items-center py-12">
        {/* Gradient Background */}
        <div
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
        aria-hidden="true"
        >
            <div className="absolute inset-0 z-[-1] bg-[linear-gradient(to_top,transparent_0%,hsl(var(--background))_100%)]"></div>
            <div className="saturate-[1.2] opacity-100">
                <div className="absolute left-[20%] top-[75%] h-[90vw] w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,59,48,0.55)_0%,transparent_70%)]"></div>
                <div className="absolute left-[65%] top-[68%] h-[85vw] w-[85vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,45,146,0.55)_0%,transparent_70%)]"></div>
                <div className="absolute left-[50%] top-[90%] h-[95vw] w-[95vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,149,0,0.7)_0%,transparent_70%)]"></div>
                <div className="absolute left-[85%] top-[80%] h-[50vw] w-[50vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,193,58,0.18)_0%,transparent_80%)]"></div>
            </div>
            <div
                className="pointer-events-none fixed inset-0 -z-5 h-full w-full opacity-[0.035]"
                style={{
                backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAD1BMVEXp6en////x8fH4+Pj19fU8215yAAAAUElEQVQ4y2NgoAW8//+B6QXw9/8nAx4wMDCIgUvg//8bAxgYGBnY//8nBTAwMLD//yUDgEAgF4AYGJiA8f9/YIBgYOBhAAI3g//3kAGJWQAAgvgHwoJ4iWAAAAAASUVORK5CYII=")',
                }}
            />
        </div>

        {/* Black Panel */}
        <div className="relative z-10 mx-auto w-[calc(100%-32px)] max-w-6xl md:w-[calc(100%-64px)]">
            <div className="relative rounded-3xl border border-white/10 bg-black p-8 text-white/85 shadow-2xl shadow-black/60 md:p-12">
                <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                    <Logo />
                    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-white/60">
                        Aktueller Status
                        <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFC13A] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFC13A]"></span>
                        </span>
                    </div>
                </div>

                <div className="my-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {linkColumns.map((column) => (
                    <div key={column.title} className="flex flex-col gap-4">
                    <h3 className="font-semibold text-white/90">{column.title}</h3>
                    <ul className="flex flex-col gap-2">
                        {column.links.map((link) => (
                        <li key={link}>
                            <Link href="#" className="text-white/70 transition-colors hover:text-white hover:underline">
                            {link}
                            </Link>
                        </li>
                        ))}
                    </ul>
                    </div>
                ))}
                </div>

                <div className="mt-8 border-t border-white/10 pt-8">
                    <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
                        <p className="text-white/50">© {currentYear} TechNomic</p>
                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                            <Link href="/impressum" className="text-white/70 transition-colors hover:text-white">Impressum</Link>
                            <Link href="/datenschutz" className="text-white/70 transition-colors hover:text-white">Datenschutz</Link>
                            <Link href="/agb" className="text-white/70 transition-colors hover:text-white">AGB</Link>
                            <Link href="#" className="text-white/70 transition-colors hover:text-white">Cookies verwalten</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
