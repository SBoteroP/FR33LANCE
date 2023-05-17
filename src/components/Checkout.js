import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useLocation } from "react-router-dom";

export function Checkout() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const { state } = useLocation();
  const { total } = state || {};

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      paymentMethod,
      cardNumber: event.target.cardNumber.value,
      cardExpiry: event.target.cardExpiry.value,
      cardCvc: event.target.cardCvc.value,
    };
    console.log(formData);
    navigate("/");
  };

  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold mb-8">Checkout</h1>
      <form onSubmit={handleFormSubmit} className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="firstName" className="font-medium">
            Nombre
          </label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="border border-gray-300 rounded px-2 py-1"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName" className="font-medium">
            Apellido
          </label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="border border-gray-300 rounded px-2 py-1"
          />
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-300 rounded px-2 py-1"
          />
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="paymentMethod" className="font-medium">
            Métodos de Pago
          </label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
            className="border border-gray-300 rounded px-2 py-1"
          >
            <option value="paypal">PayPal</option>
            <option value="stripe">Stripe</option>
            <option value="creditCard">Tarjeta de Crédito</option>
          </select>
        </div>
        {paymentMethod === "creditCard" && (
          <div className="flex flex-col">
            <label htmlFor="cardNumber" className="font-medium">
              Número de Tarjeta
            </label>
            <input
              id="cardNumber"
              type="text"
              required
              className="border border-gray-300 rounded px-2 py-1"
            />
            <label htmlFor="cardExpiry" className="font-medium mt-4">
              Fecha de Vencimiento
            </label>
            <input
              id="cardExpiry"
              type="text"
              placeholder="MM/AA"
              required
              className="border border-gray-300 rounded px-2 py-1"
            />
            <label htmlFor="cardCvc" className="font-medium mt-4">
              Código de Seguridad
            </label>
            <input
              id="cardCvc"
              type="text"
              required
              className="border border-gray-300 rounded px-2 py-1"
            />
          </div>
        )}

        <div className="flex justify-end mt-8">
          <div className="flex items-end">
            <button
              type="submit"
              className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <p className="font-medium text-lg mt-4">
        Total a pagar:
        <span className="text-gray-700 ml-2">${total.toFixed(2)}</span>
      </p>
    </div>
  );
}
