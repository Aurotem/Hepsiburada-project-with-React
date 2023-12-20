import { useState } from "react";

import ProductImages from "./ProductImages";
import Star from "./Star";
import basket from "../../assets/basket";

export default function Product({
  product,
  setBasketValues,
  basketValues,
  height,
}) {
  const [isOpened, setIsOpened] = useState(false);
  function handleAddToBasket(i) {
    for (let a in basketValues.items) {
      if (i.title == basketValues.items[a].title) {
        let newItems = basketValues.items;
        let obj = {
          ...newItems[a],
          quantity: newItems[a].quantity ? (newItems[a].quantity += 1) : 2,
        };
        newItems[a] = obj;
        setBasketValues((prev) => ({
          ...prev,
          items: newItems,
        }));
        return 1;
      }
    }
    setBasketValues((prev) => ({
      ...prev,
      items: [...prev.items, i],
    }));
    basket.push(i);
  }

  function calcStars(rate) {
    let arr = [];
    let i = 0;
    while (i < Math.round(rate)) {
      arr.push(<Star color=" text-yellow-400" key={"star" + i} />);
      i++;
    }
    let s = 5 - i;
    for (let i = 0; i < s; i++) {
      arr.push(<Star color=" text-gray-100" key={"wstar" + i} />);
    }
    return arr;
  }

  function detailsPage() {
    setIsOpened((prev) => !prev);
  }

  return !isOpened ? (
    <div className="w-72 max-w-sm bg-white border border-stone-200 rounded-lg shadow dark:bg-stone-800 dark:border-stone-700 mx-3 my-3 pb-2">
      <div className="h-52 sm:h-52 xl:h-52 2xl:h-52 py-2 px-2">
        <ProductImages height={height} images={product.images} />
      </div>

      <div className="px-5 pb-1">
        <button className="text-left" onClick={detailsPage}>
          <h5 className="text-xl tracking-tight text-gray-900 dark:text-white mb-2">
            {product.brand}
          </h5>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {product.title}
          </h5>
          <p className="text-md tracking-tight text-gray-800 dark:text-stone-200">
            {product.description.slice(0, 41) + "..."}
          </p>
        </button>
        <div className="flex items-center mt-5 mb-2.5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {calcStars(Math.round(product.rating))}
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {Math.round(product.rating)}
          </span>
        </div>
        <div className="flex items-center justify-start flex-col">
          <div className="flex w-full mb-2 items-center">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${product.price}
            </span>
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-1.5 py-0.5 rounded dark:bg-green-200 dark:text-green-800 text-center w-1/2 h-fit ml-auto">
              {product.discountPercentage + "% Discount!"}
            </span>
          </div>
          <button
            onClick={() => handleAddToBasket(product)}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
          >
            Add to cart
          </button>
        </div>
      </div>
      <span className="bg-stone-100 text-stone-800 text-xs font-semibold px-1.5 py-0.5 rounded dark:bg-stone-200 dark:text-stone-800 ms-4">
        {product.category}
      </span>
      <span className="bg-orange-100 text-orange-800 text-xs px-1.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-800 ml-4">
        {"Stock: " + product.stock}
      </span>
    </div>
  ) : (
    <>
      <div className="h-screen w-screen fixed backdrop-blur z-40 left-0 top-0"></div>
      <div className="fixed bg-white border border-stone-200 rounded-lg shadow dark:bg-stone-800 dark:border-stone-700 left-1/2 top-1/2 detail">
        <button
          className="absolute text-stone-800 dark:text-stone-50 right-0 font-bold text-xl mx-4 my-2"
          onClick={detailsPage}
        >
          X
        </button>
        <div className="flex flex-col md:flex-row h-fit md:h-5/6 items-center">
          <div className="w-full h-1/3 md:h-2/3 md:w-2/3 py-2 px-2 mt-8">
            <ProductImages height="h-52 md:h-96" images={product.images} />
          </div>

          <div className="px-5 pb-1 h-1/3 md:h-1/2">
            <button className="text-left" onClick={detailsPage}>
              <h5 className="text-xl tracking-tight text-gray-900 dark:text-white mb-2">
                {product.brand}
              </h5>
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {product.title}
              </h5>
              <p className="text-md tracking-tight text-gray-800 dark:text-stone-200">
                {product.description}
              </p>
            </button>
            <div className="flex items-center mt-5 mb-2.5 h-1/3">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                {calcStars(Math.round(product.rating))}
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                {Math.round(product.rating)}
              </span>
            </div>
            <div className="flex items-center justify-start flex-col">
              <div className="flex w-full mb-2 items-center">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${product.price}
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-1.5 py-0.5 rounded dark:bg-green-200 dark:text-green-800 text-center w-36 h-fit ml-auto">
                  {product.discountPercentage + "% Discount!"}
                </span>
              </div>
              <button
                onClick={() => handleAddToBasket(product)}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full bottom-0"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <span className="bg-stone-100 text-stone-800 text-xs font-semibold px-1.5 py-0.5 rounded dark:bg-stone-200 dark:text-stone-800 ms-4">
          {product.category}
        </span>
        <span className="bg-orange-100 text-orange-800 text-xs px-1.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-800 ml-4">
          {"Stock: " + product.stock}
        </span>
      </div>
    </>
  );
}
