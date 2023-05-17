import React, { useState, useEffect } from "react";

export function Appointments({ clientId }) {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Replace this with your API call to fetch the client's appointments
    fetch(`/api/appointments?clientId=${clientId}`)
      .then((response) => response.json())
      .then((data) => setAppointments(data));
  }, [clientId]);

  return (
    <div className="h-1/2 w-1/2 bg-teal-500 p-20 max-w-600 mx-auto">
      <h2 className="mb-20 text-center font-bold text-4xl uppercase">Citas</h2>

      {appointments.length === 0 && (
        <p className="italic">No appointments found for this client.</p>
      )}

      {appointments.map((appointment) => (
        <div
          key={appointment.id}
          className="mb-10 border border-gray-300 p-10 rounded-md"
        >
          <p>
            <strong>Fecha:</strong> {appointment.date}
          </p>
          <p>
            <strong>Tiempo:</strong> {appointment.time}
          </p>
          <p>
            <strong>Ubicación:</strong> {appointment.location}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Appointments;