import React from 'react'
import './newsletter.css'
import { Container,Row,Col } from 'reactstrap'
import { motion } from 'framer-motion'

const Newsletter = () => {
  return (
    <section>
        <Container className='newsletter'>
            <Row>
                <Col lg='12' className='new text-center'>
                    <h2 className='mb-4'>Subscribe Our Newsletter</h2>
                    <div className='subscibe'>
                       <input type='email' placeholder='Email'/>
                       <motion.button whileTap={{scale:'1.1'}} className='btn'>Subscribe</motion.button>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
 
  )
}

export default Newsletter
