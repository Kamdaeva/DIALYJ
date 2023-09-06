import React from 'react'
import Container from 'react-bootstrap/Container';
import {Card} from 'react-bootstrap'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import site from '../assets/img/site-pub.png'
import slide2 from '../assets/img/Slide2.jpg'
import slide3 from '../assets/img/slide3.jpg'
import slide4 from '../assets/img/slide4.jpg'
import slide5 from '../assets/img/slide5.jpg'



const Actualite = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
    
  return (
    <>
  
    <div>
        <Container className='mt-5'>
        <div>
            <h1 className='text-center fw-bold'>Actualités</h1>
        </div>
        </Container>
        <Container>
        <div>
        <Carousel responsive={responsive}>
        <div>
          <Card style={{ width: '24rem' }} className='m-2'>
            <div>
              <Card.Img variant='top' src={slide4} />
            </div>
            <Card.Body className='text-start'>
              <h3 class="name">Avicole</h3>
              <p class="job">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem IpsumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."</p>
            </Card.Body>
   
        </Card>
        </div>
        <div>
          <Card style={{ width: '24rem' }} className='m-2'>
            <div >
              <Card.Img variant='top' src={slide5} />
            </div>
            <Card.Body className='text-start'>
              <h3 class="name">Avicole</h3>
              <p class="job">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem IpsumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."</p>
            </Card.Body>
           
         </Card>
        </div>
        <div>
        <Card style={{ width: '24rem' }} className='m-2'>
          <div >
             <Card.Img variant='top' src={site} />
          </div>
          <Card.Body className='text-start'>
          <h3 class="name">Avicole</h3>
                  <p class="job">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem IpsumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."</p>
          </Card.Body>
          
       </Card>
        </div>
        <div>
        <Card style={{ width: '24rem' }}  className='m-2'>
          <div >
             <Card.Img variant='top' src={slide2} />
          </div>
          <Card.Body className='text-start'>
            <h3 class="name">Avicole</h3>
            <p class="job">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem IpsumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."</p>
          </Card.Body>
          
       </Card>
        </div>
        <div>
        <Card style={{ width: '24rem' }} className='m-2' >
          <div >
             <Card.Img variant='top' src={slide3} />
          </div>
          <Card.Body className='text-start'>
          <h3 class="name">Avicole</h3>
                  <p class="job">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem IpsumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."</p>
          </Card.Body>
          
       </Card>
        </div>
      
      </Carousel>
        </div>
        </Container>
        

    </div>
   
    </>
  )
}

export default Actualite