import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import photo1 from "../assets/Photo_1.jpg";
import photo2 from "../assets/Photo_2.jpg";
import photo3 from "../assets/Photo_3.jpg";
import photo4 from "../assets/Photo_4.jpg";
import photo5 from "../assets/Photo_5.jpg";

function SliderComponent() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container  mx-h-[75vh] ">
      <Slider {...settings}>
        {[photo1, photo2, photo3, photo4, photo5].map((item, index) => {
          return (
            <div
              key={index}
              className="w-50 h-40 sm:w-80 sm:h-80 md:w-full md:h-[75vh] ">
              <img
                src={item}
                className="w-full h-full object-bottom"
                alt={`Slider ${index + 1}`}/>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default SliderComponent;
