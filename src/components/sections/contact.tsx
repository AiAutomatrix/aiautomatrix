import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you.
          </p>
        </div>
        <Card className="card-glass p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-headline text-2xl font-bold mb-6">Send us a message</h3>
              <form className="space-y-4">
                <Input type="text" placeholder="Your Name" className="bg-background/50" />
                <Input type="email" placeholder="Your Email" className="bg-background/50" />
                <Textarea placeholder="Your Message" className="bg-background/50 min-h-[150px]" />
                <Button type="submit" className="w-full btn-gradient">Send Message</Button>
              </form>
            </div>
            <div className="space-y-6">
              <h3 className="font-headline text-2xl font-bold mb-6">Contact Information</h3>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-primary" />
                <p className="text-muted-foreground">123 Spark Street, Innovation City, 12345</p>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-primary" />
                <p className="text-muted-foreground">(123) 456-7890</p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-primary" />
                <p className="text-muted-foreground">hello@localspark.dev</p>
              </div>
              <div className="w-full h-64 rounded-lg overflow-hidden mt-6">
                 <iframe
                    className="w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201821.5034371191!2d-122.58334965371399!3d37.75769499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
