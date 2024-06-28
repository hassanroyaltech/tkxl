import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
 
   
    
    const Navigation = () => {
      return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto gap-3">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/functional">Functional Component</Nav.Link>
                <Nav.Link as={Link} to="/class">Class Component</Nav.Link>
                <Nav.Link as={Link} to="/form">Form Component</Nav.Link>
                <Nav.Link as={Link} to="/state">Functional with Hook Component</Nav.Link>
                <Nav.Link as={Link} to="/hoc">High Order</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    };
    
    export default Navigation;
 