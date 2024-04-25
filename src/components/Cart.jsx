import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { getFirestore, collection, addDoc } from "firebase/firestore"; // Corregido "colection" a "collection"
import Button from "react-bootstrap/Button";

const initialValues = {
  name: "",
  phone: "",
  email: "",
};

export const Cart = () => {
  const { items, total, removeItem, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [counter, setCounter] = useState(5);
  const [values, setValues] = useState(initialValues);

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const goBack = () => {
    navigate(-1);
  };

  const handleClearCart = () => {
    clearCart();
    navigate("/");
    window.location.reload();
  };

  const handleSubmit = async () => {
    if (!values.name || !values.phone || !values.email) {
      alert("Por favor, llena todos los campos del formulario.");
      return;
    }

    const order = {
      buyer: values,
      items,
      total: total.toFixed(2),
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    const docRef = await addDoc(orderCollection, order);
    alert(`Felicitaciones por su compra. La 
    orden de compra generada con éxito con ID: ${docRef.id}`);
    clearCart();
  };

  useEffect(() => {
    if (items.length === 0) {
      const timer =
        counter > 0
          ? setTimeout(() => setCounter(counter - 1), 1000)
          : navigate("/");
      return () => clearTimeout(timer);
    }
  }, [items, counter, navigate]);

  if (items.length === 0) {
    return (
      <div>
        <p className="p-cart">El carrito está vacío.</p>
        <p className="p-cart-1">
          Usted va a ser redirigido a la página principal en{" "}
          <span className="p-cart">{counter}</span>{" "}
          {counter === 1 ? "segundo" : "segundos"}.
        </p>
      </div>
    );
  }

  return (
    <div>
      <hr />
      <h3>Productos en el Carrito</h3>
      <hr />
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <span className="item-title">{item.title}</span> 🔹 Cantidad:{" "}
            {item.quantity} 🔹 Precio Unitario: $ {item.price.toFixed(2)} 🔹
            Subtotal: $ {(item.quantity * item.price).toFixed(2)}
            <button className="bot-elim-itm" onClick={() => removeItem(item)}>
              Eliminar
            </button>{" "}
          </li>
        ))}
      </ul>
      <hr />
      <h5 className="h5-cart">Total General: $ {total.toFixed(2)}</h5>
      <hr />
      <div className="button-container">
        <Button onClick={goBack} className="bot-elim-itm-2">
          Volver
        </Button>{" "}
        <button className="bot-elim-itm-1" onClick={handleClearCart}>
          Vaciar Carrito
        </button>{" "}
      </div>
      <hr />
      <h3 className="tit-comp-cart">Comprar</h3>
      <div className="form-container">
        <form>
          <label className="label-cart"> Nombre: </label>
          <input
            type="text"
            value={values.name}
            name="name"
            onChange={handleChange}
          />
          <label className="label-cart"> Teléfono: </label>
          <input
            type="text"
            value={values.phone}
            name="phone"
            onChange={handleChange}
          />
          <label className="label-cart"> Email: </label>
          <input
            type="email"
            value={values.email}
            name="email"
            onChange={handleChange}
          />
        </form>
        <button type="button" onClick={handleSubmit} className="bot-elim-itm-3">
          Enviar Orden de Compra
        </button>
      </div>
      <hr />
      <br />
    </div>
  );
};
