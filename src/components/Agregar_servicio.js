import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/authContext";
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import React from 'react';

export function Agregar_servicio() {
    
    const [servicio, setservicio] = useState('');
    const [nombre, setnombre] = useState('');
    const [id, setid] = useState('');
    const [prestador, setprestador] = useState('');
    const [descripcion, setdescripcion] = useState('');
    const [precio, setprecio] = useState('');

    const handleidChange= (event) => {
        setid(event.target.value);
      };

      const handleprestadorChange = (event) => {
        setprestador(event.target.value);
      };

      const handledescripcionChange = (event) => {
        setdescripcion(event.target.value);
      };

      const handleprecioChange = (event) => {
        setprecio(event.target.value);
      };
  
    const handleservicioChange = (event) => {
      setservicio(event.target.value);
    };
  
    const handlenombreChange = (event) => {
      setnombre(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(`nombre: ${nombre}, servicio: ${servicio}`);
      // Handle form submission here
    };
  
    return (
      <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
       <div>
  <img src="https://media.istockphoto.com/id/1252680975/photo/happy-african-builder-standing-pleased-posing-on-white-studio-background.jpg?s=612x612&w=0&k=20&c=1Uka9d-qjdgmEL9emV5aMbdxFKPNBWSSNxu1E9dcliw=" alt="Obrero feliz" />
</div> 
    <div className="bg-blue-500 text-white p-4">Unase a nuestros expertos!
    </div>
      <form onSubmit={handleSubmit} className="flex items-center justify-center h-screen">
  <div className="w-1/2">
    <div className="bg-green-500 p-4 rounded-lg shadow-md">
      <label htmlFor="name-input" className="mb-1 font-bold text-gray-700">nombre:</label>
      <input id="name-input" nombre="nombre" type="text" value={nombre} onChange={handlenombreChange} className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4" />
    </div>
    <div className="bg-green-500 p-4 rounded-lg shadow-md">
      <label htmlFor="servicio-input" className="mb-1 font-bold text-gray-700">servicio:</label>
      <input id="servicio-input" name="servicio" type="servicio" value={servicio} onChange={handleservicioChange} className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4" />
    </div>
    <div className="bg-green-500 p-4 rounded-lg shadow-md">
      <label htmlFor="id-input" className="mb-1 font-bold text-gray-700">id:</label>
      <input id="id-input" name="id" type="text" value={id} onChange={handleidChange} className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4" />
    </div>
    <div className="bg-green-500 p-4 rounded-lg shadow-md">
      <label htmlFor="name-input" className="mb-1 font-bold text-gray-700">prestador:</label>
      <input id="name-input" name="prestador" type="text" value={prestador} onChange={handleprestadorChange} className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4" />
    </div>
    <div className="bg-green-500 p-4 rounded-lg shadow-md">
      <label htmlFor="name-input" className="mb-1 font-bold text-gray-700">descripcion:</label>
      <input id="name-input" name="descripcion" type="text" value={descripcion} onChange={handledescripcionChange} className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4" />
    </div>
    <div className="bg-green-500 p-4 rounded-lg shadow-md">
      <label htmlFor="name-input" className="mb-1 font-bold text-gray-700">precio:</label>
      <input id="name-input" name="precio" type="text" value={precio} onChange={handleprecioChange} className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4" />
    </div>
    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
  </div>
      </form>
      </div>
    );
  }