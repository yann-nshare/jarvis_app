import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Button, Form} from 'react-bootstrap';

function Login_page(props: any) {
  return (
    <div className="navigationbar">
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
              <br/>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
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

export default Login_page;