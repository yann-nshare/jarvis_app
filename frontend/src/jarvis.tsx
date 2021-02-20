import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import Avatar from '@material-ui/core/Avatar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Dropdown,Navbar,Card, DropdownButton} from 'react-bootstrap';
import Body from './body';
import Footer from './footer';

function page_nav() {
  return (
    <div className="page_nav">
      <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand href="#home" className="my_color">
          <Navbar.Brand href="#home">
          <Avatar alt="Remy Sharp" src="images/jarvis_logo.png" />
          <h3>JARVIS</h3>        
          </Navbar.Brand>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features" className="my_color"></Nav.Link>
              <Nav.Link href="#features" className="my_color">Abonnement</Nav.Link>
              <Nav.Link href="#pricing" className="my_color">Pricing</Nav.Link>
              <Nav.Link href="#" className="my_color">About us</Nav.Link>
            </Nav>
            <Nav>
            <DropdownButton id="dropdown-basic-button" title="mon compte">
            <Dropdown.Item href="#/action-1">connection</Dropdown.Item>
            <Dropdown.Item href="#/action-2">creer compte</Dropdown.Item>
            </DropdownButton>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Body/>
        <Footer/>
    </div>
  )
}

export default page_nav;
