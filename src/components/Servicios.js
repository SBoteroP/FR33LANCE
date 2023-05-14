import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/authContext";
import { Link } from "react-router-dom";

export function Servicios() {
  const [showDetails, setShowDetails] = useState(false); // variable de estado para controlar si se muestra la información detallada o no
  const [selectedService, setSelectedService] = useState(null); // variable de estado para almacenar el servicio seleccionado
  const [searchTerm, setSearchTerm] = useState("");

  const services = [
    {
      id: 1,
      provider: "Juan Alberto Rodriguez",
      name: "Los maestros de la plomeria",
      service: "Plomeria",
      description: "Reparación de fugas de agua y gas",
      price: 180000,
    },
    {
      id: 2,
      provider: "Luisa Ramirez",
      name: "LimpiARTE",
      service: "Limpieza",
      description: "Servicio de limpieza profunda para hogares y oficinas",
      price: 250000,
    },
    {
        id: 3,
        provider: "Carlos Hernandez",
        name: "Carpinteria a medida",
        service: "Carpinteria",
        description:
          "Construcción de estructuras de madera para exteriores",
        price: 280000,
      },
      {
        id: 4,
        provider: "Ana Maria Fernandez",
        name: "Pintu-Fast",
        service: "Pintura",
        description:
          "Aplicación de pintura decorativa para paredes interiores",
        price: 150000,
      },
      {
        id: 5,
        provider: "Oscar Danilo Rodriguez",
        name: "Testigos de JAVA",
        service: "Tecnico",
        description:
          "Servicio de asistencia técnica, dedicado a instalar, reparar y hacer el mantenimiento de aparatos electrodomésticos",
        price: 200000,
      },
      {
        id: 6,
        provider: "Nicolas Paez",
        name: "Bella Moda",
        service: "Peluqueria",
        description:
          "Servicios de cortes de pelo, tintes, peinados, tratamientos capilares y, en ocasiones, servicios de barbería",
        price: 50000,
      },
      {
        id: 7,
        provider: "Francisca Reyes",
        name: "The nails palace",
        service: "Manicuria",
        description:
          "Tratamiento de belleza cosmético para las uñas y manos",
        price: 150000,
      },
      {
        id: 8,
        provider: "Ricardo Quevedo",
        name: "Testigos de JAVA",
        service: "Lavanderia",
        description:
          "Recogida y entrega de prendas, el lavado, el secado, el planchado, el doblado y la clasificación de cada prenda",
        price: 40000,
      },
      {
        id: 9,
        provider: "Santaigo Romero",
        name: "Testigos de JAVA",
        service: "Mensajeria",
        description:
          "Servicio de mensajeria personalizado",
        price: 20000,
      },
      {
        id: 10,
        provider: "Daniel Martins",
        name: "Cuisine à la maison",
        service: "Cocina",
        description:
          "Preparación y cocción de los alimentos cumpliendo con estrictas normas sanitarias en la manipulación de los alimentos",
        price: 250000,
      },
      {
        id: 11,
        provider: "Nicolas de la Cruz",
        name: "Smart body",
        service: "Fitness",
        description: "Servicio de acondicionamiento fisico personalizado",
        price: 180000,
      },
      {
        id: 12,
        provider: "Alejandro Bustamante",
        name: "La limpieza de alejo",
        service: "Limpieza",
        description: "Servicio de limpieza profunda para hogares y oficinas",
        price: 250000,
      },
      
  ];

  function handleServiceClick(service) {
    setSelectedService(service);
    setShowDetails(true);
  }

  function handleCloseDetails() {
    setSelectedService(null);
    setShowDetails(false);
  }
  function handleSearchTermChange(event) {
    setSearchTerm(event.target.value);
  } 

  return (
    <div className="flex-1 flex flex-col items-center justify-center">
  <div className="mb-4 w-72">
    <input
      type="text"
      placeholder="Buscar servicio..."
      className="w-full border-gray-300 border rounded-md px-4 py-2"
      value={searchTerm}
      onChange={handleSearchTermChange}
    />
  </div>
    <div className="flex-1 flex flex-wrap items-center justify-center">
      {services.filter((service) =>
    service.service.toLowerCase().includes(searchTerm.toLowerCase())
  ).map((service) => (
        <div
          key={service.id}
          className="m-2 p-2 w-72 h-56 bg-white shadow-md rounded-lg flex flex-col items-center justify-center"
        >
          <h2 className="text-xl font-bold">{service.name}</h2>
          <button
            className="mt-4 mb-2 px-4 py-2 rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none"
            onClick={() => handleServiceClick(service)}
          >
            Ver detalles
          </button>

            <Link to="/Agendas" className="mt-2 px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-green-600 focus:outline-none">
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
            <h2 className="text-xl font-bold mb-2">{selectedService.name}</h2>
            <p className="mb-2">
              <strong>Servicio:</strong> {selectedService.service}
            </p>
            <p className="mb-2">
              <strong>Prestador:</strong> {selectedService.provider}
            </p>
            <p className="mb-2">
              <strong>Descripción:</strong> {selectedService.description}
            </p>        
            <p className="mb-2">
              <strong>Costo:</strong> ${selectedService.price.toLocaleString()}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}