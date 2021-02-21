import React from 'react';
import Avatar from '@material-ui/core/Avatar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col,Navbar,Card, Container, CardDeck,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'


function Abonnement() {
  return (
          <CardDeck>
            <Container>
          <Row>
            <Col><Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
            <Link to="/Buy">
            <Button variant="primary" type="submit">
              Submit
            </Button>
            </Link>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"><h3>90$</h3></small>
          </Card.Footer>
        </Card></Col>

            <Col xs={6}><Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional
              content.{' '}
            </Card.Text>
            <Link to="/Buy">
            <Button variant="primary" type="submit">
              Submit
            </Button>
            </Link>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"><h3>100$</h3></small>
          </Card.Footer>
        </Card>(wider)</Col>
        
            <Col><Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
            <Link to="/Buy">
            <Button variant="primary" type="submit">
              Submit
            </Button>
            </Link>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"><h3>200$</h3></small>
          </Card.Footer>
        </Card></Col>
          </Row>

          <Row>
            <Col><Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
            <Link to="/Buy">
            <Button variant="primary" type="submit">
              Submit
            </Button>
            </Link>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"><h3>300$</h3></small>
          </Card.Footer>
        </Card>3</Col>

            <Col xs={5}><Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
            <Link to="/Buy">
            <Button variant="primary" type="submit">
              Submit
            </Button>
            </Link>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"><h3>400$</h3></small>
          </Card.Footer>
        </Card></Col>

            <Col><Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
            <Link to="/Buy">
            <Button variant="primary" type="submit">
              Submit
            </Button>
            </Link>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"><h3>500$</h3></small>
          </Card.Footer>
        </Card></Col>
          </Row>
        </Container>

        
        
        
        
      </CardDeck>

      

      
  )
}

export default Abonnement;