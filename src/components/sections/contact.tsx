"use client";

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Calculator, ChevronsUpDown } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const pricingData = {
  packages: [
    { id: 'basic', name: 'Basic Website Agent', setup: 1200, monthly: 200, description: 'FAQ & customer service bot' },
    { id: 'standard', name: 'Standard Workflow Agent', setup: 2500, monthly: 400, description: 'Multi-page workflows & CRM integration' },
    { id: 'advanced', name: 'Advanced API-Integrated Agent', setup: 5000, monthly: 750, description: 'Multi-agent system & API integrations' },
  ],
  addOns: [
    { id: 'workflow', name: 'Additional Workflow Tool', setup: 0, monthly: 300 },
    { id: 'api', name: 'API Tool Integration', setup: 500, monthly: 150 },
    { id: 'multi-agent', name: 'Multi-Agent Expansion', setup: 1000, monthly: 0 },
    { id: 'nlp', name: 'Custom NLP Training', setup: 750, monthly: 0 },
    { id: 'optimization', name: 'Content Generation & Chat Optimization', setup: 0, monthly: 250 },
  ],
};

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [message, setMessage] = useState('');

  const [selectedPackage, setSelectedPackage] = useState<string>('basic');
  const [selectedAddOns, setSelectedAddOns] = useState<Record<string, boolean>>({});
  const [totalSetup, setTotalSetup] = useState(0);
  const [totalMonthly, setTotalMonthly] = useState(0);

  useEffect(() => {
    let setupCost = 0;
    let monthlyCost = 0;

    const pkg = pricingData.packages.find(p => p.id === selectedPackage);
    if (pkg) {
      setupCost += pkg.setup;
      monthlyCost += pkg.monthly;
    }

    for (const addOnId in selectedAddOns) {
      if (selectedAddOns[addOnId]) {
        const addOn = pricingData.addOns.find(a => a.id === addOnId);
        if (addOn) {
          setupCost += addOn.setup;
          monthlyCost += addOn.monthly;
        }
      }
    }

    setTotalSetup(setupCost);
    setTotalMonthly(monthlyCost);
  }, [selectedPackage, selectedAddOns]);

  const handleAddOnToggle = (id: string, checked: boolean) => {
    setSelectedAddOns(prev => ({ ...prev, [id]: checked }));
  };

  const handleSendMessage = () => {
    let quoteDetails = '';
    const pkg = pricingData.packages.find(p => p.id === selectedPackage);
    if (pkg) {
      quoteDetails += `Selected Package:\n- ${pkg.name} ($${pkg.setup} setup, $${pkg.monthly}/month)\n`;
    }

    const activeAddOns = pricingData.addOns.filter(a => selectedAddOns[a.id]);
    if (activeAddOns.length > 0) {
      quoteDetails += `\nSelected Add-Ons:\n`;
      activeAddOns.forEach(a => {
        quoteDetails += `- ${a.name} ($${a.setup} setup, $${a.monthly}/month)\n`;
      });
    }

    if (quoteDetails) {
        quoteDetails += `\n----------------------------------\n`;
        quoteDetails += `Total Estimated Setup Cost: $${totalSetup.toLocaleString()}\n`;
        quoteDetails += `Total Estimated Monthly Retainer: $${totalMonthly.toLocaleString()}/month\n`;
        quoteDetails += `----------------------------------\n\n`;
    }

    const subject = `New Quote Request from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nWebsite: ${website}\n\nMessage:\n${message}\n\n--- Quote Details ---\n${quoteDetails}`;
    window.location.href = `mailto:aiautomatrix@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Fill out the form below or build your own quote.
          </p>
        </div>
        <Card className="card-glass p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-headline text-2xl font-bold mb-6">Send us a message</h3>
              <div className="space-y-4">
                <Input 
                  type="text" 
                  placeholder="Your Name" 
                  className="bg-background/50"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-background/50"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                 <Input 
                  type="url" 
                  placeholder="Your Website (optional)" 
                  className="bg-background/50"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
                <Textarea 
                  placeholder="Your Message" 
                  className="bg-background/50 min-h-[150px]"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <Button className="w-full btn-gradient" onClick={handleSendMessage}>
                  Send Message & Quote
                </Button>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="font-headline text-2xl font-bold mb-6">Contact Information</h3>
               <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                        <Calculator className="h-6 w-6 text-primary" />
                        <span className="font-headline text-xl">Build Your Custom Quote</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2">Core Service Package</h4>
                        <RadioGroup value={selectedPackage} onValueChange={setSelectedPackage}>
                          {pricingData.packages.map(pkg => (
                            <div key={pkg.id} className="flex items-center space-x-2">
                              <RadioGroupItem value={pkg.id} id={pkg.id} />
                              <Label htmlFor={pkg.id} className="flex flex-col">
                                <span>{pkg.name} (${pkg.setup} + ${pkg.monthly}/mo)</span>
                                <span className="text-xs text-muted-foreground">{pkg.description}</span>
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>
                       <div>
                        <h4 className="font-semibold mb-2">Agent & Workflow Add-Ons</h4>
                        <div className="space-y-2">
                          {pricingData.addOns.map(addOn => (
                             <div key={addOn.id} className="flex items-center space-x-2">
                               <Checkbox 
                                id={addOn.id} 
                                checked={selectedAddOns[addOn.id] || false}
                                onCheckedChange={(checked) => handleAddOnToggle(addOn.id, !!checked)}
                               />
                               <Label htmlFor={addOn.id} className="flex flex-col">
                                 <span>{addOn.name} (+${addOn.setup} setup, +${addOn.monthly}/mo)</span>
                                </Label>
                             </div>
                          ))}
                        </div>
                       </div>
                      <div className="border-t border-border pt-4 space-y-2">
                        <div className="flex justify-between items-center font-bold">
                          <span>One-Time Setup Cost:</span>
                          <span>${totalSetup.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center font-bold">
                          <span>Monthly Retainer:</span>
                          <span>${totalMonthly.toLocaleString()}/month</span>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-primary" />
                <p className="text-muted-foreground">Winnipeg, Manitoba, Canada</p>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-primary" />
                <p className="text-muted-foreground">(204) 291-8210</p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-primary" />
                <p className="text-muted-foreground">aiautomatrix@outlook.com</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
