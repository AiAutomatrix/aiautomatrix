
"use client";

import React, { useEffect, useMemo, useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Bot,
  ScanSearch,
  Rocket,
  Star,
  Clock,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ParticleWave from "@/components/sections/particle-wave";

/* ----------------------------- Existing script snippets kept -----------------------------*/
const customerServiceScripts = `

  <html>
    <head>
      <script src="https://cdn.botpress.cloud/webchat/v3.2/inject.js"><\/script>
      <style>
        html, body, #webchat, #webchat .bpWebchat {
          position: unset !important;
          width: 100% !important;
          height: 100% !important;
          max-height: 100% !important;
          max-width: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
          overflow: hidden !important;
        }
        #webchat .bp-widget-widget {
            display: none !important;
        }
      </style>
    </head>
    <body>
      <script src="https://files.bpcontent.cloud/2025/08/26/22/20250826221413-HL4C5ZIZ.js" defer><\/script>
      <script>
        window.addEventListener('load', function() {
            if(window.botpress){
                window.botpress.on("webchat:ready", () => {
                  window.botpress.open();
                });
            }
        });
      <\/script>
    </body>
  </html>
`;
const ecommerceScripts = `
  <html>
    <head>
      <script src="https://cdn.botpress.cloud/webchat/v3.2/inject.js"><\/script>
      <style>
        html, body, #webchat, #webchat .bpWebchat {
          position: unset !important;
          width: 100% !important;
          height: 100% !important;
          max-height: 100% !important;
          max-width: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
          overflow: hidden !important;
        }
         #webchat .bp-widget-widget {
            display: none !important;
        }
      </style>
    </head>
    <body>
       <script src="https://files.bpcontent.cloud/2025/08/30/16/20250830162418-UY2C9Y08.js" defer><\/script>
       <script>
        window.addEventListener('load', function() {
          if(window.botpress){
             window.botpress.on("webchat:ready", () => {
                window.botpress.open();
            });
          }
        });
      <\/script>
    </body>
  </html>
`;
/* ----------------------------- Packages + Add-ons (kept) -----------------------------*/ const packages = [
  {
    name: "Basic Website Agent",
    price: "$1,200",
    monthly: "$200/mo",
    description:
      "For small businesses looking to automate basic customer service.",
    features: [
      "FAQ & customer service bot",
      "Website scraping for knowledge base",
      "Contact form handling",
    ],
    popular: false,
  },
  {
    name: "Standard Workflow Agent",
    price: "$2,500",
    monthly: "$400/mo",
    description:
      "For businesses needing structured workflows and moderate automation.",
    features: [
      "Multi-step workflows (lead capture, booking)",
      "CRM/email integration",
      "Analytics dashboard",
    ],
    popular: true,
  },
  {
    name: "Advanced API-Integrated Agent",
    price: "$5,000",
    monthly: "$750/mo",
    description:
      "For businesses requiring full automation with external systems.",
    features: [
      "Multi-agent system (sales, support, etc.)",
      "API calls to external services",
      "Dynamic personalization",
    ],
    popular: false,
  },
];

const addOns = [
  "Additional Workflow Tools",
  "API Tool Integrations",
  "Multi-Agent Expansions",
  "Custom NLP Training",
  "Content Generation & Optimization",
  "Advanced Analytics & Reporting",
];

/* ----------------------------- How it works steps (kept) -----------------------------*/ const howItWorksSteps =
  [
    {
      icon: <ScanSearch className="h-10 w-10 text-primary" />,
      title: "1. We Scrape Your Website",
      description:
        "We analyze your website's content and structure to understand your business.",
    },
    {
      icon: <Bot className="h-10 w-10 text-accent" />,
      title: "2. We Build Your Custom Agent",
      description:
        "We build and train a custom AI agent to answer questions and capture leads.",
    },
    {
      icon: <Rocket className="h-10 w-10 text-primary" />,
      title: "3. We Put It Live",
      description:
        "We provide a single line of code to embed the agent on your website.",
    },
  ];

/* ----------------------------- New: Pain points / bottlenecks list -----------------------------*/ const commonBottlenecks =
  [
    {
      problem: "Missed leads & slow response times",
      impact:
        "Visitors leave if they don’t get answers quickly — lost revenue and missed marketing ROI.",
      solution:
        "24/7 lead capture + instant responses, so no opportunity slips through the cracks.",
    },
    {
      problem: "Support overload & high staffing costs",
      impact:
        "Human teams spend hours answering repetitive questions instead of high-value work.",
      solution:
        "Automate common requests and workflows so staff focus on revenue-driving tasks.",
    },
    {
      problem: "Fragmented systems & manual handoffs",
      impact:
        "Orders, tickets, and data live in separate systems — slow, error-prone workflows.",
      solution:
        "Agents integrate with your CRM, e‑commerce, and APIs to orchestrate the full flow.",
    },
    {
      problem: "Inconsistent knowledge and training",
      impact:
        "Outdated FAQs and inconsistent answers harm trust and conversions.",
      solution:
        "We scrape and centralize your content into a single knowledge base that updates the agent.",
    },
    {
      problem: "Scaling support during peak seasons",
      impact:
        "Scaling hiring is expensive and slow — you need fast elastic support.",
      solution: "Agents scale instantly and cheaply when traffic spikes.",
    },
    {
      problem: "Poor lead qualification",
      impact:
        "Sales teams waste time on low-value leads and miss high-intent visitors.",
      solution:
        "Custom qualification flows pass pre-vetted leads with context to your CRM.",
    },
  ];

/* ----------------------------- Testimonials (sample placeholders) -----------------------------*/ const testimonials =
  [
    {
      quote:
        "Ai Automatrix replaced our 3-person support team on routine tickets — our CSAT actually improved.",
      name: "Maya R.",
      role: "Head of Customer Success, BrightCart",
      stars: 5,
    },
    {
      quote:
        "We cut lead friction by 60% after adding a Standard Workflow Agent — bookings doubled.",
      name: "Ethan P.",
      role: "Growth Lead, StudioNine",
      stars: 5,
    },
  ];

/* ----------------------------- FAQ content -----------------------------*/ const faq =
  [
    {
      q: "How long does setup take?",
      a: "Most Basic Agents are live within 5–7 business days. API-integrated or multi-agent projects typically take 2–4 weeks depending on complexity.",
    },
    {
      q: "Do you keep our data private?",
      a: "Yes. We follow strict data-handling procedures and can deploy agents in your cloud if you require isolation.",
    },
    {
      q: "Can the agent integrate with my CRM?",
      a: "Absolutely — we’ve integrated with common CRMs, e-commerce platforms, and can build custom API connectors.",
    },
    {
      q: "What if I need changes after launch?",
      a: "Monthly retainers include iterative improvements — or you can buy blocks of engineering time.",
    },
  ];

/* ----------------------------- Small — reusable UI helpers -----------------------------*/
function Stat({
  children,
  subtitle,
}: {
  children: React.ReactNode;
  subtitle: string;
}) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold">{children}</div>
      <div className="text-sm text-muted-foreground mt-1">{subtitle}</div>
    </div>
  );
}

/* ----------------------------- Main component -----------------------------*/
export default function PricingPage() {
  // FOMO: seats remaining + countdown end
  const [seatsLeft, setSeatsLeft] = useState<number>(6);
  const promoExpiry = useMemo(
    () => new Date(Date.now() + 1000 * 60 * 60 * 24 * 3),
    []
  ); // 3 days
  const [timeLeft, setTimeLeft] = useState<string>("");

  // Recent signups ticker (mocked)
  const [recent, setRecent] = useState<string[]>([
    "BrightCart — Customer Success",
    "StudioNine — Growth",
    "MapleFoods — Support Automation",
  ]);

  // ROI calculator
  const [leadsPerDay, setLeadsPerDay] = useState<number>(12);
  const [closeRate, setCloseRate] = useState<number>(8);
  const [avgOrder, setAvgOrder] = useState<number>(150);

  useEffect(() => {
    // countdown
    const t = setInterval(() => {
      const diff = promoExpiry.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft("Offer ended");
        clearInterval(t);
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      setTimeLeft(`${days}d ${hours}h ${mins}m`);
    }, 1000 * 30);

    // occasionally decrement seats to create urgency (simulated)
    const s = setInterval(() => {
      setSeatsLeft((prev) => (prev > 2 && Math.random() > 0.7 ? prev - 1 : prev));
      // rotate recent signups
      setRecent((r) => ["NewCo — Product", ...r.slice(0, 2)]);
    }, 1000 * 20);

    return () => {
      clearInterval(t);
      clearInterval(s);
    };
  }, [promoExpiry]);

  const monthlyRevenueEstimate = Math.round(
    (leadsPerDay * 30 * (closeRate / 100) * avgOrder) || 0
  );

  /* JSON-LD: Products + FAQ (SEO-ready) */ const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      ...packages.map((p) => ({
        "@type": "Product",
        name: p.name,
        description: p.description,
        brand: {
          "@type": "Organization",
          name: "Ai Automatrix",
        },
        offers: {
          "@type": "Offer",
          price: p.price.replace(/[^0-9.]/g, ""),
          priceCurrency: "USD",
        },
      })),
      {
        "@type": "FAQPage",
        mainEntity: faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* FOMO top bar */}
      <div className="w-full bg-gradient-to-r from-primary/90 to-accent/80 text-white">
        <div className="container mx-auto px-4 flex items-center justify-between py-2">
          <div className="flex items-center gap-4 text-sm">
            <Star className="h-4 w-4" />
            <strong>{seatsLeft} early-adopter seats left</strong>
            <span className="hidden md:inline-block">
              — Lock a setup discount before it ends
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-xs">
              Promo ends in <strong>{timeLeft}</strong>
            </div>
            <Link href="#contact">
              <Button size="sm" className="btn-compact btn-inverse">
                Claim seat
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative overflow-hidden pt-12 pb-20 md:pt-24 md:pb-28 bg-cover bg-center"
          style={{ backgroundImage: "url('/pricehero.png')" }}
        >
          <div className="absolute inset-0 bg-black/65 z-10"></div>
          <ParticleWave />
          <div className="relative z-20 container mx-auto px-4 text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-white">
              Powerful AI Agents for{" "}
              <span className="text-gradient">Any Budget</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-200 mb-6">
              From FAQ bots to multi-system automations — ship fast, capture
              every lead, and reduce support costs.
            </p>

            <div className="flex items-center justify-center gap-4">
              <Link href="/#contact">
                <Button size="lg" className="btn-gradient">
                  Get a Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/bot-demos">
                <Button size="lg" variant="outline">
                  Try a Demo
                </Button>
              </Link>
            </div>

            {/* Quick stats */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <Card className="card-glass p-4">
                <Stat subtitle="Avg setup time">5–7 days</Stat>
              </Card>
              <Card className="card-glass p-4">
                <Stat subtitle="Avg lead capture increase">+45%</Stat>
              </Card>
              <Card className="card-glass p-4">
                <Stat subtitle="Support cost saved">Up to 70%</Stat>
              </Card>
              <Card className="card-glass p-4">
                <Stat subtitle="Early-adopter seats left">{seatsLeft}</Stat>
              </Card>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">
                The Problems We Solve
              </h2>
              <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
                Built only with integrations and automations Botpress can do —
                we remove the blockers that slow growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {commonBottlenecks.map((b) => (
                <Card key={b.problem} className="card-glass p-6">
                  <CardHeader className="flex items-center gap-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                    <CardTitle className="font-headline text-xl font-bold">
                      {b.problem}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{b.impact}</p>
                    <div className="font-semibold">Our fix</div>
                    <p className="text-muted-foreground">{b.solution}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 md:py-24 bg-secondary/6">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">
                Live on Your Site in 3 Simple Steps
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {howItWorksSteps.map((step, index) => (
                <Card
                  key={index}
                  className="card-glass p-6 text-center border-0"
                >
                  <CardHeader className="flex flex-col items-center">
                    {step.icon}
                    <CardTitle className="font-headline text-2xl font-bold mt-4">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardDescription className="text-muted-foreground">
                    {step.description}
                  </CardDescription>
                </Card>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="card-glass p-6">
                <CardTitle className="font-headline text-xl">
                  Guaranteed Onboarding
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  We launch or we fix it — every plan includes a post-launch
                  verification period.
                </CardDescription>
              </Card>
              <Card className="card-glass p-6">
                <CardTitle className="font-headline text-xl">
                  Single-line Embed
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  One script to add to your site; we handle the rest.
                </CardDescription>
              </Card>
              <Card className="card-glass p-6">
                <CardTitle className="font-headline text-xl">
                  Owner-Controlled Data
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Deploy hosted with us or in your cloud for max control and
                  compliance.
                </CardDescription>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Packages Section */}
        <section className="py-20 md:py-24 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">
                Core Agent Packages
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
                Choose the foundation for your AI automation strategy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {packages.map((pkg) => (
                <Card
                  key={pkg.name}
                  className={`card-glass flex flex-col ${
                    pkg.popular
                      ? "border-primary shadow-lg shadow-primary/20"
                      : ""
                  }`}
                >
                  {pkg.popular && (
                    <div className="text-center py-1 bg-primary text-primary-foreground font-bold text-sm rounded-t-lg">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="font-headline text-2xl">
                      {pkg.name}
                    </CardTitle>
                    <p className="text-muted-foreground">{pkg.description}</p>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <div className="text-center mb-4">
                      <span className="text-4xl font-bold">{pkg.price}</span>
                      <span className="text-muted-foreground">
                        {" "}
                        one-time setup
                      </span>
                    </div>
                    <div className="text-center mb-4">
                      <span className="text-2xl font-bold">{pkg.monthly}</span>
                      <span className="text-muted-foreground"> retainer</span>
                    </div>
                    <ul className="space-y-3 mb-6 flex-grow">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-primary mr-3" />
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mb-4">
                      <div className="text-sm text-muted-foreground">
                        What this solves
                      </div>
                      <ul className="mt-2 text-sm text-muted-foreground list-disc list-inside">
                        <li>Reduce repetitive tickets and save staff hours</li>
                        <li>Capture leads 24/7 and pass context to sales</li>
                        <li>Improve response consistency and conversions</li>
                      </ul>
                    </div>

                    <Link href="/#contact" className="w-full mt-auto">
                      <Button
                        className={`w-full ${
                          pkg.popular ? "btn-gradient" : ""
                        }`}
                        variant={pkg.popular ? "default" : "outline"}
                      >
                        Get Started
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Add-ons CTA */}
            <div className="text-center mt-10">
              <p className="text-muted-foreground">
                Add-ons help you scale features as you grow.
              </p>
              <div className="mt-4 flex items-center justify-center gap-3">
                {addOns.slice(0, 3).map((a) => (
                  <div
                    key={a}
                    className="px-3 py-2 rounded bg-muted/10 text-sm"
                  >
                    {a}
                  </div>
                ))}
                <Link href="/#contact">
                  <Button variant="ghost" className="ml-2">
                    Request full add-on list
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ROI + Testimonials + Live Demo */}
        <section className="py-20 md:py-24">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card-glass p-6">
              <h3 className="font-headline text-2xl font-bold mb-4">
                Quick ROI Calculator
              </h3>
              <p className="text-muted-foreground mb-4">
                Estimate monthly revenue unlocked by capturing and qualifying
                more leads.
              </p>

              <div className="grid grid-cols-1 gap-3">
                <label className="text-sm">Leads per day</label>
                <input
                  type="range"
                  min={0}
                  max={200}
                  value={leadsPerDay}
                  onChange={(e) => setLeadsPerDay(Number(e.target.value))}
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>0</span>
                  <span>200</span>
                </div>

                <label className="text-sm">Close rate (%)</label>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={closeRate}
                  onChange={(e) => setCloseRate(Number(e.target.value))}
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>0%</span>
                  <span>100%</span>
                </div>

                <label className="text-sm">Average order value ($)</label>
                <input
                  type="range"
                  min={10}
                  max={5000}
                  value={avgOrder}
                  onChange={(e) => setAvgOrder(Number(e.target.value))}
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>$10</span>
                  <span>$5,000</span>
                </div>

                <div className="mt-4 p-4 rounded bg-secondary/10">
                  <div className="text-sm">
                    Estimated monthly revenue from captured leads
                  </div>
                  <div className="text-2xl font-bold mt-1">
                    ${monthlyRevenueEstimate.toLocaleString()}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    (based on {leadsPerDay} leads/day • {closeRate}% close • $
                    {avgOrder} AOV)
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <Link href="/#contact">
                    <Button className="w-full btn-gradient">
                      Book Setup Slot
                    </Button>
                  </Link>
                  <Link href="/bot-demos">
                    <Button className="w-full" variant="outline">
                      Try Demos
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-6">
                <h3 className="font-headline text-2xl font-bold">
                  What Clients Say
                </h3>
                <p className="text-muted-foreground">
                  Short, outcome-focused testimonials from early adopters.
                </p>
              </div>

              <div className="space-y-4">
                {testimonials.map((t, i) => (
                  <Card key={i} className="card-glass p-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="font-semibold">
                            {t.name}{" "}
                            <span className="text-muted-foreground text-sm">
                              • {t.role}
                            </span>
                          </div>
                          <div className="flex items-center gap-1 text-yellow-400">
                            {Array.from({ length: t.stars }).map((_, idx) => (
                              <Star key={idx} className="h-4 w-4" />
                            ))}
                          </div>
                        </div>
                        <p className="text-muted-foreground mt-2">“{t.quote}”</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Live Demos (tabs) */}
              <div className="mt-8">
                <h4 className="font-headline text-lg font-bold mb-3">
                  Live Demos
                </h4>
                <Tabs defaultValue="customer-service" className="w-full max-w-sm">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="customer-service">
                      Customer Service Bot
                    </TabsTrigger>
                    <TabsTrigger value="ecommerce">
                      E-commerce Assistant
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="customer-service">
                    <Card className="card-glass p-2 mt-4">
                      <div className="rounded-lg overflow-hidden border border-border/20">
                        <iframe
                          srcDoc={customerServiceScripts}
                          className="w-full h-[420px] border-0 rounded-md"
                          title="Customer Service Demo"
                        ></iframe>
                      </div>
                    </Card>
                  </TabsContent>
                  <TabsContent value="ecommerce">
                    <Card className="card-glass p-2 mt-4">
                      <div className="rounded-lg overflow-hidden border border-border/20">
                        <iframe
                          srcDoc={ecommerceScripts}
                          className="w-full h-[420px] border-0 rounded-md"
                          title="E-commerce Demo"
                        ></iframe>
                      </div>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-24 bg-secondary/6">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {faq.map((f, i) => (
                <details key={i} className="card-glass p-4" open={i === 0}>
                  <summary className="font-semibold cursor-pointer">
                    {f.q}
                  </summary>
                  <div className="mt-2 text-muted-foreground">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA / Guarantee */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h3 className="font-headline text-3xl font-bold">
              Ready to remove the friction?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-3">
              Book a free consult and claim an early-adopter seat. We’ll map
              your current bottlenecks and return a prioritized plan.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Link href="/#contact">
                <Button size="lg" className="btn-gradient">
                  Book your consult
                </Button>
              </Link>
              <Link href="/bot-demos">
                <Button size="lg" variant="outline">
                  Try a demo
                </Button>
              </Link>
            </div>
            <div className="mt-6 text-sm text-muted-foreground">
              All plans include a 14-day risk-free trial on retainer services.
              Cancel anytime.
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* JSON-LD: injected for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
