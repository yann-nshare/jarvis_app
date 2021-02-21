import React from 'react';
import Avatar from '@material-ui/core/Avatar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row,Col,Card, DropdownButton} from 'react-bootstrap';

function Community() {
  return (
    <Container>
  <Row>
    <Col xs={12} md={8}>
    <img className="d-block w-100" src="images/illustration-1.png" alt="Second slide"/>
    </Col>
    <Col xs={6} md={4}>
    <img className="d-block w-100" src="images/illustration-2.png" alt="Second slide"/>
    </Col>
  </Row>

  <Row>
    <Col xs={6} md={4}>
    <img className="d-block w-100" src="images/illustration-8.png" alt="Second slide"/>
    </Col>
    <Col xs={6} md={4}>
    <img className="d-block w-100" src="images/illustration-14.png" alt="Second slide"/>
    </Col>
    <Col xs={6} md={4}>
    <img className="d-block w-100" src="images/illustration-2.png" alt="Second slide"/>
    </Col>
  </Row>


  <Row>
    <Col xs={6}>
    <img className="d-block w-100" src="images/illustration-3.png" alt="Second slide"/>
    </Col>
    <Col xs={6}>
    <img className="d-block w-100" src="images/illustration-15.png" alt="Second slide"/>
    </Col>
  </Row>
</Container>
  )
}

export default Community;