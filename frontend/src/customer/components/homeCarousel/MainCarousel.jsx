import React from "react";
import AliceCarousel from "react-alice-carousel";
import { homeCarouselData } from "./MainCarouselData";
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarousel = () => {
  const items = homeCarouselData.map((item) => (
    <img
      src={item.Image}
      role="presentation"
      alt=""
      className="cursor-pointer"
    />
  ));

  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={1000}
      infinite
    />
  );
};

export default MainCarousel;
