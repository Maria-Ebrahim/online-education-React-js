import React from 'react';
import './hero-section.css';
import { Container,Row,Col } from 'reactstrap';
import heroImg from '../../assests/images/hero-img1.png'
import { motion } from 'framer-motion';
import heroImg1 from '../../assests/images/businessperson-desktop-wallpaper-business-fcdbaa1c137b68a5bdf1c485d45342e2.png'

const HeroSection = () => {
  return (
    <>
    <section>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className='hero__content'>
                       <h2 className='mb-4'>Anytime Anywhere<br/> Learn on Your Suitable Schedule</h2>
                       <p className='mb-4'>Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit.
                          Aut saepe voluptatum earum delectus <br/> deserunt id iste, quas officiis et repellat! </p>
                       <div className='search'>
                           <input type='text' placeholder='Search'/>
                           <motion.button whileTap={{scale:'1.1'}} className='btn'>Search</motion.button>
                        </div>
                    </div>
                </Col>
                <Col lg='6' md='6'>
                    <img src={heroImg1} alt='' className='w-75'/>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default HeroSection
