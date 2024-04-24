import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, collection } from "firebase/firestore";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]); // Ajustado a un arreglo vacío
  const [loading, setLoading] = useState(true); // Nuevo estado para la carga
  const [error, setError] = useState(""); // Nuevo estado para el error
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    const db = getFirestore(); // Inicializamos la base de datos
    const refCollection = collection(db, "items"); // Referencia a la colección completa de la BD

    getDocs(refCollection)
      .then(snapShot => {
        if (snapShot.size === 0) {
          console.log("No hay resultados");
          setError(
            "No se pudieron cargar los productos. Por favor, intenta de nuevo más tarde."
          );
        } else {
          let data = snapShot.docs.map(doc => {
            return { id: doc.id, ...doc.data() };
          });

          if (id) {
            data = data.filter(product => product.category === id);
          }

          const productsWithStock = data.map(product => ({
            ...product,
            stock: product.stock,
          }));

          setProducts(productsWithStock);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setError(
          "No se pudieron cargar los productos. Por favor, intenta de nuevo más tarde."
        );
        setLoading(false);
      });
  }, [id]);

  // Aquí ajusto la lógica para el título dinámico según si estoy en Home o en una categoría específica
  let title;
  if (!id) {
    title = "Todos los Productos";
  } else {
    title =
      id === "AudioYTv"
        ? "Todos los productos de Audio y TV"
        : id === "Computer"
        ? "Todos los productos de Computación"
        : id === "SmartPhone"
        ? "Todos los Smartphones"
        : "Categoría no encontrada";
  }

  if (loading) {
    return (
      <Container
        className="mt-4 d-flex justify-content-center align-items-center"
        style={{ height: "50vh", flexDirection: "column" }}
      >
        <Spinner animation="border" role="status"></Spinner>
        <span className="mt-3">Cargando Productos...</span>{" "}
      </Container>
    );
  }
  if (error) {
    return <Container className="mt-4">{error}</Container>;
  }

  return (
    <Container className="mt-4">
      <ItemList products={products} title={title} />
    </Container>
  );
};
