import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image } from 'react-bootstrap';

function Profile_page(props: any) {
  return (
    <div className="navigationbar">
      <body>
      <Container>
        <Row>
          <Col xs={2} md={4}>
            <Image src="man.jpg" roundedCircle width="75%" />
          </Col>
          <Col xs={12} md={8}>
            <article>
              <h1>- TonyC42 -</h1>
              <h2>It remains you 2 prestations !</h2>
              <h3>First Name : Tony</h3>
              <h3>Last Name : Cascada</h3>
              <h3>E-mail : exampl@mail.com</h3>
              <h3>Password : ************</h3>
              <h3>Formule : Premium</h3>
            </article>
          </Col>
        </Row>
    </Container>
      </body>
    </div>
  )
}

export default Profile_page;