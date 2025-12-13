import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import livingRoom from "@assets/generated_images/luxury_furnished_living_room.png";
import bedroom from "@assets/generated_images/luxury_bedroom_interior.png";
import kitchen from "@assets/generated_images/luxury_kitchen_interior.png";
import diningRoom from "@assets/generated_images/luxury_dining_room_interior.png";
import homeOffice from "@assets/generated_images/luxury_home_office_interior.png";
import basicRoom from "@assets/generated_images/room_with_more_furniture.png";

const portfolioItems = [
  {
    image: livingRoom,
    title: "Modern Living Room",
    category: "Residential",
    description: "A sophisticated living space featuring curated furniture and warm ambient lighting.",
  },
  {
    image: bedroom,
    title: "Serene Master Suite",
    category: "Residential",
    description: "Tranquil bedroom design with premium bedding and elegant accents.",
  },
  {
    image: kitchen,
    title: "Chef's Kitchen",
    category: "Residential",
    description: "Luxury kitchen with marble countertops and professional-grade appliances.",
  },
  {
    image: diningRoom,
    title: "Elegant Dining Room",
    category: "Residential",
    description: "Formal dining space designed for memorable gatherings and celebrations.",
  },
  {
    image: homeOffice,
    title: "Executive Home Office",
    category: "Residential",
    description: "Professional workspace that inspires productivity and creativity.",
  },
  {
    image: basicRoom,
    title: "Cozy Family Room",
    category: "Residential",
    description: "Comfortable family space designed for relaxation and togetherness.",
  },
];

export default function PortfolioSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const navigatePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? portfolioItems.length - 1 : selectedIndex - 1);
    }
  };

  const navigateNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === portfolioItems.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-muted/30" data-testid="portfolio-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Our Work
          </p>
          <h2 className="font-display text-3xl lg:text-5xl font-semibold mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our collection of luxury interior transformations that showcase our commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-md cursor-pointer"
              onClick={() => openLightbox(index)}
              data-testid={`card-portfolio-${index}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-primary text-sm mb-1">{item.category}</p>
                  <h3 className="text-white font-display text-xl">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={selectedIndex !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-background border-none">
          <DialogTitle className="sr-only">
            {selectedIndex !== null ? portfolioItems[selectedIndex].title : "Project Details"}
          </DialogTitle>
          {selectedIndex !== null && (
            <div className="relative">
              <img
                src={portfolioItems[selectedIndex].image}
                alt={portfolioItems[selectedIndex].title}
                className="w-full aspect-video object-cover"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white"
                onClick={closeLightbox}
                data-testid="button-close-lightbox"
              >
                <X className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                onClick={navigatePrev}
                data-testid="button-prev"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                onClick={navigateNext}
                data-testid="button-next"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
              <div className="p-6 bg-background">
                <p className="text-primary text-sm mb-1">
                  {portfolioItems[selectedIndex].category}
                </p>
                <h3 className="font-display text-2xl font-semibold mb-2">
                  {portfolioItems[selectedIndex].title}
                </h3>
                <p className="text-muted-foreground">
                  {portfolioItems[selectedIndex].description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
