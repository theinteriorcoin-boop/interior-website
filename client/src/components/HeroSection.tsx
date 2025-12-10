import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

import emptyRoom from "@assets/generated_images/empty_modern_living_room.png";
import basicRoom from "@assets/generated_images/room_with_basic_sofa.png";
import furnishedRoom from "@assets/generated_images/room_with_more_furniture.png";
import luxuryRoom from "@assets/generated_images/luxury_furnished_living_room.png";

interface HeroSectionProps {
  onExploreClick?: () => void;
}

export default function HeroSection({ onExploreClick }: HeroSectionProps) {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const frames = [emptyRoom, basicRoom, furnishedRoom, luxuryRoom];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      const scrolled = Math.max(0, -rect.top);
      const scrollableHeight = containerHeight - viewportHeight;
      const progress = Math.min(1, Math.max(0, scrolled / scrollableHeight));
      
      setScrollProgress(progress);
      const frameIndex = Math.min(frames.length - 1, Math.floor(progress * frames.length));
      setCurrentFrame(frameIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [frames.length]);

  const scrollToContent = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      const element = document.querySelector("#services");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative h-[300vh]"
      data-testid="hero-section"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          {frames.map((frame, index) => (
            <img
              key={index}
              src={frame}
              alt={`Interior transformation frame ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                index === currentFrame ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <div
            className={`transition-all duration-700 ${
              scrollProgress > 0.1 ? "opacity-0 -translate-y-10" : "opacity-100"
            }`}
          >
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
          </div>

          <div
            className={`absolute left-1/2 -translate-x-1/2 transition-all duration-500 ${
              scrollProgress > 0.2 && scrollProgress < 0.8
                ? "bottom-1/2 translate-y-1/2 opacity-100"
                : "bottom-32 opacity-0"
            }`}
          >
            <div className="text-center">
              <p className="text-white text-xl lg:text-2xl font-display mb-2">
                {scrollProgress < 0.4
                  ? "Empty Space"
                  : scrollProgress < 0.6
                  ? "Adding Essentials"
                  : scrollProgress < 0.8
                  ? "Styling the Room"
                  : "Luxury Complete"}
              </p>
              <div className="w-48 h-1 bg-white/30 rounded-full overflow-hidden mx-auto">
                <div
                  className="h-full bg-primary transition-all duration-300 rounded-full"
                  style={{ width: `${scrollProgress * 100}%` }}
                />
              </div>
            </div>
          </div>

          <div
            className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-500 ${
              scrollProgress > 0.9 ? "opacity-100" : scrollProgress < 0.1 ? "opacity-100" : "opacity-0"
            }`}
          >
            <Button
              variant="outline"
              onClick={scrollToContent}
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              data-testid="button-explore"
            >
              <span className="mr-2">
                {scrollProgress > 0.9 ? "Explore Our Work" : "Scroll to Transform"}
              </span>
              <ChevronDown className="h-4 w-4 animate-bounce" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
