import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/authContext";
import { Link } from "react-router-dom";

function Agenda() {
  const [agendas, setAgendas] = useState([
    { mes: "Junio", dia: "28", hora: "2:00" },
    { mes: "Julio", dia: "1", hora: "11:00" },
  ]);

  const addAgenda = () => {
    const newAgenda = {
      mes: "Agosto",
      dia: "15",
      hora: "15:30",
    };
    setAgendas([...agendas, newAgenda]);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Mes</th>
            <th>Dia</th>
            <th>Hora</th>
          </tr>
        </thead>
        <tbody>
          {agendas.map((agenda, index) => (
            <tr key={index}>
              <td>{agenda.mes}</td>
              <td>{agenda.dia}</td>
              <td>{agenda.hora}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addAgenda}>Agregar agenda</button>
    </div>
  );
}

export default Agenda;