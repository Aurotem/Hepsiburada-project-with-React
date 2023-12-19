import { useState } from "react";

import OfferBanner from "./Components/Highlights/OfferBanner";
import Navigation from "./Components/Navigation/Navigation";
import Highlights from "./Components/Highlights/Highlights";
import Filters from "./Components/Products/Filters";
import Login from "./Components/Login";
import ShoppingCart from "./Components/ShoppingCart";

function App() {
  const [userLogged, setUserLogged] = useState({isLogged: false, user: null});

  function logUser(userLogin) {
    setUserLogged({isLogged: userLogin.isLogged, user: userLogin.user})
  }
  return (
    <>
      <Login userIsLogged={logUser} userLog={userLogged}/>
      <div className="bg-stone-300 dark:bg-stone-700">
        {!userLogged.isLogged && <OfferBanner />}
        <Navigation isLogged={userLogged} />
        <Highlights />
        <Filters />
        <ShoppingCart/>
      </div>
    </>
  );
}

export default App;
