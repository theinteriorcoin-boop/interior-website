import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "The Interior.co.in transformed our house into a home. Their attention to detail and understanding of our lifestyle was exceptional. Every corner now tells our story.",
    author: "Priya Sharma",
    role: "Homeowner, Mumbai",
  },
  {
    quote: "Working with this team was an absolute pleasure. They brought our vision to life while adding touches we never knew we needed. Our living space is now our sanctuary.",
    author: "Rajesh Mehta",
    role: "Business Owner, Delhi",
  },
  {
    quote: "From the initial consultation to the final reveal, the professionalism and creativity were outstanding. Our home has become the talk of our neighborhood.",
    author: "Ananya Patel",
    role: "Interior Enthusiast, Bangalore",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-32 bg-muted/30" data-testid="testimonials-section">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Testimonials
          </p>
          <h2 className="font-display text-3xl lg:text-5xl font-semibold">
            What Our <span className="text-primary">Clients</span> Say
          </h2>
        </div>

        <div className="relative">
          <div className="text-center">
            <Quote className="h-12 w-12 text-primary/30 mx-auto mb-6" />
            
            <div className="min-h-[200px] flex items-center justify-center">
              <div
                key={currentIndex}
                className="animate-in fade-in duration-500"
              >
                <p className="font-display text-xl lg:text-2xl leading-relaxed text-foreground mb-8 italic">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div>
                  <p className="font-semibold text-lg">{testimonials[currentIndex].author}</p>
                  <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrev}
              data-testid="button-testimonial-prev"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                  data-testid={`button-testimonial-dot-${index}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              data-testid="button-testimonial-next"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
