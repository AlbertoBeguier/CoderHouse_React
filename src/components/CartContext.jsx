import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";
import data from "../data/products.json";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState(data); // Nuevo estado para los productos

  const addItem = product => {
    let found = false;
    const newItems = items.map(item => {
      if (item.id === product.id) {
        found = true;
        return {
          ...item,
          quantity: item.quantity + product.quantity,
        };
      }
      return item;
    });

    if (!found) {
      newItems.push(product);
    }

    setItems(newItems);

    // Disminuir el stock en el estado de los productos
    setProducts(prevProducts =>
      prevProducts.map(p =>
        p.id === product.id ? { ...p, stock: p.stock - product.quantity } : p
      )
    );
  };

  const removeItem = product => {
    setItems(
      items
        .map(item => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity - product.quantity };
          }
          return item;
        })
        .filter(p => p.id !== product.id)
    );

    // Aumentar el stock en el estado de los productos
    setProducts(prevProducts =>
      prevProducts.map(p =>
        p.id === product.id ? { ...p, stock: p.stock + product.quantity } : p
      )
    );
  };

  const clearCart = () => {
    setItems([]);

    // Restaurar el stock en el estado de los productos
    setProducts(prevProducts =>
      prevProducts.map(p => ({ ...p, stock: p.stock + p.quantity }))
    );
  };

  const itemCount = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items]
  );

  const total = useMemo(
    () => items.reduce((total, item) => total + item.quantity * item.price, 0),
    [items]
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        clearCart,
        itemCount,
        total,
        products,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
