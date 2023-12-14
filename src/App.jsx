import OfferBanner from "./Components/Highlights/OfferBanner";
import Navigation from "./Components/Navigation/Navigation";
import Products from "./Components/Products/Products";
import Highlights from "./Components/Highlights/Highlights";
import Filter from "./Components/Products/Filters";

function App() {
  return (
    <div className="bg-stone-300 dark:bg-stone-700">
      <OfferBanner/>
      <Navigation />
      <Highlights />
      <Filter/>
      <Products />
    </div>
  );
}

export default App;
