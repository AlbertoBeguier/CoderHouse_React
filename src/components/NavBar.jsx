import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";
import { CartWidget } from "./CartWidget";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

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
            <Navbar.Brand className="letter_brand ">
              <Link
                to="/"
                className="nav-link"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                e-electronic
              </Link>
            </Navbar.Brand>
          </div>
          <Nav className="justify-content-center flex-grow-1 pe-3">
            <Nav.Link
              to="/category/AudioYTv"
              className="letters_links"
              as={NavLink}
            >
              Audio y TV
            </Nav.Link>
            <Nav.Link
              to="/category/Computer"
              className="letters_links"
              as={NavLink}
            >
              Computación
            </Nav.Link>
            <Nav.Link
              to="/category/SmartPhone"
              className="letters_links"
              as={NavLink}
            >
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
