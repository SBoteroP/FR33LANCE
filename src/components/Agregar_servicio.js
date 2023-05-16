import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";


export const Agregar_servicio = () => {
  const [values, setValues] = useState({
    servicio: "",
    nombre: "",
    costo: "",
    descripcion: "",
  });

  const navigate = useNavigate();

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const addService = async (values) => {
    const randomNumber = getRandomNumber(1, 500000);
    await setDoc(doc(db, "servicio", randomNumber.toString()), values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/servicios");
    alert("Servicio registrado exitosamente!");
    addService(values);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div className="flex items-center justify-center h-screen mx-auto my-auto">
      <div className="flex flex-col items-center p-12 rounded-lg shadow-lg bg-white">
        <h1 className="text-4xl font-bold mb-6">Registrar un servicio</h1>
        <form className="w-full " onSubmit={handleSubmit}>
          <div className="flex items-center mb-4">
            <div className="p-2 bg-light rounded-full">
              <i className="material-icons text-gray-500">business_center</i>
            </div>
            <input
              type="text"
              className="ml-2 py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Servicio a prestar"
              name="servicio"
              onChange={handleInputChange}
            />
          </div>

          <div className="flex items-center mb-4">
            <div className="p-2 bg-light rounded-full">
              <i className="material-icons text-gray-500">account_box</i>
            </div>
            <input
              type="text"
              className="ml-2 py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nombre del prestador"
              name="nombre"
              onChange={handleInputChange}
            />
          </div>

          <div className="flex items-center mb-4">
            <div className="p-2 bg-light rounded-full">
              <i className="material-icons text-gray-500">monetization_on</i>
            </div>
            <input
              type="text"
              className="ml-2 py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Costo inicial del servicio"
              name="costo"
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <textarea
              name="descripcion"
              rows="3"
              className="w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Escribe una descripción"
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="flex justify-between">
            <Link
              to="/"
              className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg mr-2"
            >
              Atrás
            </Link>
            <button className="py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-lg">
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
