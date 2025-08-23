import { Header } from '@/components/layout/header';
import { HeroSection } from '@/components/sections/hero';
import { AdvantagesSection } from '@/components/sections/advantages';
import { ConfiguratorSection } from '@/components/sections/configurator';
import { AboutSection } from '@/components/sections/about';
import { ContactSection } from '@/components/sections/contact';
import { FinalSection } from '@/components/sections/final';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AdvantagesSection />
        <AboutSection />
        <ConfiguratorSection />
        <ContactSection />
        <FinalSection />
      </main>
    </div>
  );
}
