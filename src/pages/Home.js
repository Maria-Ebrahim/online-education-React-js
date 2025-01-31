import React from 'react';
import Header from '../components/Header/Header';
import HeroSection from '../components/Hero-Section/HeroSection';
import Company from '../components/Company-section/Company';
import AboutUs from '../components/About-us/AboutUs';
import Courses from '../components/Courses-section/Courses'
import ChooseUs from "../components/Choose-us/ChooseUs"
import Features from '../components/Feature-section/Features';
import FreeCourse from "../components/Free-course-section/FreeCourse";
import Testimonial from '../components/Testimonial/Testimonials';
import Newsletter from '../components/Newsletter/Newsletter'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
 <>
   <Header/>
   <HeroSection/>
   <Company/>
   <AboutUs/>
   <Courses/>
   <ChooseUs/>
   <Features/>
   <FreeCourse/>
   <Testimonial/>
   <Newsletter/>
   <Footer/>

 </>
  )
}

export default Home
