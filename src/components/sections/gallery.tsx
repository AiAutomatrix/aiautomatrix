import Image from 'next/image';
import { Card } from '@/components/ui/card';

const galleryItems = [
  {
    src: "https://placehold.co/600x400.png",
    hint: "web design",
    title: "E-commerce Platform",
    category: "Web Development",
  },
  {
    src: "https://placehold.co/600x800.png",
    hint: "mobile app",
    title: "Mobile Banking App",
    category: "UI/UX Design",
  },
  {
    src: "https://placehold.co/600x400.png",
    hint: "dashboard interface",
    title: "Data Analytics Dashboard",
    category: "Web Design",
  },
    {
    src: "https://placehold.co/600x800.png",
    hint: "restaurant website",
    title: "Restaurant Landing Page",
    category: "Web Design",
  },
  {
    src: "https://placehold.co/600x400.png",
    hint: "corporate branding",
    title: "Corporate Rebranding",
    category: "Branding",
  },
    {
    src: "https://placehold.co/600x400.png",
    hint: "marketing campaign",
    title: "Social Media Campaign",
    category: "Marketing",
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            Our <span className="text-gradient">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            A glimpse into the successful projects we've delivered for our clients.
          </p>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryItems.map((item, index) => (
            <div key={index} className="break-inside-avoid group">
              <Card className="overflow-hidden card-glass">
                <div className="relative overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={600}
                    height={item.src.includes('800') ? 800 : 400}
                    data-ai-hint={item.hint}
                    className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="font-headline text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-primary">{item.category}</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
