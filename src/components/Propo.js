import React from 'react'
import Logo from '../assets/img/logo-dialyj.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Propo = () => {
  return (
    <Container className='my-5'>
    <Row className='mb-3'>
      <Col sm={5} className='mt-5'>
      <img src={Logo} alt="logo" style={{height: '250px', width: '400px',}}/> 
      </Col>
      <Col sm={7}  style={{width: '700px'}}>
            <h2 className="mt-4 fw-bold text-start">A Propos</h2>
            <p className='text-start'>Un mécanisme innovant de promotion, d’accompagnement et de financement des initiatives d’industrialisation mises en place par
              les jeunes de la diaspora camerounaise, en coentreprise avec leurs 
              pairs locaux au Cameroun dans une logique de complémentarité des actions mises en œuvre,
              afin d’apporter une réponse multidimensionnelle aux problèmes 
              structurels en vue de l’atteinte des Objectifs du Développement Durable (ODD) et de ceux de
              la Stratégie Nationale de Développement 2020-2030 (SND-30).
            </p>
            <div className='float-start'>
            <Button variant="primary" >En Savoir Plus</Button>{' '}
            </div>
      </Col>
    </Row>
    
  </Container>
  )
}

export default Propo