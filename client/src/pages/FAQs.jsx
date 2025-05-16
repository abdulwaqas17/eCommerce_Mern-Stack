import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import HelpCenter from '../components/FAQsUtils/HelpCenter'
import OrderingFAQs from '../components/FAQsUtils/OrderingFAQs'

const FAQs = () => {
  return (
    <div>

        <Navbar/>

        <div>
            <h2 className='text-center text-2xl'>FAQs</h2>
        <Breadcrumb val='FAQs'/>
        </div>

        <HelpCenter/>

        <OrderingFAQs/>

        <Footer/>
      
    </div>
  )
}

export default FAQs
