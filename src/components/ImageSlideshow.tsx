
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ImageSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Your beautiful event photos
  const images = [
    "/lovable-uploads/036d44a8-1164-4e81-81da-cfe1967699ab.png",
    "/lovable-uploads/212329a7-4532-4b35-9e6f-42655cc24f39.png",
    "/lovable-uploads/d39985e2-833e-409e-8194-1390593a9c70.png",
    "/lovable-uploads/673c729f-a95a-483d-a99f-9b909889fcce.png",
    "/lovable-uploads/99e63587-b28e-4030-9d20-96350db01e03.png"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Elegant event setup ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white border-none shadow-lg"
      >
        <ChevronLeft className="h-6 w-6 text-amber-700" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white border-none shadow-lg"
      >
        <ChevronRight className="h-6 w-6 text-amber-700" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-amber-700 w-8" 
                : "bg-amber-300 hover:bg-amber-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlideshow;
