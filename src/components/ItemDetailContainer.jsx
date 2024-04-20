import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { ItemCount } from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import data from "../data/products.json";
import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { id } = useParams();
  const navigate = useNavigate(); // Usar useNavigate en lugar de useHistory
  const { products } = useContext(CartContext);
  const productWithStock = products.find(p => p.id === Number(id));

  useEffect(() => {
    const getProduct = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const foundProduct = data.find(product => product.id === Number(id));
          if (foundProduct) {
            resolve(foundProduct);
          } else {
            reject("Producto no encontrado");
          }
        }, 2000);
      });
    };

    getProduct()
      .then(product => {
        setProduct(product);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setError(error);
        setLoading(false);
      });
  }, [id]);

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
