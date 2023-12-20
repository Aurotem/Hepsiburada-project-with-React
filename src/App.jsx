import { useState } from "react";

import OfferBanner from "./Components/Highlights/OfferBanner";
import Navigation from "./Components/Navigation/Navigation";
import Highlights from "./Components/Highlights/Highlights";
import Filters from "./Components/Products/Filters";
import Login from "./Components/Login";
import ShoppingCart from "./Components/ShoppingCart";

function App() {
  const [userLogged, setUserLogged] = useState({loginOpen: false,isLogged: false, user: null});

  const [basketValues, setBasketValues] = useState({
    basketOpen: false,
    items: []
  });
  

  function handleBasketValues(a) {
  setBasketValues(a)
  }
  function logUser(userLogin) {
    setUserLogged({
      loginOpen: userLogin.loginOpen,
      isLogged: userLogin.isLogged,
      user: userLogin.user
    });
  }
  return (
    <>
      <Login userIsLogged={logUser} userLog={userLogged}/>
      <div className="bg-stone-300 dark:bg-stone-700">
        {!userLogged.isLogged && <OfferBanner />}
        <Navigation userIsLogged={userLogged} onLogin={logUser} setBasketValues={setBasketValues}/>
        <Highlights />
        <Filters setBasketValues={handleBasketValues} basketValues={basketValues} />
        <ShoppingCart setBasketValues={handleBasketValues} basketValues={basketValues} userLogged={userLogged}/>
      </div>
    </>
  );
}

export default App;
