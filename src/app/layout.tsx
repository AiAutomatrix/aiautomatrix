import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { AppProviders } from '@/components/AppProviders';


export const metadata: Metadata = {
  title: 'Ai-Automatrix | Custom AI Solutions',
  description: 'Crafting intelligent websites, bots, and AI backends to automate and elevate your business.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <AppProviders>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <Toaster />
        </AppProviders>
        
      
      <script src="https://cdn.botpress.cloud/webchat/v3.0/inject.js" defer></script>
      <script src="https://files.bpcontent.cloud/2025/06/24/23/20250624233433-30VR2IP1.js" defer></script>
    
      
      </body>
    </html>
  );
}