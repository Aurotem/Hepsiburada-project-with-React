"use client";

import product from "../../assets/data";

export default function Highlights() {
  function highlightGenerator(productList) {
    let highlightArray = [];

    for (let i = 0; i < 10; i++) {
      let randomProductImages = Math.floor(Math.random() * 30);

      let randomProduct = Math.floor(
        Math.random() * productList[randomProductImages].images.length
      );

      highlightArray.push(
        <div
          key={
            "highlight:" +
            randomProductImages +
            "-" +
            randomProduct +
            "-" +
            Math.random() * 100
          }
          className="duration-700 ease-in-out h-full w-full rounded"
        >
          <img
            draggable="false"
            src={productList[randomProductImages].images[randomProduct]}
            className="absolute block w-full h-full"
            alt="highlight"
          />
        </div>
      );
    }
    return highlightArray;
  }

  return (
    <div
      id="default-carousel"
      className="relative w-2/3 mx-auto mt-10"
    >
      <div className="relative h-56 overflow-scroll rounded-lg md:h-96 p-image">
        {highlightGenerator(product)}
      </div>
    </div>
  );
}

{
  /*    <div classNameName="highlight flex justify-center w-full my-4">
      <Carousel classNameName="lg:w-3/4 xl:w-3/4 2xl:w-3/4 md:w-3/4 w-full bg-stone-800">
        {highlightGenerator(product)}
      </Carousel>
    </div>*/
}
