import { useContext } from "react";
import { CartContext } from "./CartContext"; // Asegúrate de que la ruta sea correcta

export const CartDisplay = () => {
  const { items, total } = useContext(CartContext); // Acceder al arreglo de items y al total desde el contexto

  if (items.length === 0) {
    return <p>El carrito está vacío.</p>; // Mensaje cuando el carrito está vacío
  }

  return (
    <div>
      <h3>Productos en el Carrito:</h3>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.title} - Cantidad: {item.quantity} - Precio: $
            {item.price.toFixed(2)} - Subtotal: $
            {(item.quantity * item.price).toFixed(2)}
          </li>
        ))}
      </ul>
      <h5>Importe Total: ${total.toFixed(2)}</h5>
    </div>
  );
};
