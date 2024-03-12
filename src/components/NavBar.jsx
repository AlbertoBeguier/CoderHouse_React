import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="align-items-center">
        <Container className="justify-content-center justify-content-lg-between">
          <div className="logo-NavBar">
            <img
              src={logo}
              width="35"
              height="35"
              className="d-inline-block align-top"
              alt="logo"
            />
          </div>
          <div className="d-none d-sm-block logo-NavBar">
            <Navbar.Brand href="#" className="letter_brand ">
              e-electronic
            </Navbar.Brand>
          </div>
          <Nav className="justify-content-center flex-grow-1 pe-3">
            <Nav.Link href="#" className="letters_links">
              Audio y TV
            </Nav.Link>
            <Nav.Link href="#" className="letters_links">
              Computación
            </Nav.Link>
            <Nav.Link href="#" className="letters_links">
              Smartphones
            </Nav.Link>
          </Nav>
          <div className="ms-auto">
            <CartWidget />
          </div>
        </Container>
      </Navbar>
    </>
  );
};
