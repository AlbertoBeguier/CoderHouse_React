import PropTypes from "prop-types";
import { Item } from "./Item";
import { Container, Row, Col } from "react-bootstrap";
import "./ItemList.css";

export const ItemList = ({ products, title }) => {
  return (
    <Container>
      <hr />
      <h3>{title} </h3>
      <hr />
      <br />
      <Row>
        {products.map(product => (
          <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
            <Item key={product.id} product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

// Definición de PropTypes para ItemList
ItemList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      pictureUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};
