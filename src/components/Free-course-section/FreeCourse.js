import React from 'react';
import { Container,Row,Col } from 'reactstrap';
import './free-course.css'
import courseImg01 from '../../assests/images/web-development.png';
import courseImg02 from '../../assests/images/kids-learning.png';
import courseImg03 from '../../assests/images/seo.png';
import courseImg04 from '../../assests/images/ui-ux.png'
import FreeCourseCard from './FreeCourseCard'

const freeCourseData=[
  {
    id:'01',
    imgUrl:courseImg01,
    title:"Basic Web Development Course ",
    students:5.3,
    rating:1.7
  },

  {
    id:'02',
    imgUrl:courseImg02,
    title:"Coding For Junior Basic Course",
    students:5.3,
    rating:1.7
  },

  {
    id:'03',
    imgUrl:courseImg03,
    title:"Search Engine Optimization - Basic",
    students:5.3,
    rating:1.7
  },

  {
    id:'04',
    imgUrl:courseImg04,
    title:"Basic UI/UX Design - Figma",
    students:5.3,
    rating:1.7
  },
]
const FreeCourse = () => {
  return (
    <>
    <section>
        <Container>
            <Row>
                <Col lg='12' className='text-center mb-5'>
                    <h2 className='fw-bold'>Our Free Courses</h2>
                </Col>
                {
                  freeCourseData.map((item)=>(
                    <Col lg='3' key={item.id}>
                      <FreeCourseCard  item={item}/>
                     </Col>
                  ))
                }
            </Row>
        </Container>
    </section>
    
    </>
  )
}

export default FreeCourse
