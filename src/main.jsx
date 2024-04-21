import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Importa las funciones que necesitas de los SDKs que requieras
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Añade SDKs para los productos de Firebase que quieras usar
// https://firebase.google.com/docs/web/setup#available-libraries

// La configuración de Firebase de tu aplicación web
// Para el SDK de JS de Firebase v7.20.0 y posteriores, measurementId es opcional
const firebaseConfig = {
  apiKey: "AIzaSyD5bQlkaHMn_vuiiqWiN-pAz7nFYgjOYNE",
  authDomain: "basededatos-aab.firebaseapp.com",
  projectId: "basededatos-aab",
  storageBucket: "basededatos-aab.appspot.com",
  messagingSenderId: "892035320669",
  appId: "1:892035320669:web:775c2e18b35ece92d476b4",
  measurementId: "G-QHL2YQEVYX",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
