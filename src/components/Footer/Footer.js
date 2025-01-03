import React from 'react';
import './footer.css';
import { Container,Row,Col ,ListGroup,ListGroupItem} from 'reactstrap';

const footerQuickLinks=[
    {
        display:"Home",
        path:"#"
    },
        {
        display:"About",
        path:"#"
    },
        {
        display:"Courses",
        path:"#"
    },
        {
        display:"Bage",
        path:"#"
    },
        {
        display:"Blog",
        path:"#"
    },
]

const footerInfoLinks=[
    {
        display:"Privacy Policy",
        path:"#"
    },
        {
        display:"Membership",
        path:"#"
    },
        {
        display:"Purchases Guide",
        path:"#"
    },
        {
        display:"Terms of Service",
        path:"#"
    },
  
]

const Footer = () => {
    const date=new Date().getFullYear()
  return (
   <>
   <footer className='footer'>
    <Container>
        <Row>
            <Col lg='3'>
                <h2 className='d-flex align-items-center gap-1'><i class="ri-book-shelf-line"></i> Education.</h2>
                <div className='follows'>
                    <p className='mb-0'>Follow us on social media</p>
                    <div className='d-flex align-items-center gap-3'>
                       <span><a href='facebook.com'><i class="ri-facebook-line"></i></a></span>
                       <span><a href='facebook.com'><i class="ri-instagram-line"></i></a></span>
                       <span><a href='facebook.com'><i class="ri-linkedin-line"></i></a></span>
                       <span><a href='facebook.com'><i class="ri-twitter-line"></i></a></span>
                    </div>

                </div>
            </Col>

          
            <Col lg='3'>
                <h6 className='fw-bold'>Explore</h6>
                <ListGroup className='link__list'>
                    {
                        footerQuickLinks.map((item,index)=>(
                            <ListGroupItem key={index} className='border-0 ps-0 link__item'>
                               <a href={item.path}> {item.display}</a>
                            </ListGroupItem>
                        ))

                    }
                </ListGroup>
            </Col>

            
            <Col lg='3'>
                <h6 className='fw-bold'>Information</h6>
                <ListGroup className='link__list'>
                    {
                        footerInfoLinks.map((item,index)=>(
                            <ListGroupItem key={index} className='border-0 ps-0 link__item'>
                               <a href={item.path}> {item.display}</a>
                            </ListGroupItem>
                        ))

                    }
                </ListGroup>
            </Col>

            <Col lg='3'>
                <h6 className='fw-bold'>Get in Touch</h6>
                <p>Address:Syria, Lattakia, Aljmhoria Street</p>
                <p>Phone:0996957329</p>
                <p>Email:mar@gmail.com</p>
            </Col>


        </Row>
        <Row  className="mt-5">
          <Col lg='12' md='12'>
            <p className="copyright__text">
            Copyright - {date} , website made by <span>Maria Ebrahim</span> . All Rights
            Reserved.
            </p>
          </Col>
          </Row>
    </Container>

   </footer>
   </>
  )
}

export default Footer
