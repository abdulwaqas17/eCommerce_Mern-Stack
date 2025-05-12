import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutBanner from '../components/aboutUtils/aboutBanner'
import AboutSection from '../components/homeUtils/AboutSection'
import ClientReview from '../components/clientReviews'
import Facilities from '../components/Facilities'
import ForForNewsletter from '../components/FormForNewsLatter'

const About = () => {
  return (
    <div>
       <Navbar/>  
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