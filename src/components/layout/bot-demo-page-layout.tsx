import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

interface BotDemoPageLayoutProps {
  title: React.ReactNode;
  subtitle: string;
  description: string;
  examplePrompts: string[];
  webchatComponent?: React.ReactNode;
  iframeSrc?: string;
  iframeSrcDoc?: string;
}

export default function BotDemoPageLayout({ title, subtitle, description, examplePrompts, iframeSrc, webchatComponent, iframeSrcDoc }: BotDemoPageLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-3">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            {subtitle}
          </p>
        </div>

        {/* Description Section */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-muted-foreground mb-4">
            {description}
          </p>
          <p className="text-sm text-primary italic">
            Try asking: {examplePrompts.map((prompt, index) => (
              <span key={index}>"{prompt}"{index < examplePrompts.length - 1 && ' or '}</span>
            ))}
          </p>
        </div>

        {/* Webchat Demo Section */}
        <div className="mb-12">
          <p className="text-center font-semibold text-muted-foreground mb-4">Live Demo – Chat with the Agent</p>
          <div className="rounded-lg shadow-2xl overflow-hidden border border-border/20 card-glass p-2">
            {webchatComponent ? (
              webchatComponent
            ) : (
              <iframe
                src={iframeSrc}
                srcDoc={iframeSrcDoc}
                className="w-full h-[600px] md:h-[700px] border-0 rounded-md"
                title={title?.toString()}
              ></iframe>
            )}
          </div>
        </div>

        {/* Footer Section */}
        <div className="text-center">
            <p className="mb-4 text-muted-foreground">Want an agent like this on your site? Contact us to build your own.</p>
            <div className="flex justify-center gap-4">
              <Link href="/#contact">
                <Button className="btn-gradient">Get a Custom Quote</Button>
              </Link>
              <Link href="/bot-demos">
                  <Button variant="outline" className="group">
                      <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                      Back to Demo Hub
                  </Button>
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
}
