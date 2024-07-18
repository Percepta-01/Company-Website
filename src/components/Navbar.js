import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './Navbar.css';

function OffcanvasExample() {
  return (
    <Navbar expand="lg" className="navbar navbar-inverse navbar-fixed-top" id='navbar'>
      <Container>
        <Navbar.Brand href="#" className="text-white">BAUNFIRE</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" className="border-0">
        </Navbar.Toggle>
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
            <span className="text-white">      
                <Link className='link' to="/contact">LET'S TALK</Link> 
                 </span>
            <i className="fa-solid fa-bars fa-fade text-white fa-2xl"></i>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default OffcanvasExample;
