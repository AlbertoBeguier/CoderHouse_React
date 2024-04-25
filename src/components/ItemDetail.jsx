import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { ItemCount } from "./ItemCount";
import { CartContext } from "../contexts/CartContext";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

export const ItemDetail = ({ product }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products } = useContext(CartContext);
  const productWithStock = products.find(p => p.id === id);
  const goBack = () => {
    navigate(-1);
  };

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
          {productWithStock && productWithStock.stock > 0 ? (
            `Stock: ${productWithStock.stock}`
          ) : (
            <span className="span-sin-stock">Sin Stock</span>
          )}
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
ItemDetail.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    pictureUrl: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
  }),
};
