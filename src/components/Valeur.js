import React from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import site from '../assets/img/site-pub.png'
import slide4 from '../assets/img/slide4.jpg'
import slide5 from '../assets/img/slide5.jpg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Valeur = () => {
  return (
    <Container className='my-5'>
    <div className="d-flex justify-content-around">
        <Card style={{ width: '24rem' }} className='shadow' >
        <Card.Img variant="top" src={site} />
        <Card.Body>
            <div>
            <Row>
                <Col sm={8}>
                   <Card.Title className='text-start fw-bold'>PROMOTION</Card.Title>
                    <Card.Text className='text-start'>
                    Description
                    </Card.Text>
                </Col>
                <Col sm={4} className='opacity-25 fs-2 text-end'>01</Col>
            </Row>
            </div>
           
        </Card.Body>
        </Card>
        <Card style={{ width: '24rem' }} className='shadow'>
        <Card.Img variant="top" src={slide4} />
        <Card.Body>
            <div>
            <Row>
              
                <Col sm={8}>
                   <Card.Title className='text-start fw-bold'>INNOVATION</Card.Title>
                    <Card.Text className='text-start'>
                    Description
                    </Card.Text>
                </Col>
                <Col sm={4} className='opacity-25 fs-2 text-end'>02</Col>
            </Row>
            </div>
           
        </Card.Body>
        </Card>
        <Card style={{ width: '24rem' }} className='shadow'>
        <Card.Img variant="top" src={slide5} />
        <Card.Body>
            <div>
            <Row>
                <Col sm={8}>
                   <Card.Title className='text-start fw-bold'>ACCOMPAGNEMENT</Card.Title>
                    <Card.Text className='text-start'>
                    Description
                    </Card.Text>
                </Col>
                <Col sm={4} className='opacity-25 fs-2 text-end'>03</Col>
            </Row>
            </div>
           
        </Card.Body>
        </Card>


    </div>
</Container>
  )
}

export default Valeur