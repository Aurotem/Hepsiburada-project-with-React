"use client";

import product from "../../assets/data";
import { Carousel } from "flowbite-react";

export default function Highlights() {
  function highlightGenerator(productList) {
    let highlightArray = [];

    for (let i = 0; i < 10; i++) {
      let randomProductImages = Math.floor(Math.random() * 30);

      let randomProduct = Math.floor(
        Math.random() * productList.products[randomProductImages].images.length
      );

      highlightArray.push(
        <img
          key={"highlight" + randomProductImages + "-" + randomProduct}
          src={productList.products[randomProductImages].images[randomProduct]}
          alt="highlight"
          className="h-full w-full"
        />
      );
    }

    return highlightArray;
  }
  return (
    <div className="highlight flex justify-center w-full my-4">
      <Carousel className="lg:w-3/4 xl:w-3/4 2xl:w-3/4 md:w-3/4 w-full bg-stone-800">
        {highlightGenerator(product)}
      </Carousel>
    </div>
  );
}
