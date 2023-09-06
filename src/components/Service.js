import React from 'react'
import Hand from  '../assets/img/bxs-hand-right 1.svg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Service = () => {
  return (
    <>
    <Container className='my-5'>
    <Row className='mb-3'>
        <div className='d-flex flex-row mt-5 border-bottom'>
            <div className='fw-bold border-end pb-3 pe-5'><h2>Services</h2></div>
            <div className=' pt-3  ms-5'><h5>Consulter les documents</h5></div>
        </div>
    </Row>

    </Container>
     <Container  className='my-5'>
     <Row className='justify-content-around'>
         <Card  style={{ width: '450px', height: '200px' }} className='shadow'>
         <Row className='bg-primary text-center' style={{height: '70px'}}>
             <Col sm={3} className='pt-2 ps-2 bg' style={{background: '#1142A6'}}> 
             <img src={Hand} alt=""  style={{height: '45px', width: '45px',color:'white'}}/>
             </Col>
             <Col sm={9} className='pt-3  text-white fw-bold fs-4'>Appel à projets</Col>
         </Row>
         
         <Card.Body>
             <Card.Text className='text-start'>
             Un mécanisme innovant de promotion, d’accompagnement et de financement des initiatives 
             </Card.Text>
             
         </Card.Body>
         </Card>

         <Card  style={{ width: '450px', height: '200px' }} className='shadow'>
         <Row className='bg-primary text-center' style={{height: '70px'}}>
             <Col sm={3} className='pt-2 ps-2 bg' style={{background: '#1142A6'}}> 
             <img src={Hand} alt=""  style={{height: '45px', width: '45px',color:'white'}}/>
             </Col>
             <Col sm={9} className='pt-3  text-white fw-bold fs-4'>Modèles de business plan</Col>
         </Row>
         
         <Card.Body>
             <Card.Text className='text-start'>
             Un mécanisme innovant de promotion, d’accompagnement et de financement des initiatives 
             </Card.Text>
             
         </Card.Body>
         </Card>
     </Row>

     <Row className='justify-content-around mt-4'>
         <Card  style={{ width: '450px', height: '200px' }} className='shadow'>
         <Row className='bg-primary text-center' style={{height: '70px'}}>
             <Col sm={3} className='pt-2 ps-2 bg' style={{background: '#1142A6'}}> 
             <img src={Hand} alt=""  style={{height: '45px', width: '45px',}} id='hand'/>
             </Col>
             <Col sm={9} className='pt-3  text-white fw-bold fs-4'>Suivi De Financement</Col>
         </Row>
         
         <Card.Body>
             <Card.Text className='text-start'>
             Un mécanisme innovant de promotion, d’accompagnement et de financement des initiatives 
             </Card.Text>
             <Button variant="primary" className='float-start'>En Savoir Plus</Button>
         </Card.Body>
         </Card>

         <Card  style={{ width: '450px', height: '200px' }} className='shadow'>
         <Row className='bg-primary text-center' style={{height: '70px'}}>
             <Col sm={3} className='pt-2 ps-2 bg' style={{background: '#1142A6'}}> 
             <img src={Hand} alt=""  style={{height: '45px', width: '45px',color:'white'}}/>
             </Col>
             <Col sm={9} className=' pt-1  text-white fw-bold fs-5'>Résultat du première appel à projets</Col>
         </Row>
         
         <Card.Body>
             <Card.Text className='text-start'>
             Un mécanisme innovant de promotion, d’accompagnement et de financement des initiatives 
             </Card.Text>
             <Button variant="primary" className='float-start'>En Savoir Plus</Button>
         </Card.Body>
         </Card>
     </Row>
 </Container>
 </>
  )
}

export default Service