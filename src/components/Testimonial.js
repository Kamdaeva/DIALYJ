import React from 'react'
import Container from 'react-bootstrap/Container';
import carte from '../assets/img/map-bg.png'
import profile from '../assets/images/profile/profile1.jpg'

const Testimonial = () => {
  return (
    <div style={{backgroundImage:`url(${carte})`, height:'400px' }}>
        <Container fluid >
            <Container className='mt-5 d-flex align-items-center justify-content-center w-100'>
                <div className='testimonial'>
                    <div>
                        <div className='slide d-flex align-items-center justify-content-center flex-column '>
                            <img src={profile} alt="" className='image'/>
                            <p>Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit. Facilis corrupti voluptas nemo 
                            voluptatum sunt illo alias exercitationem illum similique eaque.
                            </p>
                            <div>
                                <span className='fw-bold text-uppercase'>kamda eva</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Container>
    </div>
  )
}

export default Testimonial