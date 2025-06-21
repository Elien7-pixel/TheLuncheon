
import { useState, useEffect } from "react";

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

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full">
      <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
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
    </div>
  );
};

export default ImageSlideshow;
