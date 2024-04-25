import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { ItemDetail } from "./ItemDetail";
import { CartContext } from "../contexts/CartContext";
import Spinner from "react-bootstrap/Spinner";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { id } = useParams();
  const { products } = useContext(CartContext);
  useEffect(() => {
    setLoading(true);
    const foundProduct = products.find(product => product.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      setError("Producto no encontrado");
    }
    setLoading(false);
  }, [id, products]);
  if (loading) {
    return (
      <Container
        className="mt-4 d-flex justify-content-center align-items-center"
        style={{ height: "50vh", flexDirection: "column" }}
      >
        <Spinner animation="border" role="status" />
        <span className="mt-3">Cargando Producto...</span>
      </Container>
    );
  }
  if (error) {
    return <Container className="mt-4">{error}</Container>;
  }
  return (
    <Container className="container-producto">
      <ItemDetail product={product} />
    </Container>
  );
};
