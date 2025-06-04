import Link from 'next/link';
import { Mail, Phone, UserCircle, BotMessageSquare } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <BotMessageSquare className="h-8 w-8 text-primary" />
              <span className="text-2xl font-headline font-bold text-primary">Ai-Automatrix</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Crafting intelligent websites, bots, and AI backends to automate and elevate your business.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-headline font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="text-muted-foreground hover:text-primary">Services</Link></li>
              <li><Link href="/portfolio" className="text-muted-foreground hover:text-primary">Portfolio</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-headline font-semibold text-foreground mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <UserCircle className="h-5 w-5 text-primary" />
                <span>Garret Friesen (Founder & Owner)</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:aiautomatrix@outlook.com" className="text-muted-foreground hover:text-primary">aiautomatrix@outlook.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+14318003148" className="text-muted-foreground hover:text-primary">(431) 800-3148</a>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground mt-4">
              {/* Placeholder for Botpress Webchat info or integration point */}
              Need help? Our AI Chatbot is available 24/7.
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Ai-Automatrix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
