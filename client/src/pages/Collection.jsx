import React from 'react'
import Navbar from '../components/Navbar'
import Breadcrumb from '../components/Breadcrumb'
import Footer from '../components/Footer'
import Categories from '../components/homeUtils/Categories'
import AllCategories from '../components/collectionUtils/AllCategories'
import { useTheme } from '../hooks/hooks'

const Collection = () => {

const {dark,light} = useTheme();
  
  return (
    <div>
        <Navbar/>
        <div  className="pt-[45px] pb-[50px] bg-gradient-to-b from-[#e4f6ffe1] to-[#f6f7f71c]">
          <Breadcrumb val="Collections All"/>
        </div>
        <AllCategories/>
        <Footer/>
    </div>
  )
}

export default Collection