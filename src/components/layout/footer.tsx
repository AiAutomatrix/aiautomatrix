import Link from 'next/link';
import { Sparkles, Github, Twitter, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-8 w-8 text-primary" />
              <span className="font-bold font-headline text-2xl">Ai Automatrix</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Modern solutions for modern businesses.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com/aiautomatrix" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Twitter /></a>
              <a href="https://www.linkedin.com/company/aiautomatrix" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin /></a>
              <a href="https://www.facebook.com/aiautomatrix" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Facebook /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ai Automatrix. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Built with 🚀 in Firebase Studio</p>
        </div>
      </div>
    </footer>
  );
}
