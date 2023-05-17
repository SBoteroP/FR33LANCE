import React, { useState, useEffect } from "react";
/*import { firebaseConfig } from "../firebase";
import "firebase/auth";
import "firebase/firestore";
import { initializeApp, auth, firestore } from "firebase/app";

// Initialize Firebase app
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Get authentication instance
const firebaseAuth = firebase.auth();

// Get Firestore instance
const db = firebase.firestore();

// Create a reference to the clients collection
const clientsRef = db.collection("clients");
*/
export function MyAccount() {
  const [client, setClient] = useState(null);
  /*
  useEffect(() => {
    const userId = firebaseAuth.currentUser.uid;
    const clientRef = clientsRef.doc(userId);
    clientRef.get().then((doc) => {
      if (doc.exists) {
        setClient(doc.data());
      }
    });
  }, []);*/
  return (
    <div className="my-account">
      <h1 className="my-account__title">My Account</h1>
      {client ? (
        <div className="my-account__user-details">
          <h2 className="my-account__section-title">User Details</h2>
          <div className="my-account__user-details-grid">
            <div className="my-account__user-detail">
              <label htmlFor="name" className="my-account__label">
                Name:
              </label>
              <p id="name" className="my-account__value">
                {client.nombre} {client.apellido}
              </p>
            </div>
            <div className="my-account__user-detail">
              <label htmlFor="email" className="my-account__label">
                Email:
              </label>
              <p id="email" className="my-account__value">
                {client.email}
              </p>
            </div>
            <div className="my-account__user-detail">
              <label htmlFor="age" className="my-account__label">
                Age:
              </label>
              <p id="age" className="my-account__value">
                {client.edad}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading client data...</p>
      )}
      // Your MyAccount component JSX here
    </div>
  );
}
