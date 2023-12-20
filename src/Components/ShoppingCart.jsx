import { useState } from "react";
import basket from "../assets/basket";
export default function ShoppingCart() {
  const [isBasketVisible, setIsBasketVisible] = useState({
    basketOpen: false,
    item: {...basket},
  });

  function basketVisible() {
    setIsBasketVisible((prev) => ({
      ...prev,
      basketOpen: !prev.basketOpen,
    }));
  }

  function handleRemoveItem(i) {
    for (let a in basket) {
      if (basket[a].title === i.title) {
        basket.splice(a, 1);
      }
    }
  }

  function handleIncrease() {

  }
  function handleDecrease() {

  }

  let basketArray = [];
  let totalPrice = 0
  function handleAddToBasket() {
    basketArray = [];
    for (let i of basket) {
      totalPrice += i.quantity ? i.quantity * i.price : i.price;
      basketArray.push(
        <li className="flex py-6">
          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 items-center flex">
            <img className="h-full w-full" src={i.images[0]} alt="product image" />
          </div>
          <div className="ml-4 flex flex-1 flex-col">
            <div>
              <div className="flex justify-between text-base font-medium text-gray-900">
                <h3>
                  <a href="#">{i.title}</a>
                </h3>
                <p className="ml-4">${i.quantity ? i.quantity * i.price : i.price}</p>
              </div>
              <p className="mt-1 text-sm text-gray-500">{i.description.slice(0,52) + '...'}</p>
            </div>
            <div className="flex flex-1 items-end justify-between text-sm">
              <div className="flex">
                <button onClick={handleIncrease} className="bg-stone-100 rounded-sm h-fit px-3 text-stone-700"> + </button>
              <p className="text-gray-500">{i.quantity ? 'Adet: '+i.quantity :'Adet: ' + 1}</p>
                <button onClick={handleDecrease} className="bg-stone-100 rounded-sm h-fit px-3 text-stone-700"> - </button>
              </div>
              <div className="flex">
                <button
                  onClick={() => handleRemoveItem(i)}
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </li>
      );
    }
  }
  handleAddToBasket();

  return (
    <>
      {isBasketVisible.basketOpen && (
        <div
          className="relative z-10"
          aria-labelledby="slide-over-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <div className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <h2
                          className="text-lg font-medium text-gray-900"
                          id="slide-over-title"
                        >
                          Sepet
                        </h2>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            onClick={basketVisible}
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                          >
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Close panel</span>
                            <svg
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {basketArray}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Toplam:</p>
                        <p>${totalPrice}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Kargo ve vergiler eklenmemiş halidir.
                      </p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Satın al
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
