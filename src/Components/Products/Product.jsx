import ProductImages from "./ProductImages";
import Star from "./Star";

export default function Product({ product }) {
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

  return (
    <div className="w-72 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-3 my-3 pb-2">

        <ProductImages images={product.images} />

      <div className="px-5 pb-1">
        <a href="#">
          <h5 className="text-xl tracking-tight text-gray-900 dark:text-white mb-2">
            {product.brand}
          </h5>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {product.title}
          </h5>
          <p className="text-md tracking-tight text-gray-800 dark:text-stone-200">
            {product.description}
          </p>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {calcStars(Math.round(product.rating))}
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {Math.round(product.rating) + ".0"}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${product.price}
            </span>
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-1.5 py-0.5 rounded dark:bg-green-200 dark:text-green-800 text-center">
              {product.discountPercentage + "% Discount!"}
            </span>
          </div>
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>
      </div>
      <span className="bg-stone-100 text-stone-800 text-xs font-semibold px-1.5 py-0.5 rounded dark:bg-stone-200 dark:text-stone-800 ms-4">
        {product.category}
      </span>
      <span className="bg-orange-100 text-orange-800 text-xs px-1.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-800 ml-4">
        {"Stock: " + product.stock}
      </span>
    </div>
  );
}
