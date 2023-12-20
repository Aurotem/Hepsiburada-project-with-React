"use client";


export default function CarouselDefault({ images, height }) {
  function imageGenerator(imageArray) {
    let arr = [];
    for (let i in imageArray) {
      arr.push(
        <div
          key={
            "productImage:"+
            i +
            "-" +
            Math.random() * 100
          }
          className="duration-700 ease-in-out h-full w-full rounded flex"
        >
        <img draggable='false'
          className="absolute block w-full h-full p-image"
          src={imageArray[i]}
          alt={"image" + i}
        /></div>
      );
    }
    return arr;
  }
  let imgClasses = "relative " + height +  " overflow-scroll rounded-lg p-image"
  return (
    <div
      id="default-carousel"
      className="relative"
    >
      <div className={imgClasses}>
        {imageGenerator(images)}
      </div>
    </div>
  );
}
