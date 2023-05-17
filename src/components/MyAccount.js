import React, { useState, useEffect } from "react";

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
    <div className="my-account">
      <h1 className="my-account__title">My Account</h1>
      <div className="my-account__user-details">
        <h2 className="my-account__section-title">User Details</h2>
        <div className="my-account__user-details-grid">
          <div className="my-account__user-detail">
            <label htmlFor="name" className="my-account__label">
              Name:
            </label>
            <p id="name" className="my-account__value">
              {user.name}
            </p>
          </div>
          <div className="my-account__user-detail">
            <label htmlFor="email" className="my-account__label">
              Email:
            </label>
            <p id="email" className="my-account__value">
              {user.email}
            </p>
          </div>
          <div className="my-account__user-detail">
            <label htmlFor="address" className="my-account__label">
              Address:
            </label>
            <p id="address" className="my-account__value">
              {user.address}
            </p>
          </div>
          <div className="my-account__user-detail">
            <label htmlFor="phone" className="my-account__label">
              Phone:
            </label>
            <p id="phone" className="my-account__value">
              {user.phone}
            </p>
          </div>
        </div>
      </div>
      <div className="my-account__orders">
        <h2 className="my-account__section-title">My Orders</h2>
        {orders.length > 0 ? (
          <div className="my-account__orders-list">
            {orders.map((order) => (
              <div key={order.id} className="my-account__order">
                <p className="my-account__order-id">Order ID: {order.id}</p>
                <p className="my-account__order-date">
                  Order Date: {order.date}
                </p>
                <p className="my-account__order-total">
                  Order Total: {order.total}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="my-account__no-orders">No orders found</p>
        )}
      </div>
    </div>
  );
}

export default MyAccount;
