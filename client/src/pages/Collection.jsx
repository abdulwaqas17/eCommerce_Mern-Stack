import React from 'react'
import Navbar from '../components/Navbar'
import Breadcrumb from '../components/Breadcrumb'
import Footer from '../components/Footer'
import Categories from '../components/homeUtils/Categories'
import AllCategories from '../components/collectionUtils/AllCategories'

const Collection = () => {
  return (
    <div>
        <Navbar/>
        <div className='bg-gradient-to-b from-[#eaf6ff] to-[#f6f7f7] pt-[45px] pb-[50px]'>
          <Breadcrumb val="Collections All"/>
        </div>
        <AllCategories/>
        <Footer/>
    </div>
  )
}

export default Collection