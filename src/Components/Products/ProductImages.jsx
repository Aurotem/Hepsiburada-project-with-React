"use client";

import { Carousel } from "flowbite-react";


export default function CarouselDefault({ images }) {
  function imageGenerator(imageArray) {
    let arr = [];
    for (let i in imageArray) {
      arr.push(
        <img
          className="h-full relative"
          key={"img" + i}
          src={imageArray[i]}
          alt={"image" + i}
        />
      );
    }
    return arr;
  }
  return (
    <Carousel
      indicators={false}
      leftControl=" "
      rightControl=" "
    >
      {imageGenerator(images)}
    </Carousel>
  );
}
