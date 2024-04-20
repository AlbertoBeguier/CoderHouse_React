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
        // Disminuir el stock cuando se agrega un producto al carrito
        return {
          ...item,
          quantity: item.quantity + product.quantity,
          stock: item.stock - product.quantity,
        };
      }
      return item;
    });

    if (!found) {
      newItems.push({ ...product, stock: product.stock - product.quantity });
    }

    setItems(newItems);
  };

  const removeItem = product => {
    setItems(
      items
        .map(item => {
          if (item.id === product.id) {
            // Aumentar el stock cuando se elimina un producto del carrito
            return { ...item, stock: item.stock + item.quantity };
          }
          return item;
        })
        .filter(p => p.id !== product.id)
    );
  };

  const clearCart = () => {
    setItems(
      items.map(item => {
        // Aumentar el stock cuando se elimina un producto del carrito
        return { ...item, stock: item.stock + item.quantity };
      })
    );
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
