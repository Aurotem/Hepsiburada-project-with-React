import { useState } from "react";
export default function Login({ userIsLogged, userLog }) {
  const [isRegistering, setIsRegistering] = useState(0);
  let classes = "loginPage flex h-fit w-1/3 flex-1 flex-col justify-center px-6 py-12 lg:px-8 fixed bg-white z-20"
  console.log
  let userName = "";
  let userLastName = "";
  let userEMail = "";
  let userPassword = "";

  function register() {
    let userInfo = {
      userName,
      userLastName,
      userEMail,
      userPassword,
    };

    let users = [];
    const localData = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];
    users.push(...localData);
    users.push(userInfo);
    localStorage.setItem("users", JSON.stringify(users));

    setIsRegistering(0);
  }

  function login() {
    const localData = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];
    let userInfo = {
      userEMail,
      userPassword,
    };

    for (let i of localData) {
      if (i.userEMail === userInfo.userEMail) {
        if (i.userPassword === userInfo.userPassword) {
          userIsLogged({ isLogged: true, user: i });
          alert("Giriş yaptın!");
          break;
        } else {
          alert("Şifre Yanlış.");
          setIsRegistering(0);
          break;
        }
      }
    }
  }

  let loginPage =  (<div className="loginPage flex h-fit w-1/3 flex-1 flex-col justify-center px-6 py-12 lg:px-8 fixed bg-white z-20">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <span className="mx-auto h-10 w-full text-center font-bold text-2xl">
      LOGO
    </span>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <div className="space-y-6" action="#" method="POST">
      {isRegistering == 1 && (
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Ad, Soyad
          </label>
          <div className="mt-2 flex justify-between gap-4">
            <input
              onChange={(e) => (userName = e.target.value)}
              id="name"
              name="name"
              type="text"
              required
              className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
            />

            <input
              onChange={(e) => (userLastName = e.target.value)}
              id="lastName"
              name="lastName"
              type="text"
              required
              className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
            />
          </div>
        </div>
      )}

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          E-Posta Adresi
        </label>
        <div className="mt-2">
          <input
            onChange={(e) => (userEMail = e.target.value)}
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            {isRegistering == 2 ? "Yeni Şifre" : "Şifre"}
          </label>
          <div className="text-sm">
            {isRegistering == 2 ? undefined : (
              <button
                onClick={() => setIsRegistering(2)}
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Şifreni mi unuttun?
              </button>
            )}
          </div>
        </div>
        <div className="mt-2">
          <input
            onChange={(e) => (userPassword = e.target.value)}
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
          />
        </div>
      </div>

      <div>
        <button
          onClick={
            isRegistering == 1
              ? register
              : isRegistering == 2
              ? changePassword
              : isRegistering == 0 && login
          }
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {isRegistering == 1
            ? "Üye ol"
            : isRegistering == 2
            ? "Şifreni Değiştir"
            : isRegistering == 0 && "Giriş Yap"}
        </button>
      </div>
    </div>

    <p className="mt-10 text-center text-sm text-gray-500">
      {isRegistering == 0
        ? "Üye değil misin? "
        : (isRegistering == 1 || isRegistering) && "Zaten Üye Misin? "}
      <button
        onClick={() =>
          isRegistering == 0
            ? setIsRegistering(1)
            : (isRegistering == 1 || isRegistering) && setIsRegistering(0)
        }
        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
      >
        {isRegistering == 0
          ? " Üye ol "
          : (isRegistering == 1 || isRegistering) && "Giriş yap"}
      </button>
    </p>
  </div>
</div>)

  function changePassword() {}

  return(userLog.isLogged == false && loginPage);
}
