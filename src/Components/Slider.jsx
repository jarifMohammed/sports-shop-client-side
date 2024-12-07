import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState } from "react";
import Slider from "react-slick";

// Import slick-carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const images = [
"https://i.ibb.co.com/6wrQBmV/pexels-pixabay-39362.jpg",    
"https://i.ibb.co.com/6wrQBmV/pexels-pixabay-39362.jpg",
    "https://i.ibb.co.com/bzQ7qJw/pexels-case-originals-27594282.jpg"
  ];

  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Enable infinite scroll
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides visible at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay speed
    nextArrow: <SampleNextArrow />, // Custom next arrow
    prevArrow: <SamplePrevArrow />, // Custom previous arrow
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="h-[60vh]">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom next arrow
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-black rounded-full p-2"
      onClick={onClick}
    >
      ❯
    </div>
  );
};

// Custom previous arrow
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white bg-black rounded-full p-2"
      onClick={onClick}
    >
      ❮
    </div>
  );
};

export default ImageSlider;
