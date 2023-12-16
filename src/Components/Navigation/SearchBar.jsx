import { createContext, useContext, useRef } from "react";

export const inputValue = createContext();

export default function SearchBar() {
  const input = useRef();

  return (
    <>
      <input
        ref={input}
        type="text"
        id="search-navbar"
        className="block w-full p-2 ps-10 text-sm text-stone-900 border border-stone-300 rounded-lg bg-stone-200 focus:ring-blue-700 focus:border-blue-700 dark:bg-stone-200 dark:border-stone-200 dark:placeholder-stone-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Ürün veya Marka Ara..."
        
      />
      <inputValue.Provider value={input}></inputValue.Provider>
    </>
  );
}
