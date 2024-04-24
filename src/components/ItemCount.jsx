import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { CartContext } from "./CartContext"; // Verifica que la ruta sea la correcta

export function ItemCount({ product }) {
  const { addItem, products } = useContext(CartContext); // Acceder a la función addItem y al estado products del contexto
  const [count, setCount] = useState(1); // Estado local para manejar la cantidad del producto a añadir
  const productWithStock = products.find(p => p.id === product.id); // Obtener el producto con el stock actual
  let stock = productWithStock ? productWithStock.stock : 0; // Usar el stock actual del producto

  const increment = () => {
    if (count < stock) {
      setCount(count + 1); // Incrementar la cantidad mientras no se supere el stock
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1); // Decrementar la cantidad pero no permitir menos de 1
    }
  };

  const addProductToCart = () => {
    addItem({ ...product, quantity: count });
    setCount(1); // Utilizar addItem para agregar el producto con la cantidad seleccionada al carrito
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
