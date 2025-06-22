
import { useState, useEffect } from "react";

const ImageSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Your beautiful event photos
  const images = [
    "/lovable-uploads/8e0be563-17bc-4f7c-ad0e-dcf39215a498.png",
    "/lovable-uploads/aebc52a3-3c02-488f-928e-33be4f4a8331.png",
    "/lovable-uploads/20a50a13-3833-4a5b-bc89-48a6c55e0202.png",
    "/lovable-uploads/2c45c992-bef7-44de-b4ff-41271a28a533.png",
    "/lovable-uploads/bb37a988-6e2b-45ef-ab77-42e7da9ac83d.png"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 2000);
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
