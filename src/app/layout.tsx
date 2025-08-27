import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Ai Automatrix',
  description: 'Your Modern AI Automation Solution',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-background overflow-x-hidden">
        {children}
        <Toaster />
        <script src="https://cdn.botpress.cloud/webchat/v3.2/inject.js"></script>
        <script src="https://files.bpcontent.cloud/2025/08/26/22/20250826221413-HL4C5ZIZ.js" defer></script>
      </body>
    </html>
  );
}
