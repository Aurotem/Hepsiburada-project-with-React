import OfferBanner from "./Components/Highlights/OfferBanner";
import Navigation from "./Components/Navigation/Navigation";
import Highlights from "./Components/Highlights/Highlights";
import Filters from "./Components/Products/Filters";
import Login from './Components/Login'

function App() {
  return (<>
  <Login/>
    <div className="bg-stone-300 dark:bg-stone-700">
      <OfferBanner/>
      <Navigation />
      <Highlights />
      <Filters />
    </div>
    </>);
  
}

export default App;
