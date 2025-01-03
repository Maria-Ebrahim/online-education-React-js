import React from 'react';
import { Container,Row,Col } from 'reactstrap';
import courseImg1 from '../../assests/images/web-design.png';
import courseImg2 from '../../assests/images/graphics-design.png';
import courseImg3 from '../../assests/images/ui-ux.png';
import './courses.css';
import CourseCard from './CourseCard'
import { motion } from 'framer-motion';

const coursesData=[
    {
        id:"01",
        title:"Web Design BootCamp-2024 for Beginners",
        lesson:12,
        students:12.5,
        rating:5.9,
        imgUrl:courseImg1
    },

    {
        id:"02",
        title:"Graphics Design, PhotoShop, Adobe XD, Figma",
        lesson:12,
        students:12.5,
        rating:5.9,
        imgUrl:courseImg2
    },

    {
        id:"03",
        title:"UI/UX BootCamp for Beginners in 2024 " ,
        lesson:12,
        students:12.5,
        rating:5.9,
        imgUrl:courseImg3
    }
]

const Courses = () => {
  return (
   <>
   <section>
    <Container>
        <Row>
            <Col lg='12' className='mb-5'>
                <div className='course__top d-flex align-items-center justify-content-between'>
                    <div className='course__top__left w-50'>
                        <h2>Our Popular Courses</h2>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Aut saepe voluptatum earum delectus deserunt id iste, quas officiis et repellat! 
                        </p>
                    </div>
                    <div className='button w-50 text-end'>
                       <motion.button whileTap={{scale:'1.1'}} className='btn'>See All</motion.button>
                    </div>

                </div>
            </Col>
           {
            coursesData.map((item)=>(
                <Col lg='4' md='6'>
                    <CourseCard item={item} key={item.id}/>
                </Col>
            ))
           }
        </Row>
    </Container>
   </section>
   </>
  )
}

export default Courses
