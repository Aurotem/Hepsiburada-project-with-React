"use client";

import { Carousel } from "flowbite-react";

export default function CarouselDefault({ images }) {
  function imageGenerator(imageArray) {
    let arr = [];
    for (let i in imageArray) {
      arr.push(
        <img

          className="h-full"
          key={"img" + i}
          src={imageArray[i]}
          alt={"image" + i}
        />
      );
    }
    return arr;
  }
  return (
    <div className="h-44 sm:h-52 xl:h-44 2xl:h-44 px-4 py-4 rounded">
      <Carousel>{imageGenerator(images)}</Carousel>
    </div>
  );
}
