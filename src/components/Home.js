import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";

const Home = () => {
  return (
    <Container fluid className='bg-primary py-2'>
    <Row>
      <Col md={4} className='d-flex'>
     
      <ListGroup.Item className='px-2 text-white'><BsFacebook/></ListGroup.Item>
      <ListGroup.Item className='px-2 text-white'><BsWhatsapp/></ListGroup.Item>
      <ListGroup.Item className='px-2 text-white'><BsInstagram/></ListGroup.Item>
   
      </Col>
      <Col md={{ span: 4, offset: 4 }} className='d-flex justify-content-end'>
      <ListGroup.Item className='px-2 text-white'><FiPhone/><a href="tel:+23790551993"><span className='ps-2 text-white'>690 551 993</span> </a></ListGroup.Item>
      <ListGroup.Item className='px-2 text-white'><BsEnvelope/><a href="mailto:kamdaeva@gmail.com"><span className='ps-2 text-white'>dialyj@gmail.com</span> </a></ListGroup.Item>
      
      </Col>
    </Row>
    </Container>
  )
}

export default Home