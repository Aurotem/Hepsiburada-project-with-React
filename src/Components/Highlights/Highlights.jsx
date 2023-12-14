"use client";

import { Carousel } from "flowbite-react";

export default function Highlights() {
  return (
    <div className="h-72 sm:h-64 xl:h-96 2xl:h-96 flex justify-center w-full my-4">
      <Carousel className="lg:w-3/4 xl:w-3/4 2xl:w-3/4 md:w-3/4 w-full">
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="..."
          className="w-full"
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="..."
          className="w-full"
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="..."
          className="w-full"
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          alt="..."
          className="w-full"
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..."
          className="w-full"
        />
      </Carousel>
    </div>
  );
}
