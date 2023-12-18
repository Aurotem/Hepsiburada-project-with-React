import { useRef } from "react";
export default function Login() {
  const name = useRef();
  const lastName = useRef();
  const eMail = useRef();
  const password = useRef();

  let newUser = [
    {
      name: name.current,
      lastName: lastName.current,
      eMail: eMail.current,
      password: password.current,
    },
  ];

  function register() {
    localStorage.setItem("users", JSON.stringify(newUser));
  }

  function login() {}

  function changePassword() {}

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <span className="mx-auto h-10 w-full text-center font-bold text-2xl">
          LOGO
        </span>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Ad, Soyad
            </label>
            <div className="mt-2 flex justify-between gap-4">
              <input
                ref={name}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
              />

              <input
                ref={lastName}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              E-Posta Adresi
            </label>
            <div className="mt-2">
              <input
                ref={eMail}
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
                Password
              </label>
              <div className="text-sm">
                <button className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Şifreni mi unuttun?
                </button>
              </div>
            </div>
            <div className="mt-2">
              <input
                ref={password}
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
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Giriş yap
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Üye değil misin?{" "}
          <button className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Üye ol.
          </button>
        </p>
      </div>
    </div>
  );
}
