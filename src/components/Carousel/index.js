import React from "react";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Slider from "react-slick";
import "./style.css";

const Carousel = props => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return props.slides.map((slide, i) => (
    <Slider {...settings} key={i}>
      <div><h3>{slide}</h3></div>
    </Slider>
  ));
};

export default Carousel;
