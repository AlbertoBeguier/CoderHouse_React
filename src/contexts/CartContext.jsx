import { createContext, useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import { getFirestore, getDocs, collection } from "firebase/firestore";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState([]); // Nuevo estado para los productos

  useEffect(() => {
    const db = getFirestore(); // Inicializamos la base de datos
    const refCollection = collection(db, "items"); // Referencia a la colección completa de la BD

    getDocs(refCollection)
      .then(snapShot => {
        if (snapShot.size === 0) {
          console.log("No hay resultados");
        } else {
          let data = snapShot.docs.map(doc => {
            return { id: doc.id, ...doc.data() };
          });

          const productsWithStock = data.map(product => ({
            ...product,
            stock: product.stock,
          }));

          setProducts(productsWithStock);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

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

  const removeItem = productToRemove => {
    setItems(prevItems => {
      const existingProduct = prevItems.find(
        item => item.id === productToRemove.id
      );

      if (existingProduct.quantity > 1) {
        // Si la cantidad del producto es mayor a 1, disminuir la cantidad en uno
        return prevItems.map(item =>
          item.id === productToRemove.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        // Si la cantidad del producto es 1, eliminar el producto del carrito
        return prevItems.filter(item => item.id !== productToRemove.id);
      }
    });

    // Aumentar el stock del producto en uno
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productToRemove.id
          ? { ...product, stock: product.stock + 1 }
          : product
      )
    );
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
