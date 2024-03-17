import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function HeaderNavbar(patch) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="home">Cabana Bâlea Lac</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://balealac.ro/">Home</Nav.Link>
            <Nav.Link href="https://balealac.ro/servicii-si-tarife/">
              Servicii si tarife
            </Nav.Link>
            <Nav.Link href="https://balealac.ro/contact/">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNavbar;
