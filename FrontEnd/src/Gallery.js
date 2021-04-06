import React from "react";
import { imageSet } from "./ImageIdx";
import "pure-react-carousel/dist/react-carousel.es.css";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
} from "pure-react-carousel";
import "./gallery.css";

const size = 40;

const Gallery = ({ style }) => {
  const buttonStyle = {
    background: "transparent",
    border: "none",
  };

  const scramblize = (imageSet) => {
    const max = imageSet.length;
    for (let i = max - 1; i >= 0; i--) {
      let randomImage = Math.floor(Math.random() * max);
      return [
        imageSet[i],
        (imageSet[randomImage] = imageSet[randomImage]),
        imageSet[i],
      ];
    }
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
      {/* <ButtonBack
          style={{
            position: "absolute",
            right: "110%",
            top: "50%",
            transform: "translateY(-50%)",
            ...buttonStyle,
          }}
        >
          <img
            src="/images/leftArrow.png"
            style={{ width: "22px" }}
            alt="icon carousel left arrow"
          />
        </ButtonBack> */}

      <ButtonBack
        style={{
          position: "absolute",
          left: "110%",
          // right: "-120%",
          top: "50%",
          // top: "8rem",
          transform: "translateY(-50%)",
          ...buttonStyle,
        }}
      >
        <img
          src="/images/GalleryImages/rightArrow.png"
          style={{ width: "22px" }}
        />
      </ButtonBack>
      <Slider>
        {imageSet.map((image) => {
          // image = scramblize(imageSet);
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
      <ButtonNext
        style={{
          position: "absolute",
          // left: "-40%",
          right: "110%",
          top: "50%",
          // top: "-7rem",
          transform: "translateY(-50%)",
          ...buttonStyle,
        }}
      >
        <img
          src="/images/GalleryImages/leftArrow.png"
          style={{ width: "22px" }}
        />
      </ButtonNext>
    </CarouselProvider>
  );
};

export default Gallery;
