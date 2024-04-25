import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { ItemCount } from "./ItemCount";
import { CartContext } from "../contexts/CartContext";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { id } = useParams();
  const navigate = useNavigate(); // Usar useNavigate en lugar de useHistory
  const { products } = useContext(CartContext);
  const productWithStock = products.find(p => p.id === id);

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

  const goBack = () => {
    navigate(-1); // Use navigate(-1) para ir a la página anterior
  };

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
      <h1>{product ? product.title : "No Product"}</h1>
      <img
        src={product ? product.pictureUrl : "#"}
        alt={product ? product.title : "No Product"}
      />
      <h5>{product ? product.description : "No Description Available"}</h5>
      <span className="card-title">
        <div className="span-stock">
          Stock: {productWithStock ? productWithStock.stock : "N/A"}
        </div>
        <div className="span-price">Precio: $ {Number(product.price)}</div>
        <ItemCount product={product} />
        <Button variant="primary" onClick={goBack} className="mt-3">
          Volver
        </Button>{" "}
      </span>
    </Container>
  );
};
