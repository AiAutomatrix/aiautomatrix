"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ParticleWave from '@/components/sections/particle-wave';

export default function HeroSection() {
  
  return (
    <section className="relative flex h-[calc(100vh-56px)] items-center justify-center overflow-hidden">
      <ParticleWave />
      <div className="relative z-10 container text-center flex flex-col items-center">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4">
          <span className="text-gradient">Ai Automatrix</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
          We build stunning, high-performance AI solutions that help businesses automate tasks and increase efficiency.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="#services">
            <Button size="lg" className="btn-gradient">
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="#gallery">
            <Button size="lg" variant="outline">
              See Our Work
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
