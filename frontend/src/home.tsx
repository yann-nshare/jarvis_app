import React from 'react';
import Avatar from '@material-ui/core/Avatar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Dropdown,Navbar,Card, DropdownButton} from 'react-bootstrap';
import Body from './body';
import Footer from './footer';
import {BrowserRouter, Link} from 'react-router-dom'

function home() {
  return (
    <div>
     <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand href="#home" className="my_color">
          <Navbar.Brand href="#home">
          <Link to="/">
          <Avatar alt="Remy Sharp" src="images/jarvis_logo.png" />
          <h3>JARVIS</h3>        
          </Link>
          </Navbar.Brand>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#Community" className="my_color"><Link to="/Community">Community</Link></Nav.Link>
              <Nav.Link href="#pricing" className="my_color"><Link to="/pricing">pricing</Link></Nav.Link>
              <Nav.Link href="#" className="my_color">About us</Nav.Link>
            </Nav>
            <Nav>
            <DropdownButton id="dropdown-basic-button" title="mon compte">
            <Dropdown.Item href="#/connection"><Link to="/connection">connection</Link></Dropdown.Item>
            <Dropdown.Item href="#/cree compte"><Link to="/connection">cree compte</Link></Dropdown.Item>
            </DropdownButton>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        
    </div>
  )
}

export default home;