import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

import { Link } from "react-router-dom";

export function Item({ product }) {
  const { products } = useContext(CartContext);
  const productWithStock = products.find(p => p.id === product.id);
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img
        className="image-container"
        variant="top"
        src={product.pictureUrl}
        alt={product.title}
      />
      <Card.Body>
        <Card.Title className="card-title">{product.title}</Card.Title>
        <Card.Text as="div">
          <div className="card-price">Precio: $ {Number(product.price)}</div>
          <div className="card-stock">
            {productWithStock && productWithStock.stock > 0 ? (
              `Stock: ${productWithStock.stock}`
            ) : (
              <span className="span-sin-stock">Sin Stock</span>
            )}
          </div>
          <br />
        </Card.Text>
        <div className="card-button-container">
          <Link to={`/item/${product.id}`}>
            <Button className="card-button" variant="primary">
              Ver características
            </Button>
          </Link>
        </div>
        <br />
      </Card.Body>
    </Card>
  );
}
Item.propTypes = {
  product: PropTypes.shape({
    pictureUrl: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
