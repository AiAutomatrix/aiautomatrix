"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ParticleWave from '@/components/sections/particle-wave';

export default function HeroSection() {
  
  return (
    <section 
      className="relative overflow-hidden pt-20 pb-20 md:pt-32 md:pb-24 bg-cover bg-center"
      style={{ backgroundImage: "url('/sales.png')" }}
    >
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <ParticleWave />
      <div className="relative z-20 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-white">
              <span className="text-gradient">Stop Losing Leads.<br />Start Automating Sales.</span>
            </h1>
            <p className="max-w-xl mx-auto text-lg md:text-xl text-slate-200 mb-8">
              We scrape your website, build a custom AI agent, and put it live — no code, no hassle. Your site becomes a 24/7 sales and support hero.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
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
      </div>
    </section>
  );
}
