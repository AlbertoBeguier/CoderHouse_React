import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext"; // Verifica que la ruta sea correcta
import cart from "../assets/cart.png";

export const CartWidget = () => {
  const { itemCount } = useContext(CartContext);
  const navigate = useNavigate(); // Hook para navegar

  const goToCartPage = () => {
    navigate("/cart"); // Navegar a la página del carrito
  };

  return (
    <span
      style={{ display: "flex", alignItems: "center" }}
      onClick={goToCartPage} // Usar la nueva función para navegar
    >
      <img
        src={cart}
        alt="Cart"
        style={{ marginRight: "5px", cursor: "pointer" }}
      />
      <span className="cart-counter">{itemCount}</span>
    </span>
  );
};
