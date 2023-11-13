import {
  
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Header = () => {
  return (
    <Navbar bg="info"  expand="lg" variant="light" >
      <Container>
        <Navbar.Brand href="/">
          <Link to="/">
         
          React-Bootstrap
           
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            
          </Form>
          </Nav>
          <Nav>
            <Nav.Link href="/mynotes">
              <Link to="/mynotes">
               My Notes
              </Link>
            </Nav.Link>
            
            <NavDropdown title="Slayer" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
              
              
              <NavDropdown.Item href="#action/3.4">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
