
import { useState, useEffect } from "react";

const MenDressCodeSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    "/lovable-uploads/bd06e145-7f75-4725-b3bb-f9ecb036a158.png",
    "/lovable-uploads/fea48574-2606-43af-ba31-1390573f8f82.png",
    "/lovable-uploads/53421559-723f-4857-864f-eafa1e03ed80.png",
    "/lovable-uploads/be99fd4b-d609-4787-8716-c51b4f176154.png",
    "/lovable-uploads/a5f165d6-3656-4fc8-b6f9-3518f9f0129f.png",
    "/lovable-uploads/1c524155-f3ad-4abf-95b3-f1dd90b7983e.png"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Men's dress code inspiration ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-white w-6" 
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MenDressCodeSlideshow;
