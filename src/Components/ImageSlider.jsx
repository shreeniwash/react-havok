

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ className }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:false
  };

  return (
    <div className={className}>
      <Slider {...settings}>
        <div>
          <img src="img2.jpeg" alt="Image 1" className="w-full h-28 md:h-32 lg:h-36 xl:h-36 2xl:h-36 rounded-full mx-auto" />
        </div>
        <div className="w-full md:w-1/3 lg:w-1/2 xl:w-2/3">
          <img src="img3.jpeg" alt="Image 2" className="w-full h-28 md:h-32 lg:h-36 xl:h-36  2xl:h-36 rounded-full mx-auto" />
        </div>
        <div className="w-full md:w-1/3 lg:w-1/2 xl:w-2/3">
          <img src="img4.jpeg" alt="Image 3" className="w-full h-28 md:h-32 lg:h-36 xl:h-36  2xl:h-36  rounded-full mx-auto" />
        </div>
      </Slider>
    </div>
  );
}

export default ImageSlider;
