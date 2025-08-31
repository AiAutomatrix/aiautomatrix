
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle, Bot, ScanSearch, Rocket } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: 'Pricing & Packages | Ai Automatrix',
  description: 'Explore our pricing packages for custom AI agents and find the right fit for your business needs.',
};

const customerServiceScripts = `
  <html>
    <head>
      <style>
        html, body {
          height: 100%;
          width: 100%;
          margin: 0;
          padding: 0;
          overflow: hidden;
        }
      </style>
    </head>
    <body>
      <script src="https://cdn.botpress.cloud/webchat/v3.2/inject.js"><\/script>
      <script src="https://files.bpcontent.cloud/2025/08/26/22/20250826221413-HL4C5ZIZ.js" defer><\/script>
    </body>
  </html>
`;

const ecommerceScripts = `
  <html>
    <head>
      <style>
        html, body {
          height: 100%;
          width: 100%;
          margin: 0;
          padding: 0;
          overflow: hidden;
        }
      </style>
    </head>
    <body>
      <script src="https://cdn.botpress.cloud/webchat/v3.2/inject.js"><\/script>
      <script src="https://files.bpcontent.cloud/2025/08/30/16/20250830162418-UY2C9Y08.js" defer><\/script>
    </body>
  </html>
`;

const packages = [
    {
        name: "Basic Website Agent",
        price: "$1,200",
        monthly: "$200/mo",
        description: "For small businesses looking to automate basic customer service.",
        features: [
            "FAQ & customer service bot",
            "Website scraping for knowledge base",
            "Contact form handling"
        ],
        popular: false,
    },
    {
        name: "Standard Workflow Agent",
        price: "$2,500",
        monthly: "$400/mo",
        description: "For businesses needing structured workflows and moderate automation.",
        features: [
            "Multi-step workflows (lead capture, booking)",
            "CRM/email integration",
            "Analytics dashboard"
        ],
        popular: true,
    },
    {
        name: "Advanced API-Integrated Agent",
        price: "$5,000",
        monthly: "$750/mo",
        description: "For businesses requiring full automation with external systems.",
        features: [
            "Multi-agent system (sales, support, etc.)",
            "API calls to external services",
            "Dynamic personalization"
        ],
        popular: false,
    }
];

const addOns = [
    "Additional Workflow Tools",
    "API Tool Integrations",
    "Multi-Agent Expansions",
    "Custom NLP Training",
    "Content Generation & Optimization",
    "Advanced Analytics & Reporting"
];

const howItWorksSteps = [
  {
    icon: <ScanSearch className="h-10 w-10 text-primary" />,
    title: '1. We Scrape Your Website',
    description: "We analyze your website's content and structure to understand your business.",
  },
  {
    icon: <Bot className="h-10 w-10 text-accent" />,
    title: '2. We Build Your Custom Agent',
    description: 'We build and train a custom AI agent to answer questions and capture leads.',
  },
  {
    icon: <Rocket className="h-10 w-10 text-primary" />,
    title: '3. We Put It Live',
    description: 'We provide a single line of code to embed the agent on your website.',
  },
];


export default function PricingPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="py-20 md:py-32 text-center bg-secondary/20">
                    <div className="container mx-auto px-4">
                        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                            Powerful AI Agents for <span className="text-gradient">Any Budget</span>
                        </h1>
                        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
                            From simple FAQ bots to complex, multi-system automations, we have a solution that fits your needs.
                        </p>
                         <Link href="/#contact">
                            <Button size="lg" className="btn-gradient">
                                Get a Custom Quote
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </section>

                {/* How It Works Section */}
                <section id="how-it-works" className="py-20 md:py-24">
                  <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                      <h2 className="font-headline text-3xl md:text-4xl font-bold">
                        Live on Your Site in 3 Simple Steps
                      </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {howItWorksSteps.map((step, index) => (
                        <Card key={index} className="card-glass p-6 text-center border-0">
                          <CardHeader className="flex flex-col items-center">
                            {step.icon}
                            <CardTitle className="font-headline text-2xl font-bold mt-4">{step.title}</CardTitle>
                          </CardHeader>
                          <CardDescription className="text-muted-foreground">
                            {step.description}
                          </CardDescription>
                        </Card>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Pricing Packages Section */}
                <section className="py-20 md:py-24 bg-secondary/20">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="font-headline text-3xl md:text-4xl font-bold">Core Agent Packages</h2>
                            <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
                                Choose the foundation for your AI automation strategy.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                            {packages.map((pkg) => (
                                <Card key={pkg.name} className={`card-glass flex flex-col ${pkg.popular ? 'border-primary shadow-lg shadow-primary/20' : ''}`}>
                                    {pkg.popular && (
                                        <div className="text-center py-1 bg-primary text-primary-foreground font-bold text-sm rounded-t-lg">
                                            Most Popular
                                        </div>
                                    )}
                                    <CardHeader className="text-center">
                                        <CardTitle className="font-headline text-2xl">{pkg.name}</CardTitle>
                                        <p className="text-muted-foreground">{pkg.description}</p>
                                    </CardHeader>
                                    <CardContent className="flex flex-col flex-grow">
                                        <div className="text-center mb-6">
                                            <span className="text-4xl font-bold">{pkg.price}</span>
                                            <span className="text-muted-foreground"> one-time setup</span>
                                        </div>
                                        <div className="text-center mb-6">
                                            <span className="text-2xl font-bold">{pkg.monthly}</span>
                                            <span className="text-muted-foreground"> retainer</span>
                                        </div>
                                        <ul className="space-y-3 mb-8 flex-grow">
                                            {pkg.features.map((feature) => (
                                                <li key={feature} className="flex items-center">
                                                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                                                    <span className="text-muted-foreground">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Link href="/#contact" className="w-full mt-auto">
                                            <Button className={`w-full ${pkg.popular ? 'btn-gradient' : ''}`} variant={pkg.popular ? 'default' : 'outline'}>
                                                Get Started
                                            </Button>
                                        </Link>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Add-Ons Section */}
                <section className="py-20 md:py-24">
                     <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="font-headline text-3xl md:text-4xl font-bold">Agent & Workflow <span className="text-gradient">Add-Ons</span></h2>
                            <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
                                Enhance your agent with powerful new capabilities as your business grows.
                            </p>
                        </div>
                        <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                            {addOns.map((addOn) => (
                                <Card key={addOn} className="card-glass p-4">
                                    <p className="font-semibold">{addOn}</p>
                                </Card>
                            ))}
                        </div>
                         <div className="text-center mt-12">
                             <Link href="/#contact">
                                <Button variant="link">Build your custom quote <ArrowRight className="ml-2 h-4 w-4" /></Button>
                            </Link>
                         </div>
                    </div>
                </section>
                
                {/* Live Demo Section */}
                <section className="py-20 md:py-24 bg-secondary/20">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="font-headline text-3xl md:text-4xl font-bold">See Our Agents <span className="text-gradient">in Action</span></h2>
                            <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
                                Interact with our live demos to experience the power of AI-driven conversation firsthand.
                            </p>
                        </div>
                        <Tabs defaultValue="customer-service" className="w-full max-w-4xl mx-auto">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="customer-service">Customer Service Bot</TabsTrigger>
                                <TabsTrigger value="ecommerce">E-commerce Assistant</TabsTrigger>
                            </TabsList>
                            <TabsContent value="customer-service">
                                <Card className="card-glass p-2 mt-4">
                                    <div className="rounded-lg overflow-hidden border border-border/20">
                                        <iframe
                                            srcDoc={customerServiceScripts}
                                            className="w-full h-[600px] md:h-[700px] border-0 rounded-md"
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
                                            className="w-full h-[600px] md:h-[700px] border-0 rounded-md"
                                            title="E-commerce Demo"
                                        ></iframe>
                                    </div>
                                </Card>
                            </TabsContent>
                        </Tabs>
                         <div className="text-center mt-12">
                             <Link href="/bot-demos">
                                <Button variant="outline">
                                  View All Demos
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                         </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
