import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

// ✅ Corrected relative paths
import emptyRoom from "../pages/hero-empty.png";
import basicRoom from "../pages/hero-mid.png";
import furnishedRoom from "../pages/hero-full.png";

interface HeroSectionProps {
  onExploreClick?: () => void;
}

export default function HeroSection({ onExploreClick }: HeroSectionProps) {
  const frames = [emptyRoom, basicRoom, furnishedRoom];
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frames.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const scrollToContent = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      const element = document.querySelector("#services");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden" data-testid="hero-section">
      <div className="absolute inset-0">
        {frames.map((frame, index) => (
          <img
            key={index}
            src={frame}
            alt={`Frame ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentFrame ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <p className="text-white/80 text-sm lg:text-base tracking-[0.3em] uppercase mb-4">
          Luxury Interior Design
        </p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl xl:text-8xl text-white font-semibold leading-tight mb-6">
          Transform Your
          <br />
          <span className="text-primary">Living Space</span>
        </h1>
        <p className="text-white/70 text-lg lg:text-xl max-w-2xl mx-auto mb-8">
          Watch as we bring your empty room to life with curated luxury furnishings and elegant decor
        </p>
        <Button
          variant="outline"
          onClick={scrollToContent}
          className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
          data-testid="button-explore"
        >
          <span className="mr-2">Explore Our Work</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </Button>
      </div>
    </div>
  );
}
