import { useNavigate } from "react-router";
import { useAuth } from "../context/authContext";
import { Link } from "react-router-dom";

export function Home() {
  const { logout, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  if (loading)
    return (
      <h1 className="mx-auto my-auto text-4xl text-blue-500 font-bold ">
        {" "}
        LOADING...{" "}
      </h1>
    );

  return (
    <body className="my-5 p-0 ">
      {/*Navigation*/}
      <header className="flex justify-end items-center py-7 bg-teal-800">
        <div className="w-screen">
          <div className="flex justify-center mt-4">
            <a className="text-gray-500 hover:text-blue-500 mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 absolute top-4 left-4 px-4 py-2 bg-black-700"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </a>
          </div>
          <i className="material-icons text-gray-500 absolute top-4 right-16 px-4 py-2 rounded-lg transition-all mx-44 my-2 mr-34">
            event
          </i>
          <Link
            to="/appointments"
            className="absolute top-4 right-14 px-4 py-2 bg-teal-500 text-white font-semibold rounded-lg hover:bg-green-500 transition-all mx-24 my-2"
          >
            Mis Citas
          </Link>
          <i className="material-icons text-gray-500 absolute top-4 right-4  px-4 py-2 rounded-lg transition-all mx-20 my-2 ">
            exit_to_app
          </i>
          <button
            className="absolute top-4 right-4 px-4 py-2 bg-teal-500 text-white font-semibold rounded-lg hover:bg-gray-500 transition-all mx-2 my-2"
            onClick={handleLogout}
          >
            Logout
          </button>
          <i className="material-icons text-gray-500 absolute top-4 left-1 px-4 py-2 rounded-lg transition-all mx-8 my-2">
            account_box
          </i>
          <Link
            to="/myaccount"
            className="absolute top-4 left-4 px-4 py-2 bg-teal-500 text-white font-semibold rounded-lg hover:bg-blue-500 transition-all mx-16 my-2"
          >
            Mi Cuenta
          </Link>
        </div>
      </header>

      {/*Banner*/}
      <div className="w-auto">
        <section className="bg-teal-700 text-white text-center py-24">
          <h1 className="text-6xl font-bold mb-4">FR33LANCE</h1>
          <h2 className="text-xl">' Expertos en Expertos '</h2>
        </section>
      </div>

      {/*Buttons*/}
      <section className=" h-auto flex justify-center items-center py-32 bg-teal-800">
        <div className=" bg-teal-800 px-12 py-12">
          <Link
            to="/servicios"
            className="bg-gradient-to-r from-green-700 to-green-400 text-white py-12 px-8 rounded-full text-3xl font-bold shadow-lg"
          >
            Servicios
          </Link>
          <Link
            to="/agregar_servicio"
            className="bg-gradient-to-r from-purple-700 to-purple-500 text-white py-12 px-8 rounded-full text-3xl font-bold shadow-lg ml-8"
          >
            Registrar servicio
          </Link>

          <Link to="/Informacion">
            <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-12 px-8 rounded-full text-3xl font-bold shadow-lg ml-8">
              Sugerencias
            </button>
          </Link>
        </div>
      </section>

      {/*Footer*/}
      <footer className="bg-teal-900   py-24">
        <div className="w-auto">
          <div className="container mx-auto">
            <div className="flex justify-center items-center">
              <input
                type="email"
                className="rounded-l-full py-2 px-4 w-full focus:outline-none"
                placeholder="Enter your email"
              />
              <button className="bg-blue-500 text-white py-2 px-4 rounded-r-full">
                Subscribe
              </button>
            </div>
            <div className="flex justify-center mt-4">
              <a className="text-white hover:text-blue-500 mx-2">
                Terminos y Condiciones
              </a>
              <a className="text-white hover:text-blue-500 mx-2">
                ¿Quienes somos?
              </a>
              <a className="text-white hover:text-blue-500 mx-2">
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      </footer>
    </body>
  );
}
