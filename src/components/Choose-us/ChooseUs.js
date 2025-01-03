import React ,{useState} from 'react';
import { Container,Row,Col } from 'reactstrap';
import './choose-us.css';
import chooseImg from '../../assests/images/why-choose-us.png'
import ReactPlayer from 'react-player';

const ChooseUs = () => {
    const[showVideo,setShowVideo]=useState(false)
  return (
   <>
   <section>
    <Container>
        <Row>
            <Col lg='6'>
                <div className='choose__content'>
                    <h2>Why Choose Us</h2>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aut saepe voluptatum earum delectus deserunt id iste, quas officiis et repellat!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aut saepe voluptatum earum delectus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aut saepe voluptatum earum delectus deserunt id iste, quas officiis et repellat!
                    </p>

                </div>
            </Col>
            <Col lg='6'>
                <div className='choose__img'>
                    {
                        showVideo ? <ReactPlayer url='https://youtu.be/_g45BJCAXu4' controls width='100%' height='300PX'/>
                        :<img src={chooseImg} alt='' className='w-100'/>
                    }
                   
                   {
                    !showVideo &&(
                        <span className='play__icon'>
                       <i class="ri-play-circle-line" onClick={()=>setShowVideo(!showVideo)}></i>
                   </span>
                    )
                   }
                </div>
            </Col>
        </Row>
    </Container>
   </section>
   </>
  )
}

export default ChooseUs
