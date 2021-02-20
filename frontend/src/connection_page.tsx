import React from 'react';
import { Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar'
import TextField from '@material-ui/core/TextField';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavDropdown,Navbar,Form, FormControl} from 'react-bootstrap';

function connection_page(props: any) {
  return (
    <div className="page_nav">
      <Navbar collapseOnSelect expand="lg">
        <div id="conteneur">
          <Avatar id="menu_logo" alt="Jarvin Logo" src="jarvis_logo.png" />
          <Button id="home_button" aria-controls="simple-menu" aria-haspopup="true">Home</Button>
          <Button id="contact_button" aria-controls="simple-menu" aria-haspopup="true">Contact</Button>
          <Button id="connection_button" aria-controls="simple-menu" aria-haspopup="true">Log in / Register</Button>
				</div>
      </Navbar>
      <body>
        <p>You want to :</p>
          <Button variant="contained" color="secondary">Log in</Button>
          <Button variant="contained" color="primary">Register</Button>
        <p>You are :</p>
          <Button variant="contained" color="secondary">A particular</Button>
          <Button variant="contained" color="primary">A professional</Button>
        <article>
          <p>First name :</p>
          <TextField id="filled-basic" label="First name" variant="filled" />
          <p>Last name :</p>
          <TextField id="filled-basic" label="Last Name" variant="filled" />
          <p>E-mail :</p>
          <TextField id="filled-basic" label="E-mail" variant="filled" />
          <p>Username :</p>
          <TextField id="filled-basic" label="Username" variant="filled" />
        </article>
      </body>
    </div>
  )
}

export default connection_page;