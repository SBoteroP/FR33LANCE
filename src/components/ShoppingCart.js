import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/authContext";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import React from "react";
import { useLocation } from "react-router-dom";

export function ShoppingCart() {
  const [products, setProducts] = useState([
    { name: "Product 1", price: 10.99, quantity: 1 },
    { name: "Product 2", price: 19.99, quantity: 1 },
    { name: "Product 3", price: 7.99, quantity: 1 },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const index = cart.findIndex((item) => item.name === product.name);
    if (index !== -1) {
      const updatedCart = [...cart];
      updatedCart[index].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const index = cart.findIndex((item) => item.name === product.name);
    if (index !== -1) {
      const updatedCart = [...cart];
      updatedCart[index].quantity -= 1;
      if (updatedCart[index].quantity === 0) {
        updatedCart.splice(index, 1);
      }
      setCart(updatedCart);
    }
  };

  const navigate = useNavigate();

  const HandleCheckout = () => {
    // Calculate total amount
    const total = cart.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );

    // Navigate to Checkout and pass total as prop
    navigate("/Checkout", { state: { total } });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <table
        style={{
          borderCollapse: "collapse",
          width: "80vw",
          backgroundColor: "white",
          borderRadius: "30px",
        }}
      >
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="py-3 px-4 text-left">Producto</th>
            <th className="py-3 px-4 text-center">Precio</th>
            <th className="py-3 px-4 text-center">Cantidad</th>
            <th className="py-3 px-4 text-center"></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border">{product.name}</td>
              <td className="py-2 px-4 border text-center">{product.price}</td>
              <td className="py-2 px-4 border text-center">
                <button
                  className="mx-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  onClick={() => removeFromCart(product)}
                >
                  -
                </button>
                {cart.find((item) => item.name === product.name)
                  ? cart.find((item) => item.name === product.name).quantity
                  : 0}
                <button
                  className="mx-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  onClick={() => addToCart(product)}
                >
                  +
                </button>
              </td>
              <td className="py-2 px-4 border text-center">
                <button
                  className="rounded-full bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                  onClick={() => removeFromCart(product)}
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center my-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={HandleCheckout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
