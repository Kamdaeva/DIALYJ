import React from 'react'
import Logo from '../assets/img/logo-dialyj.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';



const Footer = () => {
  return (
    <footer className='border-top mt-5 ' style={{background: '#0452F0', height: '380px'}}>
    <Container fluid>
        <Row>
            <Container className='align-items-center justify-content-center text-white p-5 ms-5'>
                <Row>
                <Col>
                <div className='d-block text-start'>
                <h3>Accès Rapide</h3>
                <ListGroup.Item className='px-2 text-white'><a href="/#"><span className='ps-2 text-white text-start'>Accuiel</span> </a></ListGroup.Item>
                <ListGroup.Item className='px-2 text-white'><a href="/#"><span className='ps-2 text-white'>Contact</span> </a></ListGroup.Item>
                <ListGroup.Item className='px-2 text-white'><a href="/#"><span className='ps-2 text-white '>Projet</span> </a></ListGroup.Item>
                <ListGroup.Item className='px-2 text-white'><a href="/#"><span className='ps-2 text-white '>MINJEC</span> </a></ListGroup.Item>
                <ListGroup.Item className='px-2 text-white'><a href="/#"><span className='ps-2 text-white'>Pari jedi</span> </a></ListGroup.Item>

                </div>
               
                </Col>
                <Col>
                <div className='d-block text-start'>
                <h3>Contactez-nous</h3>
                <ListGroup.Item className='px-2 text-white'><a href="/#"><span className='ps-2 text-white text-start'>FAQ</span> </a></ListGroup.Item>
                <ListGroup.Item className='px-2 text-white'><a href="/#"><span className='ps-2 text-white'>Documentation</span> </a></ListGroup.Item>
                <ListGroup.Item className='px-2 text-white'><a href="/#"><span className='ps-2 text-white '>Supports</span> </a></ListGroup.Item>
                <ListGroup.Item className='px-2 text-white'><a href="/#"><span className='ps-2 text-white '>Galerie</span> </a></ListGroup.Item>
                </div>
                </Col>
                <Col className='pt-5'>
                <div className='d-block text-start '>
                
                <ListGroup.Item className='px-2 text-white'><a href="/#"><span className='ps-2 text-white text-start'>Facebook</span> </a></ListGroup.Item>
                <ListGroup.Item className='px-2 text-white'><a href="/#"><span className='ps-2 text-white'>Linkedin</span> </a></ListGroup.Item>
                <ListGroup.Item className='px-2 text-white'><a href="/#"><span className='ps-2 text-white '>Youtube</span> </a></ListGroup.Item>
                <ListGroup.Item className='px-2 text-white'><a href="/#"><span className='ps-2 text-white '>Notifications</span> </a></ListGroup.Item>
                <ListGroup.Item className='px-2 text-white'><a href="/#"><span className='ps-2 text-white'>Newsletters</span> </a></ListGroup.Item>

                </div>
                </Col>
                <Col className='p-5'><img src={Logo} alt="logo" style={{height: '120px', width: '120px',}}/> </Col>
                </Row>
            </Container>
            <div className='border-top mt-3' style={{color: '#bfbfbf4f'}}>
                <Container>
                    <div className='d-flex text-white justify-content-center mt-2'>
                        <div className="text-center"><p>©2021 ITE experts. Tous droits reservé</p></div>
                        <div className="mx-2"><Button className='bg-white text-dark'>FR</Button></div>
                    </div>
                </Container>
            </div>
        </Row>
    </Container>

</footer>
  )
}

export default Footer