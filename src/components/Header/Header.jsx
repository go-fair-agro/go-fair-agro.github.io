import logo from "../../assets/logo-go-fair-agro.png";
import "./header.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Header = () => {
    return(
      <Navbar style={{padding: "5px 4%"}} fixed="top" bg="white" expand="lg">
        <Navbar.Brand href="/"><img id="navbarLogo" src={logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <Nav.Link id="navBarLink" style={{color: "#E3BC26"}} href="#Manifesto">Manifesto</Nav.Link>
              <Nav.Link id="navBarLink" style={{color: "#E3BC26"}} href="#Implementação">Implementação</Nav.Link>
              <Nav.Link id="navBarLink" style={{color: "#E3BC26"}} href="#Oficinas">Ciclo de Oficinas</Nav.Link>
              <Nav.Link id="navBarLink" style={{color: "#E3BC26"}} href="#Publicações">Publicações</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}