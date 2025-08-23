'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useAppContext } from '@/context/app-context';

const modules = [
  { id: 'website', label: 'Website Basis', price: 1500, type: 'base' },
  { id: 'hosting', label: 'Cloud & Hosting', price: 250, type: 'base' },
  { id: 'automation', label: 'KI-Automatisierung', price: 1200, type: 'base' },
  { id: 'support', label: 'IT-Support', price: 500, type: 'base' },
  { id: 'multilang', label: 'Mehrsprachigkeit', price: 400, type: 'addon' },
  { id: 'seo', label: 'SEO-Setup', price: 600, type: 'addon' },
  { id: 'maintenance', label: 'Wartungsvertrag', price: 800, type: 'addon' },
];

export function ConfiguratorSection() {
  const [selected, setSelected] = useState<string[]>([]);
  const { setContactMessage } = useAppContext();

  const handleSelect = (id: string) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const total = useMemo(() => {
    return modules
      .filter(m => selected.includes(m.id))
      .reduce((sum, m) => sum + m.price, 0);
  }, [selected]);

  const handleRequestQuote = () => {
    const selectedModules = modules
      .filter(m => selected.includes(m.id))
      .map(m => m.label);

    const message = `Hallo, ich interessiere mich für ein individuelles Angebot für die folgenden Module:\n\n- ${selectedModules.join(
      '\n- '
    )}\n\nBitte kontaktieren Sie mich.`;
    setContactMessage(message);
    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const baseModules = modules.filter(m => m.type === 'base');
  const addons = modules.filter(m => m.type === 'addon');

  return (
    <section id="konfigurator" className="relative bg-black py-40 sm:py-48">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Stellen Sie Ihr Paket zusammen
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Wählen Sie die benötigten Module für eine erste Preisschätzung.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <div>
              <h3 className="text-xl font-semibold">Basispakete</h3>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {baseModules.map(module => (
                  <div key={module.id} className="flex items-start space-x-3 rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/10">
                    <Checkbox id={module.id} onCheckedChange={() => handleSelect(module.id)} />
                    <Label htmlFor={module.id} className="w-full cursor-pointer">
                      <span className="font-medium">{module.label}</span>
                      <p className="text-sm text-muted-foreground">ab {module.price}€</p>
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Add-Ons</h3>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {addons.map(module => (
                  <div key={module.id} className="flex items-start space-x-3 rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/10">
                    <Checkbox id={module.id} onCheckedChange={() => handleSelect(module.id)} />
                    <Label htmlFor={module.id} className="w-full cursor-pointer">
                      <span className="font-medium">{module.label}</span>
                      <p className="text-sm text-muted-foreground">ab {module.price}€</p>
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24 border-white/10 bg-white/5 backdrop-blur-lg">
              <CardHeader>
                <CardTitle>Ihre Preisschätzung</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {selected.length > 0 ? (
                    modules
                      .filter(m => selected.includes(m.id))
                      .map(m => (
                        <div key={m.id} className="flex justify-between">
                          <span>{m.label}</span>
                          <span>{m.price}€</span>
                        </div>
                      ))
                  ) : (
                    <p className="text-muted-foreground">Wählen Sie Module aus.</p>
                  )}
                  <div className="my-4 h-px bg-border" />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Gesamt (ca.)</span>
                    <span>{total}€</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex-col items-stretch gap-4">
                 <Button size="lg" onClick={handleRequestQuote} disabled={selected.length === 0} className="rounded-full">
                  Individuelles Angebot anfordern
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  Preis ist eine unverbindliche Richtgröße; finales Angebot nach kurzer Abstimmung.
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
