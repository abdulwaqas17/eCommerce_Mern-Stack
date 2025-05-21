import React from 'react'
import Navbar from '../components/Navbar'
import Breadcrumb from '../components/Breadcrumb'
import Footer from '../components/Footer'
import Categories from '../components/homeUtils/Categories'
import AllCategories from '../components/collectionUtils/AllCategories'
import { useTheme } from '../hooks/hooks'

const Collection = () => {

  let theme = useTheme();
  console.log(theme);
  
  return (
    <div>
        <Navbar/>
        <div className={`bg-gradient-to-b from-[${theme[0]?theme[0]:'bg-sky-100'}] to-[${theme[1]?theme[1]:'bg-lime-50'}] pt-[45px] pb-[50px]`}>
          <Breadcrumb val="Collections All"/>
        </div>
        <AllCategories/>
        <Footer/>
    </div>
  )
}

export default Collection