import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ItemCount } from "./ItemCount";
import { Link } from "react-router-dom";

export function Item({ product }) {
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
        <div className="card-title">
          <ItemCount />
        </div>{" "}
      </Card.Body>
    </Card>
  );
}

// Define las PropTypes para Item
Item.propTypes = {
  product: PropTypes.shape({
    pictureUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
