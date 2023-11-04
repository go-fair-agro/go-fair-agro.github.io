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
              <Nav.Link id="navBarLink" style={{color: "#2D6D2C"}} href="https://go-fair-agro.github.io/#Manifesto">Manifesto</Nav.Link>
              <Nav.Link id="navBarLink" style={{color: "#2D6D2C"}} href="https://go-fair-agro.github.io/#Implementação">Implementação</Nav.Link>
              <Nav.Link id="navBarLink" style={{color: "#2D6D2C"}} href="https://go-fair-agro.github.io/trabalhos">Trabalhos apresentados</Nav.Link>
              <Nav.Link id="navBarLink" style={{color: "#2D6D2C"}} href="https://go-fair-agro.github.io/#Novidades">Novidades</Nav.Link>
              <Nav.Link id="navBarLink" style={{color: "#2D6D2C"}} href="https://go-fair-agro.github.io/#contactContainer">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}