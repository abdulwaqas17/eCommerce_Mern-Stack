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
        <Breadcrumb val="Collections All"/>
        <AllCategories/>
        <Footer/>
    </div>
  )
}

export default Collection