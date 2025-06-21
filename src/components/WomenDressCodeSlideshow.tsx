
import { useState, useEffect } from "react";

const WomenDressCodeSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    "/lovable-uploads/7896d1de-b8fb-4bf6-b5d4-ea1833c02035.png",
    "/lovable-uploads/6006226f-5f27-43d2-b736-47e33a1ad347.png",
    "/lovable-uploads/0e881870-c03a-4e66-b5a3-34229e8449be.png",
    "/lovable-uploads/4ace0ed4-4df7-4fb7-b64f-6cc65ac78552.png",
    "/lovable-uploads/4f3eb292-2808-4015-88e0-e633ab496915.png"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Women's dress code inspiration ${index + 1}`}
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

export default WomenDressCodeSlideshow;
