"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ParticleWave from '@/components/sections/particle-wave';

export default function HeroSection() {
  
  return (
    <section className="relative overflow-hidden pt-20 pb-20 md:pt-32 md:pb-24">
      <ParticleWave />
      <div className="relative z-10 container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              <span className="text-gradient">Stop Losing Leads. Start Automating Sales.</span>
            </h1>
            <p className="max-w-xl mx-auto md:mx-0 text-lg md:text-xl text-muted-foreground mb-8">
              We scrape your website, build a custom AI agent, and put it live — no code, no hassle. Your site becomes a 24/7 sales and support hero.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Link href="#contact">
                <Button size="lg" className="btn-gradient">
                  Get this for my website
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/bot-demos">
                <Button size="lg" variant="outline">
                  See a Live Demo
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
              <Image
                  src="/sales.png"
                  alt="Turn Your Website Into a 24/7 Sales & Support Agent"
                  width={600}
                  height={338}
                  priority
                  className="rounded-lg shadow-2xl"
              />
          </div>
        </div>
      </div>
    </section>
  );
}
