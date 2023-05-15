import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useLocation } from "react-router-dom";

export function Checkout() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("paypal");
  const { state } = useLocation();
  const { total } = state || {};

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // TODO: handle form submission
    console.log({
      firstName,
      lastName,
      email,
      paymentMethod,
    });
    navigate("/");
  };

  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold mb-8">Checkout</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="firstName">First Name</label>
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
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="border border-gray-300 rounded px-2 py-1"
            />
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="email">Email</label>
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
          <label htmlFor="paymentMethod">Payment Method</label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
            className="border border-gray-300 rounded px-2 py-1"
          >
            <option value="paypal">PayPal</option>
            <option value="stripe">Stripe</option>
            <option value="creditCard">Credit Card</option>
          </select>
        </div>
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        </div>
        <div className="container mx-auto mt-10 px-4">
          <h1 className="text-2xl font-bold mb-8">Checkout</h1>
          <p>Total amount: ${total}</p>
          {/* Rest of the Checkout.js code */}
        </div>
      </form>
    </div>
  );
}
