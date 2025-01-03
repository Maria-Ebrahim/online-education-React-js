import React from 'react';
import './features.css';
import { Container,Row,Col } from 'reactstrap';

const FeatueData=[
    {
        title:"Quick Learning",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut saepe voluptatum earum delectus deserunt id iste, quas officiis et repellat!",
        icon:"ri-draft-line"
    },
    {
        title:"All Time Support",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut saepe voluptatum earum delectus deserunt id iste, quas officiis et repellat!",
        icon:"ri-discuss-line"
    },
    {
        title:"Certification",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut saepe voluptatum earum delectus deserunt id iste, quas officiis et repellat!",
        icon:"ri-contacts-book-line"
    },
]

const Features = () => {
  return (
   <>
   <section>
    <Container>
        <Row>
           { FeatueData.map((item,index)=>(

             <Col lg='4' md='6' key={index}>
                   <div className='single__feature text-center px-4'>
                      <h2 className='mb-3'><i class={item.icon}></i></h2>
                      <h6>{item.title}</h6>
                      <p className='mb-4'>{item.desc}</p>

                   </div>
              </Col>

           ))}
           
        </Row>
    </Container>

   </section>
   </>
  )
}

export default Features
