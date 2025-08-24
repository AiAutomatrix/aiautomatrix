import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brush, Code, Megaphone, Search } from 'lucide-react';

const services = [
  {
    icon: <Brush className="h-10 w-10 text-primary" />,
    title: 'Web Design',
    description: 'Stunning, custom designs that capture your brand and engage your audience from the first click.',
  },
  {
    icon: <Code className="h-10 w-10 text-accent" />,
    title: 'Web Development',
    description: 'Fast, responsive, and scalable websites built with the latest technologies for optimal performance.',
  },
  {
    icon: <Search className="h-10 w-10 text-primary" />,
    title: 'SEO Optimization',
    description: 'Boost your visibility on search engines and attract more organic traffic with our expert SEO strategies.',
  },
  {
    icon: <Megaphone className="h-10 w-10 text-accent" />,
    title: 'Digital Marketing',
    description: 'Comprehensive marketing campaigns to grow your online presence and connect with your customers.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            We provide everything you need to succeed online, from design to deployment and beyond.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-glass text-center p-6 transform transition-transform duration-300 hover:-translate-y-2">
              <CardHeader className="flex justify-center items-center">
                {service.icon}
              </CardHeader>
              <CardContent>
                <h3 className="font-headline text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
