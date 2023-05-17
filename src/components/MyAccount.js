import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { getDocs, collection, where, query } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../context/authContext";

export function MyAccount() {
  /*const { currentUser } = useAuth();
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getclientes = async () => {
      const q = query(
        collection(db, "clientes"),
        where("uid", "==", currentUser?.uid)
      );
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        setClient(doc.data());
      }
      setLoading(false);
    };
    if (currentUser) {
      getclientes();
    } else {
      setLoading(false);
    }
  }, [currentUser]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!client) {
    return <Navigate to="/login" />;
  }
*/
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-6">Mi Cuenta</h1>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Detalles de Usuario</h2>
            <div className="grid grid-cols-2 gap-4">
              <Detail label="Nombre" value="Juancho" />
              <Detail label="Apellido" value="Naipes" />
              <Detail label="Email" value="bajuan00@gmail.com" />
            </div>
          </div>
        </div>
        <div>
          <Link
            to="/"
            className="text-white bg-blue-500 py-2 px-4 rounded-md inline-block ml-auto mb-4"
          >
            Atras
          </Link>
        </div>
      </div>
    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div className="flex items-center">
      <label className="mr-2 font-medium">{label}:</label>
      <p className="text-gray-600">{value}</p>
    </div>
  );
}

function OrderItem({ order }) {
  return (
    <div>
      <p className="text-lg font-medium">Order ID: {order.id}</p>
      <p className="text-gray-600">Order Date: {order.date}</p>
      <p className="text-gray-600">Order Total: {order.total}</p>
    </div>
  );
}

export default MyAccount;
