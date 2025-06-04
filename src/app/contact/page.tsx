import { PageTitle } from '@/components/shared/PageTitle';
import { Section } from '@/components/shared/Section';
import { ContactForm } from '@/components/forms/ContactForm';
import { Mail, Phone, MapPin, UserCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <PageTitle
        title="Get in Touch with Ai-Automatrix"
        description="We're excited to hear about your project or answer any questions you may have. Reach out to us using the form below or through our direct contact channels."
        className="pt-12 pb-8"
      />
      <Section className="pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-headline font-semibold text-foreground mb-4">Contact Information</h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start">
                  <UserCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Garret Friesen</h3>
                    <p>Founder & Owner</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a href="mailto:aiautomatrix@outlook.com" className="hover:text-primary">aiautomatrix@outlook.com</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <a href="tel:+14318003148" className="hover:text-primary">(431) 800-3148</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Location</h3>
                    <p>Winnipeg, Manitoba, Canada (Remote Services Worldwide)</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-headline font-semibold text-foreground mb-4">Office Hours</h2>
              <p className="text-muted-foreground">
                Monday - Friday: 9:00 AM - 5:00 PM (CST)
                <br />
                Weekends & Holidays: Closed (AI Bots available 24/7 for inquiries)
              </p>
            </div>
          </div>
          
          <div>
             <h2 className="text-2xl font-headline font-semibold text-foreground mb-4 text-center md:text-left">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
