import React from 'react';
import Avatar from '@material-ui/core/Avatar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Dropdown,Navbar,Card, DropdownButton, Col, Button, Form} from 'react-bootstrap';
import Body from './body';
import Footer from './footer';

function connection_page(props: any) {
  return (
    <div className="navigationbar">
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="#home" className="my_color">
        <Navbar.Brand href="#home">
        <Avatar alt="Jarvis LOgo" src="jarvis_logo.png" />
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
      <body>
        <p>You want to :</p>
          <Button variant="contained" color="secondary">Log in</Button>
          <Button variant="contained" color="primary">Register</Button>
        <p>You are :</p>
          <Button variant="contained" color="secondary">A particular</Button>
          <Button variant="contained" color="primary">A professional</Button>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
      </body>
    </div>
  )
}

export default connection_page;