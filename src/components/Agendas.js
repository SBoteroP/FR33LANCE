import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/authContext";
import ReactDOM from "react-dom";
import React from "react";

export function Agendas() {
  const [agendas, setAgendas] = useState([
    { mes: "Junio", dia: "28", hora: "2:00", isChecked: false },
    { mes: "Julio", dia: "1", hora: "11:00", isChecked: false },
  ]);

  const [BotonPresionado, setBotonPresionado] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    const total = 0;
    // Navigate to Checkout and pass total as prop
    navigate("/Checkout", { state: { total } });
    setBotonPresionado(true);
  };

  const handleCheck = (index) => {
    const updatedAgendas = [...agendas];
    updatedAgendas[index].isChecked = !updatedAgendas[index].isChecked;
    setAgendas(updatedAgendas);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          maxWidth: "800px",
          backgroundColor: "white",
          borderRadius: "30px",
        }}
      >
        <thead>
          <tr>
            <th className="text-lg font-bold bg-blue-500 text-white border-black border py-2 px-4 text-center">
              Mes
            </th>
            <th className="text-lg font-bold bg-blue-500 text-white border-black border py-2 px-4 text-center">
              Dia
            </th>
            <th className="text-lg font-bold bg-blue-500 text-white border-black border py-2 px-4 text-center">
              Hora
            </th>
            <th className="text-lg font-bold bg-blue-500 text-white border-black border py-2 px-4 text-center">
              Seleccionar
            </th>
          </tr>
        </thead>
        <tbody>
          {agendas.map((agenda, index) => (
            <tr key={index}>
              <td
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  textAlign: "center",
                }}
              >
                {agenda.mes}
              </td>
              <td
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  textAlign: "center",
                }}
              >
                {agenda.dia}
              </td>
              <td
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  textAlign: "center",
                }}
              >
                {agenda.hora}
              </td>
              <td
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  textAlign: "center",
                }}
              >
                <input
                  type="checkbox"
                  checked={agenda.isChecked}
                  onChange={() => handleCheck(index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        style={{
          position: "absolute",
          left: "50%",
          bottom: 200,
          transform: "translateX(-50%)",
        }}
        className="mt-4 mb-2 px-4 py-3 rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none"
        onClick={handleClick}
      >
        Confirmar
      </button>

      {BotonPresionado && (
        <p
          style={{
            position: "absolute",
            left: "50%",
            bottom: 100,
            transform: "translateX(-50%)",
          }}
        >
          Confirmacion exitosa!
        </p>
      )}
    </div>
  );
}
