"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Sparkles, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#about', label: 'About' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#seo-tool', label: 'SEO Tool' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg">LocalSpark</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="#contact" className='hidden md:inline-flex'>
              <Button className="btn-gradient">Get a Quote</Button>
            </Link>
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b">
                     <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
                      <Sparkles className="h-6 w-6 text-primary" />
                      <span className="font-bold font-headline text-lg">LocalSpark</span>
                    </Link>
                    <Button variant="ghost" onClick={() => setIsMenuOpen(false)}>
                      <X className="h-6 w-6" />
                       <span className="sr-only">Close menu</span>
                    </Button>
                  </div>
                  <nav className="flex flex-col p-4 space-y-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-lg font-medium transition-colors hover:text-primary"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}