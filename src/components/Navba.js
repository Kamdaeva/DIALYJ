import React from 'react'
import Logo from '../assets/img/logo-dialyj.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Navba = () => {
  return (
    <header>
       <Container fluid className='py-2 shadow'fixed="top" >
        <Row>
          <Col md={4} className='d-flex justify-content-start'>
           <img src={Logo} alt="logo" style={{height: '70px', width: '90px',}}/> 
          </Col>
          <Col className='d-flex justify-content-end'>
          <Navbar expand="lg" >
            <Container fluid>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav variant="underline" defaultActiveKey="/home"
                  // className="me-auto my-2 my-lg-0"
                  // style={{ maxHeight: '100px' }}
                  // navbarScroll
                >
                  <Nav.Link href="/home">Accueil</Nav.Link>
                  <Nav.Link eventKey={1}>A Propos</Nav.Link>
                  <NavDropdown eventKey={2} title="Ressources" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Filieres</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Documents
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                       Picture
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link eventKey={3}>
                    Nous Contacter
                  </Nav.Link>
                  <Nav.Link eventKey={4}>
                    Statistiques
                  </Nav.Link>
                </Nav>
                <Button variant="primary">Connexion
               <BsFillArrowRightCircleFill/>
               </Button>{' '}
              </Navbar.Collapse>
           
            </Container>
          </Navbar>
            
          </Col>
        </Row>
    
     </Container>
           
            
    </header>
  )
}

export default Navba