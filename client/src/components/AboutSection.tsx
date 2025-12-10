import { Award, Users, Calendar, Home } from "lucide-react";

import luxuryRoom from "@assets/generated_images/luxury_furnished_living_room.png";

const stats = [
  { icon: Calendar, value: "15+", label: "Years Experience" },
  { icon: Home, value: "500+", label: "Projects Completed" },
  { icon: Users, value: "350+", label: "Happy Clients" },
  { icon: Award, value: "25", label: "Design Awards" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-md overflow-hidden">
              <img
                src={luxuryRoom}
                alt="Our design philosophy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-md -z-10" />
          </div>

          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              About Us
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-semibold mb-6">
              Crafting <span className="text-primary">Luxury</span> Living Spaces
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
              <p>
                At The Interior.co.in, we believe that exceptional design goes beyond aesthetics. It's about creating spaces that resonate with your lifestyle, reflect your personality, and elevate your everyday experiences.
              </p>
              <p>
                Our team of award-winning designers combines artistic vision with meticulous attention to detail, ensuring every project we undertake becomes a masterpiece of form and function.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                  data-testid={`stat-${index}`}
                >
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-display text-2xl lg:text-3xl font-semibold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
