import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data/products.json";
import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null); //  Algo vacío que tendrá un objeto
  const [loading, setLoading] = useState(true); // Nuevo estado para la carga
  const [error, setError] = useState(""); // Nuevo estado para el error
  const { id } = useParams();

  useEffect(() => {
    const getProduct = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const success = true; // Simula el éxito o fracaso de la llamada (false --> fracaso)
          if (success) {
            resolve(data); // Respuesta exitosa
          } else {
            reject("Error al cargar el producto"); // Simula un error
          }
        }, 2000);
      });
    };

    getProduct()
      .then(data => {
        if (id) {
          data = data.find(product => product.id === Number(id));
        }
        setProduct(data); // Manejo de la respuesta exitosa
        setLoading(false); // Indica que la carga ha terminado
      })
      .catch(error => {
        console.error(error); // Mantener el log en la consola para debugging
        setError(
          "No se pudieron cargar los productos. Por favor, intenta de nuevo más tarde."
        ); // Actualiza el estado de error
        setLoading(false); // Indica que la carga ha terminado
      });
  }, [id]);

  if (loading) {
    return (
      <Container
        className="mt-4 d-flex justify-content-center align-items-center"
        style={{ height: "50vh", flexDirection: "column" }}
      >
        <Spinner animation="border" role="status"></Spinner>
        <span className="mt-3">Cargando Producto...</span>{" "}
      </Container>
    );
  }
  if (error) {
    return <Container className="mt-4">{error}</Container>;
  }

  return (
    <Container className="container-producto">
      <h1>{product.title} </h1>
      <img src={product.pictureUrl} alt={product.title} />
      <h5>{product.description} </h5>
    </Container>
  );
};
