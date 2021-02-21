import React from 'react';
import Avatar from '@material-ui/core/Avatar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Dropdown,Navbar, DropdownButton} from 'react-bootstrap';
import {Link} from 'react-router-dom'

function home() {
  return (
    <div>
     <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand href="#home" className="my_color">
          <Navbar.Brand href="#home">
          <Link to="/">
          <Avatar alt="Jarvis Logo" src="jarvis_logo.png" />
          <h3>JARVIS</h3>        
          </Link>
          </Navbar.Brand>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#community" className="my_color"><Link to="/community">Community</Link></Nav.Link>
              <Nav.Link href="#pricing" className="my_color"><Link to="/pricing">Pricing</Link></Nav.Link>
              <Nav.Link href="#" className="my_color">About us</Nav.Link>
            </Nav>
            <Nav>
            <DropdownButton id="dropdown-basic-button" title="Account">
            <Dropdown.Item href="#/login"><Link to="/login">Log in</Link></Dropdown.Item>
            <Dropdown.Item href="#/register"><Link to="/register">Register</Link></Dropdown.Item>
            </DropdownButton>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    </div>
  )
}

export default home;