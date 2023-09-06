import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import slide from '../assets/img/Slide.jpg'
import slide2 from '../assets/img/Slide2.jpg'
import slide3 from '../assets/img/slide3.jpg'
import slide4 from '../assets/img/slide4.jpg'
import slide5 from '../assets/img/slide5.jpg'
import Accordion from 'react-bootstrap/Accordion';
import { Button } from 'react-bootstrap';


const Header = () => {
  return (
    <Container fluid className=' py-1 '>
    <Row id='one'>
      <Col xl={9} className='d-flex justify-content-start'id='first'>
      <Carousel slide className='slide'>
      <Carousel.Item>
        <img
          className=""
          src={slide}
          alt="First slide"
          style={{height: '500px', width: '1300px'}}
        />
        <Carousel.Caption>
        <h5>Démarrer votre nouveau projet  avec DIALYJ</h5>
        <p>dispositif innovant d’accompagnement et de facilitation.</p>
        <Button className='mb-5 fw-5'>Nous contacter</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=""
          style={{height: '500px', width: '1300px'}}
          src={slide2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Laitière</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=""
          src={slide3}
          alt="Third slide"
          style={{height: '500px', width: '1300px'}}
        />
        <Carousel.Caption>
          <h5>TEXTILE</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=""
          src={slide4}
          alt="Third slide"
          style={{height: '500px', width: '1300px'}}
        />
        <Carousel.Caption>
          <h5> AVICOLE </h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=""
          src={slide5}
          alt="Third slide"
          style={{height: '500px', width: '1300px'}}
        />
        <Carousel.Caption>
          <h5>HALIEUTIQUE</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </Col>
      <Col xl={3} className='justify-content-center pt-3'>
       <h2>Actualités</h2>
      <Accordion >
      <Accordion.Item eventKey="0">
        <Accordion.Header>Titre1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
         rum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Titre2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
         
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header> Titre3</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
         
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </Col>
    </Row>
  </Container>
  )
}

export default Header