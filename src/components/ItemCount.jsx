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

      <span>{count}</span>

      {/* Botón para incrementar */}
      <button className="button-inc-dec" onClick={increment}>
        +
      </button>
      <div>
        {/* Botón para incrementar */}
        <button className="button-inc-dec-1">Agregar al carrito</button>
      </div>
    </>
  );
}
