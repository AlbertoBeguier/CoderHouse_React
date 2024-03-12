import cart from "../assets/cart.png";

export const CartWidget = () => {
  return (
    <span style={{ display: "flex", alignItems: "center" }}>
      <img src={cart} alt="cart" style={{ marginRight: "5px" }} />
      <span className="cart-counter">12</span>
    </span>
  );
};
