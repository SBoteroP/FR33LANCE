import React from "react";

export function Informacion() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="bg-blue-500 text-white p-4">
          <h1 className="text-2xl">Sugerencias:</h1>
        </div>
        <div className="p-4">
          <input
            className="border border-gray-300 rounded-lg px-4 py-2 w-full text-lg"
            type="text"
            placeholder="Dinos que piensas!"
          />
        </div>
        <div className="p-4">
          <img
            src="https://images.unsplash.com/photo-1564182842519-8a3b2af3e228?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" // Replace with the actual path or URL of your image
            alt="Description"
          />
        </div>
      </div>
    </div>
  );
}
