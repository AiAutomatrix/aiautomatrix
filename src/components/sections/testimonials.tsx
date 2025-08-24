"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Sarah L.",
    title: "CEO, Tech Innovators",
    avatar: "SL",
    image: "https://placehold.co/100x100.png",
    hint: "woman portrait",
    text: "Working with Ai Automatrix was a game-changer. Their attention to detail and creative vision resulted in a website that truly represents our brand. We've seen a significant increase in engagement since the launch.",
  },
  {
    name: "Mike D.",
    title: "Owner, The Corner Bistro",
    avatar: "MD",
    image: "https://placehold.co/100x100.png",
    hint: "man portrait",
    text: "The team at Ai Automatrix is phenomenal. They understood our needs as a small restaurant and delivered a beautiful, functional site that our customers love. Our online reservations have doubled!",
  },
  {
    name: "Jessica P.",
    title: "Founder, Creative Co.",
    avatar: "JP",
    image: "https://placehold.co/100x100.png",
    hint: "person smiling",
    text: "I'm so impressed with the professionalism and skill of Ai Automatrix. They were communicative, efficient, and brought our vision to life perfectly. I couldn't be happier with the final product.",
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Real stories from businesses we've helped succeed.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full card-glass p-6 flex flex-col justify-between">
                    <CardContent className="p-0">
                      <p className="text-muted-foreground italic mb-6">"{testimonial.text}"</p>
                      <div className="flex items-center">
                        <Avatar>
                          <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div className="ml-4">
                          <p className="font-bold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
