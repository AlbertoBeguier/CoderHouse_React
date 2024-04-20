import { useContext } from "react";
import { CartContext } from "./CartContext"; // Asegúrate de que la ruta sea correcta

export const CartDisplay = () => {
  const { items, total } = useContext(CartContext); // Acceder al arreglo de items y al total desde el contexto

  if (items.length === 0) {
    return <p>El carrito está vacío.</p>; // Mensaje cuando el carrito está vacío
  }

  return (
    <div>
      <hr />
      <h3>Productos en el Carrito</h3>
      <hr />
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.title} 🔹 Cantidad: {item.quantity} 🔹 Precio Unitario: ${" "}
            {item.price.toFixed(2)} 🔹 Subtotal: ${" "}
            {(item.quantity * item.price).toFixed(2)}
          </li>
        ))}
      </ul>
      <hr />
      <h5 className="h5-cart">Total General: $ {total.toFixed(2)}</h5>
      <hr />
    </div>
  );
};
