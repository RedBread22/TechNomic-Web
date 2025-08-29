import { Header } from '@/components/layout/header';
import { HeroSection } from '@/components/sections/hero';
import { AdvantagesSection } from '@/components/sections/advantages';
import { ConfiguratorSection } from '@/components/sections/configurator';
import { FounderSection } from '@/components/sections/founder';
import { ContactSection } from '@/components/sections/contact';
import { FinalSection } from '@/components/sections/final';
import { ImageParallaxSection } from '@/components/sections/image-parallax';
import { ProcessSection } from '@/components/sections/process';
import { SecuritySection } from '@/components/sections/security';
import { FaqSection } from '@/components/sections/faq';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <HeroSection />
        <ImageParallaxSection />
        <AdvantagesSection />
        <FounderSection />
        <ProcessSection />
        <SecuritySection />
        <FaqSection />
        <ConfiguratorSection />
        <ContactSection />
        <FinalSection />
      </main>
      <Footer />
    </div>
  );
}
