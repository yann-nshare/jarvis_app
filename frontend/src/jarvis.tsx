import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Avatar from '@material-ui/core/Avatar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavDropdown,Navbar,Form, FormControl} from 'react-bootstrap';

function page_nav() {
  return (
    <div className="page_nav">
      <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand href="#home" className="my_color">
          <Avatar alt="Remy Sharp" src="logo.svg" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features" className="my_color">JARVIS</Nav.Link>
              <Nav.Link href="#features" className="my_color">Abonnement</Nav.Link>
              <Nav.Link href="#pricing" className="my_color">Pricing</Nav.Link>
              <Nav.Link href="#pricing" className="my_color">About us</Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown title="connection" id="collasible-nav-dropdown" className="my_color">
                <NavDropdown.Item href="#action/3.1" className="my_color">connection</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="my_color">creer compte</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    </div>
  )
}

export default page_nav;
