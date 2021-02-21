import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card} from 'react-bootstrap';

/*html se connect a un compte "login page"
*/
function About(props: any) {
  return (
    <>
        <Card>
          <Card.Img variant="top" src="images/Super-Community-by-Hurca--for-Hiwow-on-Dribbble-1.png" />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
              of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <Card.Body>
            <Card.Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
            PageMaker including versions of Lorem Ipsum.
            </Card.Text>
          </Card.Body>
        </Card>
    </>
  )
}

export default About;