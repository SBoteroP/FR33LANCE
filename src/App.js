import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Servicios } from "./components/Servicios";
import { AuthProvider } from "./context/authContext";
import { Agendas } from "./components/Agendas";
import { Agregar_servicio } from "./components/Agregar_servicio";

function App() {
  
  return (
    <div className="bg-slate-300 h-screen text-black flex" >
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/Agendas" element={<Agendas />} />
          <Route path="/Agregar_servicio" element={<Agregar_servicio />} />
        </Routes>
      </AuthProvider>
    </div >
  )
}

export default App