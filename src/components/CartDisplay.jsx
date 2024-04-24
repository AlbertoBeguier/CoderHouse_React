import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext"; // Asegúrate de que la ruta sea correcta
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

export const CartDisplay = () => {
  const { items, total, removeItem, clearCart } = useContext(CartContext); // Acceder a removeItem y clearCart desde el contexto
  const navigate = useNavigate(); // Usar useNavigate en lugar de useHistory
  const [counter, setCounter] = useState(5);

  const goBack = () => {
    navigate(-1); // Use navigate(-1) para ir a la página anterior
  };
  const handleClearCart = () => {
    clearCart();
    navigate("/"); // Asegúrate de cambiar esto a la ruta de la página a la que deseas ir
    window.location.reload(); // Forzar una recarga completa de la página
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
    </div>
  );
};
