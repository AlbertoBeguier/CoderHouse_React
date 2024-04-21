import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { CartProvider } from "./components/CartContext";
import { CartDisplay } from "./components/CartDisplay";
import { getFirestore, getDocs, collection } from "firebase/firestore"; //! Importamos las funciones necesarias para interactuar con la base de datos
import { useEffect } from "react";

function App() {
  //! useEffect para probar la conexión a la base de datos
  useEffect(() => {
    const db = getFirestore(); // Inicializamos la base de datos
    const refCollection = collection(db, "items"); // Referencia a la colección completa de la BD
    getDocs(refCollection).then(snapShot => {
      if (snapShot.size === 0) console.log("No hay resultados");
      else {
        console.log(
          snapShot.docs.map(doc => {
            //! Mapeamos los documentos de la colección
            return { id: doc.id, ...doc.data() };
          })
        );
      }
    });
  }, []);
  //! fin useEffect para probar la conexión a la base de datos
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartDisplay />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
