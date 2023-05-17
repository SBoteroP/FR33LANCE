import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function MyAccount() {
  const [user, setUser] = useState({});
  const [orders, setOrders] = useState([]);

  /*useEffect(() => {
    // Call API to get user details
    getUserDetails().then((userDetails) => {
      setUser(userDetails);
    });

    // Call API to get user orders
    getUserOrders().then((userOrders) => {
      setOrders(userOrders);
    });
  }, []);*/

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">My Account</h1>

        <Link
          to="/"
          className="mb-4 text-white bg-blue-500 py-2 px-4 rounded-md inline-block"
        >
          Atras
        </Link>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">User Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <Detail label="Name" value={user.name} />
            <Detail label="Email" value={user.email} />
            <Detail label="Address" value={user.address} />
            <Detail label="Phone" value={user.phone} />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">My Orders</h2>
          {orders.length > 0 ? (
            <div className="space-y-4">
              {orders.map((order) => (
                <OrderItem key={order.id} order={order} />
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No orders found</p>
          )}
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