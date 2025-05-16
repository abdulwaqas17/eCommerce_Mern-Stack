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
       <div className='bg-gradient-to-b from-[#eaf6ff] to-[#f6f7f7] pt-[45px] pb-[50px]'>
        <h2 className='text-center text-4xl font-bold'>About Us</h2>
        <Breadcrumb val='About Us'/>
       </div>
        <AboutBanner/>
        <AboutSection/>
       <section className='bg-gradient-to-b from-[#eaf6ff] to-[#f6f7f7]'>
         <ClientReview/>
        <ForForNewsletter/>
       </section>
        <Facilities/>
       <Footer/> 
    </div>
  )
}

export default About