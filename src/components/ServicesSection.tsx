import { Card, CardContent } from "@/components/ui/card";
import { Palette, Sofa, Lightbulb, Ruler, Sparkles, Home } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Color Consultation",
    description: "Expert color schemes that transform the mood and ambiance of your living spaces.",
  },
  {
    icon: Sofa,
    title: "Furniture Selection",
    description: "Curated furniture pieces from premium brands that blend comfort with elegance.",
  },
  {
    icon: Lightbulb,
    title: "Lighting Design",
    description: "Strategic lighting solutions that enhance architectural features and create atmosphere.",
  },
  {
    icon: Ruler,
    title: "Space Planning",
    description: "Optimized layouts that maximize flow, functionality, and visual harmony.",
  },
  {
    icon: Sparkles,
    title: "Decor Styling",
    description: "Finishing touches with art, textiles, and accessories that tell your story.",
  },
  {
    icon: Home,
    title: "Complete Renovation",
    description: "End-to-end transformation from concept to completion with project management.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            What We Offer
          </p>
          <h2 className="font-display text-3xl lg:text-5xl font-semibold mb-6">
            Our Design <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From concept to completion, we offer comprehensive interior design services tailored to your unique vision and lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover-elevate cursor-pointer transition-all duration-300"
              data-testid={`card-service-${index}`}
            >
              <CardContent className="p-8 lg:p-10">
                <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
