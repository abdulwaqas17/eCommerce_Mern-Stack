import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutBanner from '../components/aboutUtils/aboutBanner'
import AboutSection from '../components/homeUtils/AboutSection'
import ClientReview from '../components/clientReviews'
import Facilities from '../components/Facilities'
import ForForNewsletter from '../components/FormForNewsLatter'
import Breadcrumb from '../components/Breadcrumb'

const About = () => {
  return (
    <div>
       <Navbar/>  
       <div>
        <h2 className='text-center text-2xl'>About Us</h2>
        <Breadcrumb val='About Us'/>
       </div>
        <AboutBanner/>
        <AboutSection/>
        <ClientReview/>
        <ForForNewsletter/>
        <Facilities/>
       <Footer/> 
    </div>
  )
}

export default About