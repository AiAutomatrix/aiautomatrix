import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, HelpCircle } from "lucide-react";
import { pricingPlansData, PricingPlan } from "@/data/pricing";
import { Section } from "@/components/shared/Section";
import Link from "next/link";

export default function RequestSolutionPage() {
  return (
    <Section className="pb-16">
      <div className="container">
        <h1 className="text-3xl font-headline font-semibold text-foreground mb-8 text-center">
          Request a Custom AI Solution
        </h1>
        <p className="text-muted-foreground text-center mb-12">
          Explore our AI solution packages or request a personalized solution tailored to your specific needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlansData.map((plan: PricingPlan) => (
            <Card key={plan.id} className="bg-card shadow-xl rounded-lg overflow-hidden">
              <CardHeader className="p-6 border-b">
                <CardTitle className="text-2xl font-headline font-semibold text-foreground mb-2">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-foreground">{plan.features[0]}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-foreground">{plan.features[1]}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-foreground">{plan.features[2]}</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-foreground">{plan.features[3]}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-headline font-semibold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.frequency}</span>
                </div>
                <div className="flex justify-between items-center">
                  <a href={plan.ctaLink} className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 font-headline">
                    {plan.ctaText}
                  </a>
                  <a href="#" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
                    <HelpCircle className="h-4 w-4 mr-1" /> Learn More
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}

          <Card className="bg-card shadow-xl rounded-lg overflow-hidden border-2 border-primary">
            <CardHeader className="p-6 border-b">
              <CardTitle className="text-2xl font-headline font-semibold text-foreground mb-2">
                Custom AI Solution
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Tailored AI solutions to address your unique business challenges.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-foreground">In-depth consultation</span>
                </div>
                <div className="flex items-center mb-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-foreground">Customized AI model development</span>
                </div>
                <div className="flex items-center mb-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-foreground">Ongoing support and maintenance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-foreground">Scalable and secure infrastructure</span>
                </div>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xl font-headline font-semibold text-foreground">Custom Pricing</span>
                <span className="text-muted-foreground">Based on your needs</span>
              </div>
              <div className="flex justify-between items-center">
                <a href="/contact?custom=true" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 font-headline">
                  Request a Quote
                </a>
                <a href="#" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
                  <HelpCircle className="h-4 w-4 mr-1" /> Learn More
                </a>
              </div>
              <CardDescription className="text-xs pt-4 border-t">
                Note: This is an AI-generated preliminary proposal. For a detailed consultation and finalized quote, please <Link href="/contact" className="underline text-primary">contact us</Link>.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
