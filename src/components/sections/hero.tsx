"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ParticleWave from '@/components/sections/particle-wave';

export default function HeroSection() {
  
  return (
    <section className="relative flex h-[calc(100vh-56px)] items-center justify-center overflow-hidden">
      <ParticleWave />
      <div className="relative z-10 container text-center flex flex-col items-center">
        <div className="max-w-4xl mx-auto mb-8">
            <Image
                src="/sales.png"
                alt="Turn Your Website Into a 24/7 Sales & Support Agent"
                width={1200}
                height={675}
                priority
            />
        </div>
        <h1 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter mb-4">
          <span className="text-gradient">Stop Losing Leads. Start Automating Sales.</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
          We scrape your website, build a custom AI agent, and put it live — no code, no hassle.
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
    </section>
  );
}
