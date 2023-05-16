import { useNavigate } from "react-router";
import { useAuth } from "../context/authContext";
import { Link } from "react-router-dom";

export function Home() {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  if (loading) return <h1> LOADING </h1>;

  return (
    <body className="my-5 p-0">
      {/*Navigation*/}
      <header className="flex justify-end items-center py-10">
        <div className="w-screen">
          <div className="flex justify-center mt-4">
            <a href="#" className="text-gray-500 hover:text-blue-500 mx-2">
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
          <i className="material-icons text-gray-500 absolute top-4 right-12 px-4 py-2 rounded-lg transition-all mx-44 my-2 mr-34">event</i>
          <Link
            to="/appointments"
            className="absolute top-4 right-14 px-4 py-2 bg-teal-500 text-white font-semibold rounded-lg hover:bg-green-500 transition-all mx-24 my-2"
          >
            Mis Citas
          </Link>
          <i className="material-icons text-gray-500 absolute top-4 right-4  px-4 py-2 rounded-lg transition-all mx-20 my-2 ">exit_to_app</i>
          <button
            className="absolute top-4 right-4 px-4 py-2 bg-teal-500 text-white font-semibold rounded-lg hover:bg-gray-500 transition-all mx-2 my-2"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </header>

      {/*Banner*/}
      <div className="w-screen">
        <section className="bg-teal-700 text-white text-center py-24">
          <h1 className="text-6xl font-bold mb-4">FR33LANCE</h1>
          <h2 className="text-xl">' Expertos en Expertos '</h2>
        </section>
      </div>

      {/*Buttons*/}
      <section className="flex justify-center items-center py-16">
        <div className="">
          <Link
            to="/servicios"
            className="bg-gradient-to-r from-green-700 to-green-400 text-white py-4 px-8 rounded-full text-3xl font-bold shadow-lg"
          >
            Servicios
          </Link>
          <Link
            to="/agregar_servicio"
            className="bg-gradient-to-r from-purple-700 to-purple-500 text-white py-4 px-8 rounded-full text-3xl font-bold shadow-lg ml-8"
          >
            Registrar servicio
          </Link>
          
          <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 px-8 rounded-full text-3xl font-bold shadow-lg ml-8">
            Más información
          </button>
        </div>
      </section>
      {/*Footer*/}
      <footer className="bg-gray-200 py-4">
        <div className="w-screen">
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
              <a href="#" className="text-gray-500 hover:text-blue-500 mx-2">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500 mx-2">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500 mx-2">
                Contact
              </a>
            </div>

            <a href="#" className="text-gray-500 hover:text-blue-500 mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </body>
  );
}
