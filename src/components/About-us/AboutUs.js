import React from 'react';
import { Container,Row,Col } from 'reactstrap';
import './about.css';
import aboutImg from '../../assests/images/about-us.png';
import aboutImg1 from '../../assests/images/tax-advisor-accountant-accounting-tax-return-self-awareness-d41e05d3477838d806a2e4e2faf7c0a3.png';
import CountUp from 'react-countup';
const AboutUs = () => {
  return (
   <>
   <section>
    <Container>
        <Row>
            <Col lg='6' md='6'>
                <div className='about__img'>
                    <img src={aboutImg1}  alt='' className='w-75'/>

                </div>
            </Col>
            <Col lg='6' md='6'>
                <div className='about__content'>
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit.
                          Aut saepe voluptatum earum delectus <br/> deserunt id iste, quas officiis et repellat!</p>
                    <div className='about__counter'>
                       <div className='d-flex gap-5 align-items-center'>
                       <div className='single__counter'>
                            <span className='counter'>
                                <CountUp start={0} end={25} duration={2} suffix='K'/>
                            </span>
                            <p className='counter__title'>Completed Projects</p>
                        </div>

                        <div className='single__counter'>
                            <span className='counter'>
                                <CountUp start={0} end={12} duration={2} suffix='K'/>
                            </span>
                            <p className='counter__title'>Patient Around World</p>
                        </div>
                       </div>
                       
                       <div className='d-flex gap-5 align-items-center'>
                        <div className='single__counter'>
                            <span className='counter'>
                                <CountUp start={0} end={25} duration={2} suffix='K'/>
                            </span>
                            <p className='counter__title'>Completed Projects</p>
                        </div>

                        <div className='single__counter'>
                            <span className='counter'>
                                <CountUp start={0} end={12} duration={2} suffix='K'/>
                            </span>
                            <p className='counter__title'>Patient Around World</p>
                        </div>
                        </div>


                    </div>
                </div>
            </Col>
        </Row>
    </Container>
   </section>
   </>
  )
}

export default AboutUs
