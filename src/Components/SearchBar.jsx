export default function SearchBar() {
  return (
    <>
      <input
        type="text"
        id="search-navbar"
        className="block w-full p-2 ps-10 text-sm text-stone-900 border border-stone-300 rounded-lg bg-stone-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Ürün Ara..."
      />
    </>
  );
}
