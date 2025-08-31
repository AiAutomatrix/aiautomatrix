"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Sparkles, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const aiServiceLinks = [
  { href: '/services/custom-botpress-agent', label: 'Custom Botpress Agent' },
  { href: '/services/ai-powered-website-building', label: 'AI-Powered Websites' },
];

const navLinks = [
  { href: '/#about', label: 'About' },
  { href: '/bot-demos', label: 'Bot Demos' },
  { href: '/#testimonials', label: 'Reviews' },
  { href: '/#seo-tool', label: 'SEO Tool' },
  { href: '/#contact', label: 'Contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-lg">Ai Automatrix</span>
        </Link>
        
        <div className="flex-1 flex justify-center">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
             <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 transition-colors hover:text-primary outline-none">
                Services <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <p className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">AI SOLUTIONS</p>
                {aiServiceLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link href={link.href}>{link.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
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
        </div>

        <div className="flex items-center gap-4">
            {/* Desktop Quote Button */}
            <div className="hidden md:flex">
              <Link href="/#contact">
                <Button className="btn-gradient">Get a Quote</Button>
              </Link>
            </div>
            
            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-4 border-b">
                      <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
                        <Sparkles className="h-6 w-6 text-primary" />
                        <span className="font-bold font-headline text-lg">Ai Automatrix</span>
                      </Link>
                      <Button variant="ghost" onClick={() => setIsMenuOpen(false)}>
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </div>
                    <nav className="flex flex-col p-4 space-y-4 overflow-y-auto">
                      <p className="text-muted-foreground text-sm font-semibold">SERVICES</p>
                      {aiServiceLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="text-lg font-medium transition-colors hover:text-primary"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                      <p className="text-muted-foreground text-sm font-semibold pt-4">MENU</p>
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
                      <Link href="/#contact" onClick={() => setIsMenuOpen(false)} className="mt-auto">
                          <Button className="w-full btn-gradient">Get a Quote</Button>
                      </Link>
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
