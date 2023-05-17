import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Servicios } from "./components/Servicios";
import { AuthProvider } from "./context/authContext";
import { Agendas } from "./components/Agendas";
import { Appointments } from "./components/Appointments";
import { AgregarServicio } from "./components/AgregarServicio";
import { Checkout } from "./components/Checkout";
import { Informacion } from "./components/Informacion";
import { MyAccount } from "./components/MyAccount";

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
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/agregarservicio" element={<AgregarServicio />} />
          <Route path="/informacion" element={<Informacion />} />
          <Route path="/myaccount" element={<MyAccount />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
