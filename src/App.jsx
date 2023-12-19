import { useState } from "react";

import OfferBanner from "./Components/Highlights/OfferBanner";
import Navigation from "./Components/Navigation/Navigation";
import Highlights from "./Components/Highlights/Highlights";
import Filters from "./Components/Products/Filters";
import Login from "./Components/Login";
import ShoppingCart from "./Components/ShoppingCart";

function App() {
  const [userLogged, setUserLogged] = useState({loginOpen: false,isLogged: false, user: null});

  function logUser(userLogin) {
    setUserLogged((prev) => ({
      loginOpen: userLogin.loginOpen,
      isLogged: userLogin.isLogged,
      user: userLogin.user
    }));
  }
  return (
    <>
      <Login userIsLogged={logUser} userLog={userLogged}/>
      <div className="bg-stone-300 dark:bg-stone-700">
        {!userLogged.isLogged && <OfferBanner />}
        <Navigation userIsLogged={userLogged} onLogin={logUser}/>
        <Highlights />
        <Filters />
        <ShoppingCart/>
      </div>
    </>
  );
}

export default App;
