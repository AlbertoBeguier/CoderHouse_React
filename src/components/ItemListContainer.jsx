import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";

export const ItemListContainer = ({ greeting }) => {
  return (
    <Container className="mt-4">
      <h4>{greeting}</h4>
    </Container>
  );
};

ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired,
};
