import React from 'react';
import './testimonial.css';
import { Container,Row,Col } from 'reactstrap';
import img from '../../assests/images/testimonial01.png';
import img1 from '../../assests/images/accounting-business-accountant-customer-service-business-b0c6b96ad247870f4a90f5a766160213.png';
import Slider from "react-slick";


const Testimonials = () => {

    const settings={
        infinite: true,
        dots:true,
        speed: 500,
        slidesToShow: 1,
        autoplay:true,
        autoplaySpeed:3000,
        slidesToScroll: 1
    }
  return (
   <>
   <section>
      <Container>
        <Row>
            <Col lg='8' className='m-auto'>
                <div className='testimonial__wrapper d-flex justify-content-between align-items-center'>
                    <div className='testimonial__img w-50'>
                        <img src={img1} alt='' className='w-100'/>
                    </div>
                    <div className='testimonial__content w-50'>
                        <h2 className='mb-4'>Our Students Voice</h2>
                        <Slider  {...settings}>
                            <div>
                            <div className='single__testimonial'>
                                <h6 className='mb-3 fw-bold'>Excellent course of materials</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                   Aut saepe voluptatum earum delectus deserunt id iste, quas officiis et repellat!</p>
                          
                            <div className='student__info mt-4'>
                                <h6 className='fw-bold'>Farh Faha</h6>
                                <p>California, United State</p>
                                </div>

                            </div>
                            </div>

                            <div>
                            <div className='single__testimonial'>
                                <h6 className='mb-3 fw-bold'>Excellent course of materials</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                   Aut saepe voluptatum earum delectus deserunt id iste, quas officiis et repellat!</p>
                          
                            <div className='student__info mt-4'>
                                <h6 className='fw-bold'>Farh Faha</h6>
                                <p>California, United State</p>
                                </div>

                            </div>
                            </div>

                            <div>
                            <div className='single__testimonial'>
                                <h6 className='mb-3 fw-bold'>Excellent course of materials</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                   Aut saepe voluptatum earum delectus deserunt id iste, quas officiis et repellat!</p>
                          
                            <div className='student__info mt-4'>
                                <h6 className='fw-bold'>Farh Faha</h6>
                                <p>California, United State</p>
                                </div>

                            </div>
                            </div>
                       
                        </Slider>
                    </div>

                </div>
            </Col>
        </Row>

      </Container>
   </section>
   </>
  )
}

export default Testimonials
