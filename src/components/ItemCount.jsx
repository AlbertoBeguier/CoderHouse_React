import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../contexts/CartContext";

export function ItemCount({ product }) {
  const { addItem, products } = useContext(CartContext);
  const [count, setCount] = useState(1);
  const productWithStock = products.find(p => p.id === product.id);
  let stock = productWithStock ? productWithStock.stock : 0;
  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const addProductToCart = () => {
    addItem({ ...product, quantity: count });
    setCount(1);
  };
  return (
    <>
      <button className="button-inc-dec" onClick={decrement}>
        -
      </button>
      <span>{count}</span>
      <button className="button-inc-dec" onClick={increment}>
        +
      </button>
      <div>
        <button
          className="button-inc-dec-1"
          onClick={addProductToCart}
          disabled={stock === 0}
        >
          Agregar al carrito
        </button>
      </div>
    </>
  );
}

ItemCount.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    pictureUrl: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
  }).isRequired,
};
