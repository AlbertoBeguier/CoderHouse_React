import { useState } from "react";

//! Variable que simula stock
let stock = 9;

export function ItemCount() {
  // Inicializo el estado "count" con un valor de 1
  const [count, setCount] = useState(1);

  // Función para incrementar el contador, asegurando de que no sea mayor al stock
  const increment = () => {
    setCount(count < stock ? count + 1 : count);
  };

  // Función para decrementar el contador, asegurando de que no sea menor a 1
  const decrement = () => {
    setCount(count > 1 ? count - 1 : count);
  };

  return (
    <>
      {/* Botón para decrementar */}
      <button className="button-inc-dec" onClick={decrement}>
        -
      </button>

      {/* Muestra el valor actual del contador */}
      <span>{count}</span>

      {/* Botón para incrementar */}
      <button className="button-inc-dec" onClick={increment}>
        +
      </button>

      {/* Botón para incrementar */}
      <button className="button-inc-dec">Agregar al carrito</button>
    </>
  );
}
