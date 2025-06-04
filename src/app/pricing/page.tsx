import Link from 'next/link';
import { PageTitle } from '@/components/shared/PageTitle';
import { Section } from '@/components/shared/Section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { pricingPlansData, PricingPlan } from '@/data/pricing';
import { CheckCircle, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function PricingPage() {
  return (
    <>
      <PageTitle
        title="Transparent Pricing for Powerful AI Solutions"
        description="Choose the perfect plan to automate your business, enhance customer engagement, and drive growth. All our plans are designed to deliver maximum value and tangible results."
        className="pt-12 pb-8"
      />
      <Section className="pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlansData.map((plan: PricingPlan) => (
            <Card
              key={plan.id}
              className={cn(
                "flex flex-col h-full transition-all duration-300",
                plan.isPopular ? "border-primary shadow-2xl scale-105" : "hover:shadow-xl"
              )}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                    <Star className="h-3 w-3 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}
              <CardHeader className="pt-10"> {/* Added padding top for popular badge */}
                <CardTitle className="font-headline text-2xl text-center">{plan.name}</CardTitle>
                <div className="text-center mt-2">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  {plan.frequency && <span className="text-muted-foreground">{plan.frequency}</span>}
                </div>
                <CardDescription className="text-center h-12 mt-2">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3 mt-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild size="lg" className={cn("w-full font-headline", !plan.isPopular && "variant-outline")}>
                  <Link href={plan.ctaLink}>{plan.ctaText}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-headline font-semibold mb-4">Need a Custom Solution?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            If your requirements go beyond our standard plans, we're happy to create a tailored package just for you. Let's discuss your project in detail.
          </p>
          <Button asChild size="lg" variant="default">
            <Link href="/contact?custom=true" className="font-headline">Contact Us for a Custom Quote</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
