import SearchBar from "./SearchBar";

export default function Navigation({ userIsLogged, onLogin }) {
  function handleClick(){
    onLogin({
      loginOpen: true,
      user: null,
      isLogged: false
    })
  }
  function handleLogout(){
    onLogin({
      isLogged: false,
      user: null,
      loginOpen: false
    })
  }

  return (
    <nav className="flex px-4 py-3 justify-between bg-stone-50 dark:bg-stone-800 sticky top-0 z-10">
      <div className="text-white text-3xl">LOGO</div>
      <div className="lg:w-1/3">
        <SearchBar />
      </div>
      <div >
        <button className='btn btn-black ml-3' onClick={userIsLogged.isLogged ? handleLogout : handleClick}>
          {userIsLogged.isLogged ? userIsLogged.user.userName : " Giriş Yap "}
        </button>
        <button className='btn btn-black ml-3'> Sepetim </button>
      </div>
    </nav>
  );
}
