import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import cart from "../assets/cart.png";

export const CartWidget = () => {
  const { itemCount } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCartPage = () => {
    navigate("/cart");
  };

  return (
    <span
      style={{ display: "flex", alignItems: "center" }}
      onClick={goToCartPage}
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
