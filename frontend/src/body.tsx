import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from '@material-ui/core/Avatar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Figure, Container, Row,Col, Carousel, Card, Jumbotron, Button, Alert} from 'react-bootstrap';

function Body() {
    return (
      <Container>
          <Row>
          <Col>
          <Figure>
              <Figure.Image
                width={1080}
                height={1080}
                alt=""
                src="homepage.jpg"
              />
              
        </Figure>
        </Col>
        <Col>
          <Figure.Caption>
            <h2 className = "h2_title">
              Welcome to JARVIS, you want to fix something, JARVIS can do it for
               you
            </h2>
          
              </Figure.Caption>
          </Col>
          </Row>
          
          <Alert variant="success">
              <Alert.Heading>Hey, nice to see you</Alert.Heading>
              <p>
                Aww yeah, you successfully read this important alert message. This example
                text is going to run a bit longer so that you can see how spacing within an
                alert works with this kind of content.
              </p>
              <hr />
              <p className="mb-0">
                Whenever you need to, be sure to use margin utilities to keep things nice
                and tidy.
              </p>
            </Alert>

          <Carousel>
                  <Carousel.Item interval={1000}>
                  <Container>
                        <Row>
                            <Col><img className="d-block w-100" src="images/at-worker.svg" alt="Second slide"/></Col>
                            <Col><img className="d-block w-100" src="images/processing.svg" alt="Second slide"/></Col>
                          </Row>
                  </Container>
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={500}>
                      <Container>
                          <Row>
                            <Col><img className="d-block w-100" src="images/statistics.svg" alt="Second slide"/></Col>
                          </Row>
                      </Container>
                    
                    <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                      <Container>
                        <Row>
                            <Col><img className="d-block w-100" src="images/windows.svg" alt="Second slide"/></Col>
                          </Row>
                      </Container>
                    <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
        </Carousel>


        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
        </Container>
        

    )
  }


export default Body;