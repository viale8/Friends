// Carousel.jsx
import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);

  }, [images.length]);

  return (
    <div className="overflow-hidden">
      <img
        src={images[currentImage]}
        alt={`Slide ${currentImage + 1}`}
        className="w-full h-auto max-h-full object-bottom object-fill xl-h-full xl-object-cover"
      />
    </div>
  );
};

export default Carousel;
