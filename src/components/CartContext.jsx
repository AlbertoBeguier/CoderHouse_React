import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = product => {
    let found = false;
    const newItems = items.map(item => {
      if (item.id === product.id) {
        found = true;
        return { ...item, quantity: item.quantity + product.quantity };
      }
      return item;
    });

    if (!found) {
      newItems.push(product);
    }

    setItems(newItems);
  };

  const removeItem = product => {
    setItems(items.filter(p => p.id !== product.id));
  };

  const clearCart = () => {
    setItems([]);
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
      value={{ items, addItem, removeItem, clearCart, itemCount, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
