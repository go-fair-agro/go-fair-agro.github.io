import logo from "../../assets/logo-go-fair-agro.png";
import "./worksHeader.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const Header = () => {
    return(
      <Navbar style={{padding: "5px 4%"}} fixed="top" bg="white" expand="lg">
        <Navbar.Brand href="/"><img id="navbarLogo" src={logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <Nav.Link id="navBarLink" style={{color: "#2D6D2C"}} href="#Oficinas">Oficinas</Nav.Link>
              <Nav.Link id="navBarLink" style={{color: "#2D6D2C"}} href="#Publicações">Publicações</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}