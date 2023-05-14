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
  

  return (

    <div className="w-full max-w-xs m-auto">

      <h1 className="text-6xl font-extrabold text-transparent bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text tracking-tight mb-10 font-heading">FREELANCE</h1>


      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit} className="bg-white 
      shadow-md rounder px-8 pt-6 pb-8 mb-4">

        <div className="mb-4">
          <label htmlFor="nombre" className="block 
          text-gray-777 text-sm font-bold mb-2">Nombre</label>
          <input
            type="nombre"
            name="nombre"
            placeholder="youremail@site.com"
            className="shadow appearence- none border rounder 
             w-fully py-2 px-3 text-gray-777 leading-tight 
             focus:outline-none focus:shadow-outline"
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="servicio" className="block 
          text-gray-777 text-sm font-bold mb-2">Servicio</label>
          <input
            type="servicio"
            name="servicio"
            placeholder="youremail@site.com"
            className="shadow appearence- none border rounder 
             w-fully py-2 px-3 text-gray-777 leading-tight 
             focus:outline-none focus:shadow-outline"
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="Prestador" className="block 
          text-gray-777 text-sm font-bold mb-2">Prestador</label>
          <input
            type="prestador"
            name="prestador"
            placeholder="youremail@site.com"
            className="shadow appearence- none border rounder 
             w-fully py-2 px-3 text-gray-777 leading-tight 
             focus:outline-none focus:shadow-outline"
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="descripcion" className="block 
          text-gray-777 text-sm font-bold mb-2">Descripcion</label>
          <input
            type="descripcion"
            name="descripcion"
            placeholder="youremail@site.com"
            className="shadow appearence- none border rounder 
             w-fully py-2 px-3 text-gray-777 leading-tight 
             focus:outline-none focus:shadow-outline"
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="precio" className="block 
          text-gray-777 text-sm font-bold mb-2">Precio</label>
          <input
            type="precio"
            name="precio"
            placeholder="youremail@site.com"
            className="shadow appearence- none border rounder 
             w-fully py-2 px-3 text-gray-777 leading-tight 
             focus:outline-none focus:shadow-outline"
            onChange={handleChange}
          />
        </div>

        <p className="my-4 text-sm flex justify-between px-3">
          Aún no estás registrado? <Link to='/register' className="font-bold"> Registrarse
          </Link>
        </p>

        <button className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded cliente-btn">
  Registrar
</button>



      </form>
    </div>
  )
}