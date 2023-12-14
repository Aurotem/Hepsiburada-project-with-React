"use client";



export default function Filters() {
  return (
    <nav id="product-filters" className=" flex justify-center my-8 h-12 ">
        <ul className="flex justify-around w-1/2 md:w-3/4 sm:w-full">
            <li><a className="text-stone-800 dark:text-stone-100" href="">Phones</a></li>
            <li className="text-stone-700 dark:text-stone-400">|</li>
            <li><a className="text-stone-800 dark:text-stone-100" href="">Laptops</a></li>
            <li className="text-stone-700 dark:text-stone-400">|</li>
            <li><a className="text-stone-800 dark:text-stone-100" href="">Fragrances</a></li>
            <li className="text-stone-700 dark:text-stone-400">|</li>
            <li><a className="text-stone-800 dark:text-stone-100" href="">Skincare</a></li>
            <li className="text-stone-700 dark:text-stone-400">|</li>
            <li><a className="text-stone-800 dark:text-stone-100" href="">Groceries</a></li>
            <li className="text-stone-700 dark:text-stone-400">|</li>
            <li><a className="text-stone-800 dark:text-stone-100" href="">Home Decoration</a></li>
        </ul>
    </nav>
  );
}
