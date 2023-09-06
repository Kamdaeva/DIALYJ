import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Container from 'react-bootstrap/Container';
import logo1 from '../assets/img/logo-minjec.jpg'
import logo2 from '../assets/img/fonij.jpg'
import logo3 from '../assets/img/oim.png'
import logo4 from '../assets/img/unesco.png'
import logo5 from '../assets/img/onj.png'
import logo6 from '../assets/img/parijedi.jpg'
import logo7 from '../assets/img/pts-jeunes.jpg'



const Partenaire = () => {
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
    <div>
        <Container className='mt-5 p-2'>
            <div>
                <h1 className='text-center fw-bold'>Partenaires</h1>
            </div>
        </Container>
        <Container>
        <Carousel responsive={responsive}>
        <div>
          <img src= {logo1} alt=''/>
        </div>
        <div>
          <img src= {logo2} alt=''/>
        </div>
        <div>
          <img src= {logo3} alt=''/>
        </div>
        <div>
          <img src= {logo4} alt=''/>
        </div>
        <div>
          <img src= {logo5} alt=''/>
        </div>
        <div>
          <img src= {logo6} alt=''/>
        </div>
        <div>
          <img src= {logo7} alt=''/>
        </div>
      </Carousel>
      </Container>
        

    </div>
  )
}

export default Partenaire