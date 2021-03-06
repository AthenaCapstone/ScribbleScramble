import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
} from "pure-react-carousel";
import "./gallery.css";
import "pure-react-carousel/dist/react-carousel.es.css";
import { imageSet } from "./ImageIdx";

const size = 40;

const Gallery = ({ style }) => {
  const buttonStyle = {
    background: "transparent",
    border: "none",
  };

  return (
    <CarouselProvider
      naturalSlideWidth={1}
      naturalSlideHeight={1}
      totalSlides={imageSet.length}
      infinite={true}
      style={{
        width: `${size * 4}px`,
        height: `${size * 3}px`,
        position: "relative",
        ...style,
      }}
    >
      <ButtonNext
        style={{
          position: "absolute",
          left: "110%",
          top: "50%",
          transform: "translateY(-50%)",
          ...buttonStyle,
        }}
      >
        <img
          src="/images/GalleryImages/rightArrow.png"
          style={{ width: "22px" }}
        />
      </ButtonNext>
      <Slider>
        {imageSet.map((image) => {
          return (
            <Slide key={image.idx}>
              <Image
                src={image.imageURL}
                style={{
                  width: `${size * 4}px`,
                  height: `${size * 3}px`,
                }}
                alt={image.alt}
              />
            </Slide>
          );
        })}
      </Slider>
      <ButtonBack
        style={{
          position: "absolute",
          right: "110%",
          top: "25%",
          transform: "translateY(50%)",
          ...buttonStyle,
        }}
      >
        <img
          src="/images/GalleryImages/leftArrow.png"
          style={{ width: "22px" }}
        />
      </ButtonBack>
    </CarouselProvider>
  );
};

export default Gallery;
