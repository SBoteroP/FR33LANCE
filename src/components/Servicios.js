import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";

export function Servicios() {
  const [showDetails, setShowDetails] = useState(false); // variable de estado para controlar si se muestra la información detallada o no
  const [searchTerm, setSearchTerm] = useState("");
  const [servicio, setServicio] = useState([]);

  const navigate = useNavigate();
  const getServicios = async () => {
    const querySnapshot = await getDocs(collection(db, "servicios"));
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setServicio(docs);
  };

  useEffect(() => {
    getServicios();
  }, []);

  function handleServiceClick(servicio) {
    setServicio(servicio);
    setShowDetails(true);
  }

  const handleCloseDetails = (e) => {
    e.preventDefault();
    setShowDetails(false);
    navigate("/servicios");
  };

  function handleSearchTermChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <div className="mb-4 w-72">
        <input
          type="text"
          placeholder="Buscar servicio..."
          className="w-full border-gray-300 border rounded-md px-4 py-2 my-4"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
      <div className="flex-1 flex flex-wrap items-center justify-center">
        {Object.values(servicio)
          .filter((servicio) =>
            servicio?.servicio?.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((servicio) => (
            <div
              key={servicio.id}
              className="m-2 p-2 w-72 h-56 bg-white shadow-md rounded-lg flex flex-col items-center justify-center"
            >
              <h2 className="text-xl font-bold">{servicio.servicio}</h2>
              <button
                className="mt-4 mb-2 px-4 py-2 rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none"
                onClick={() => handleServiceClick(servicio)}
              >
                Ver detalles
              </button>

              <Link
                to="/Agendas"
                className="mt-2 px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-green-600 focus:outline-none"
              >
                Contratar
              </Link>
            </div>
          ))}
      </div>
      {showDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <button
              className="absolute top-2 right-2 px-2 py-1 rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none"
              onClick={handleCloseDetails}
            >
              X
            </button>
            <h3 className="text-xl font-bold mb-2">{servicio.servicio}</h3>

            <p className="mb-2">
              <strong>Prestador: {servicio.nombre}</strong>
            </p>
            <p className="mb-2">
              <strong>Descripción: {servicio.descripcion}</strong>
            </p>
            <p className="mb-2">
              <strong>Costo: {servicio.costo}</strong>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
