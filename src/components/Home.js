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
    <body class="my-5 p-0">
      {/*Navigation*/}
      <header class="flex justify-end items-center py-10">
        <div className="w-screen">
          <div class="flex justify-center mt-4">
            <a href="#" class="text-gray-500 hover:text-blue-500 mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6 absolute top-4 left-4 px-4 py-2 bg-black-700"
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
          <button
            className="absolute top-4 right-4 px-4 py-2 bg-teal-500 text-white font-semibold rounded-lg hover:bg-green-500 transition-all mx-2 my-2"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </header>

      {/*Banner*/}
      <div className="w-screen">
        <section class="bg-teal-700 text-white text-center py-24">
          <h1 class="text-6xl font-bold mb-4">FR33LANCE</h1>
          <h2 class="text-xl">' Expertos en Expertos '</h2>
        </section>
      </div>

      {/*Buttons*/}
      <section class="flex justify-center items-center py-16">
        <div className="">
          <Link
            to="/servicios"
            class="bg-gradient-to-r from-green-700 to-green-400 text-white py-4 px-8 rounded-full text-3xl font-bold shadow-lg"
          >
            Servicios
          </Link>
          <Link
            to="/Appointments"
            class="bg-gradient-to-r from-yellow-500 to-yellow-300 text-white py-4 px-8 rounded-full text-3xl font-bold shadow-lg ml-8"
          >
            Mis Citas
          </Link>
          <button class="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 px-8 rounded-full text-3xl font-bold shadow-lg ml-8">
            Más información
          </button>
        </div>
      </section>
      {/*Footer*/}
      <footer class="bg-gray-200 py-4">
        <div className="w-screen">
          <div class="container mx-auto">
            <div class="flex justify-center items-center">
              <input
                type="email"
                class="rounded-l-full py-2 px-4 w-full focus:outline-none"
                placeholder="Enter your email"
              />
              <button class="bg-blue-500 text-white py-2 px-4 rounded-r-full">
                Subscribe
              </button>
            </div>
            <div class="flex justify-center mt-4">
              <a href="#" class="text-gray-500 hover:text-blue-500 mx-2">
                Terms of Service
              </a>
              <a href="#" class="text-gray-500 hover:text-blue-500 mx-2">
                Privacy Policy
              </a>
              <a href="#" class="text-gray-500 hover:text-blue-500 mx-2">
                Contact
              </a>
            </div>

            <a href="#" class="text-gray-500 hover:text-blue-500 mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
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
