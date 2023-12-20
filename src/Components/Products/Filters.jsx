import { useState } from "react";
import Products from "./Products";
export default function Filters({ setBasketValues, basketValues }) {
  const [filterValue, setFilterValue] = useState();
  function filterProducts(value) {
    setFilterValue(value);
  }

  return (
    <>
      <nav id="product-filters" className=" flex justify-center my-8 h-fit ">
        <ul className="flex flex-wrap justify-around w-1/2 md:w-3/4 sm:w-full">
          <li>
            <button
              onClick={(e) => filterProducts(e.target.value)}
              value=""
              className="text-stone-800 dark:text-stone-100"
            >
              Filtreleme
            </button>
          </li>
          <li className="text-stone-700 dark:text-stone-400">|</li>
          <li>
            <button
              onClick={(e) => filterProducts(e.target.value)}
              value="smartphones"
              className="text-stone-800 dark:text-stone-100"
            >
              Telefonlar
            </button>
          </li>
          <li className="text-stone-700 dark:text-stone-400">|</li>
          <li>
            <button
              onClick={(e) => filterProducts(e.target.value)}
              value="laptops"
              className="text-stone-800 dark:text-stone-100"
            >
              Laptoplar
            </button>
          </li>
          <li className="text-stone-700 dark:text-stone-400">|</li>
          <li>
            <button
              onClick={(e) => filterProducts(e.target.value)}
              value="fragrances"
              className="text-stone-800 dark:text-stone-100"
            >
              Kokular
            </button>
          </li>
          <li className="text-stone-700 dark:text-stone-400">|</li>
          <li>
            <button
              onClick={(e) => filterProducts(e.target.value)}
              value="skincare"
              className="text-stone-800 dark:text-stone-100"
            >
              Cilt Bakımı
            </button>
          </li>
          <li className="text-stone-700 dark:text-stone-400">|</li>
          <li>
            <button
              onClick={(e) => filterProducts(e.target.value)}
              value="groceries"
              className="text-stone-800 dark:text-stone-100"
            >
              Market
            </button>
          </li>
          <li className="text-stone-700 dark:text-stone-400">|</li>
          <li>
            <button
              onClick={(e) => filterProducts(e.target.value)}
              value="home-decoration"
              className="text-stone-800 dark:text-stone-100"
            >
              Ev Dekorasyonu
            </button>
          </li>
        </ul>
      </nav>
      <Products
        parameter={filterValue}
        setBasketValues={setBasketValues}
        basketValues={basketValues}
      />
    </>
  );
}
