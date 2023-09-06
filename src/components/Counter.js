import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsCheck2Square } from "react-icons/bs";
import { BsPeople} from "react-icons/bs";
import { BsUnion} from "react-icons/bs";
import { BsPerson} from "react-icons/bs";

const Counter = () => {
  return (
    <Container fluid className='bg-primary my-5 text-white uppercase '>
        <Container className='bg-primary' style={{height: '220px'}}>
            <Row>
            <Col>
              <div className='counter-box'>
                <BsCheck2Square className='fs-1 mb-3'/>
                <span className='counter'>100</span>
                <p>NOMBRE DE PROJETS  </p>
              </div>
            </Col>
            <Col>
               <div className='counter-box'>
                <BsPeople className='fs-1 mb-3'/>
                <span className='counter'>3275</span>
                <p>JEUNES LOCAUX</p>
               </div>
            </Col>
            <Col>
               <div className='counter-box'>
                <BsUnion className='fs-1 mb-3'/>
                <span className='counter'>289</span>
                <p>JOIN VENTURE </p>
               </div>
            </Col>
            <Col>
              <div className='counter-box'>
                <BsPerson className='fs-1 mb-3'/>
                <span className='counter'>1563</span>
                <p>JEUNES DE LA DIASPORA</p>
               </div>
            </Col>
            </Row>
        </Container>
    </Container>
  )
}

export default Counter