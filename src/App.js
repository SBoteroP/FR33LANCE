import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Servicios } from "./components/Servicios";
import { AuthProvider } from "./context/authContext";
import { Agendas } from "./components/Agendas";
import { Appointments } from "./components/Appointments";
import { Agregar_servicio } from "./components/Agregar_servicio";
import { Checkout } from "./components/Checkout";

function App() {
  return (
    <div className="bg-slate-300 h-screen text-black flex">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/Agendas" element={<Agendas />} />
<<<<<<< HEAD
          <Route path="/appointments" element={<Appointments />} />
=======
          <Route path="/Appointments" element={<Appointments />} />
>>>>>>> 3c4fc1decd7ed48bf59ce595d6eacc8cb7fcb1d6
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/agregar_servicio" element={<Agregar_servicio />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;