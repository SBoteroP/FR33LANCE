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
    <div
      style={{
        height: "50%",
        width: "50%",
        backgroundColor: "#00a0a0",
        padding: "20px",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          marginBottom: "20px",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "32px",
          textTransform: "uppercase",
        }}
      >
        Citas
      </h2>

      {appointments.length === 0 && (
        <p style={{ fontStyle: "italic" }}>
          No appointments found for this client.
        </p>
      )}
      {appointments.map((appointment) => (
        <div
          key={appointment.id}
          style={{
            marginBottom: "10px",
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "5px",
          }}
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