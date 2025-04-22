import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import Footers from '../components/Footers';
import AboutHeader from '../components/productsUtils/aboutHeader';
import FilterBar from '../components/productsUtils/FilterBar';
import Card from '../components/Card';

const Products = () => {

  // let [products,setProducts] = useState(null);

  // useEffect(()=> {

  //   const fetchData = async () => {

  //    try {

  //     let token = window.localStorage.getItem('token');

  //     const res = await fetch('http://localhost:3000/home/products', {
  //       method: 'GET',
  //       headers: {
  //           'Content-Type': 'application/json',
  //           'Authorization': `Bearer ${token}` // 👉 yahan se verifyToken middleware chalega
  //       }
  //     });

  //     let data = res.json();

  //     setProducts(data);

  //    } catch (err) {
  //     console.log(err);

  //    }

  //   }

  //   fetchData();

  // },[])

  return (
    <div>
      <Navbar />
      <AboutHeader />
      <FilterBar />
    
      <section className='flex justify-between flex-wrap px-[30px] py-[60px] gap-4'>
      <Card name='hello' image1="https://ap-medilazar.myshopify.com/cdn/shop/files/product-12-1.jpg?v=1734420724"
        image2="https://ap-medilazar.myshopify.com/cdn/shop/files/product-12-2.jpg?v=1734420724" />
      <Card name='hello' image1="https://ap-medilazar.myshopify.com/cdn/shop/files/product-12-1.jpg?v=1734420724"
        image2="https://ap-medilazar.myshopify.com/cdn/shop/files/product-12-2.jpg?v=1734420724" />
      <Card name='hello' image1="https://ap-medilazar.myshopify.com/cdn/shop/files/product-12-1.jpg?v=1734420724"
        image2="https://ap-medilazar.myshopify.com/cdn/shop/files/product-12-2.jpg?v=1734420724" />
      <Card name='hello' image1="https://ap-medilazar.myshopify.com/cdn/shop/files/product-12-1.jpg?v=1734420724"
        image2="https://ap-medilazar.myshopify.com/cdn/shop/files/product-12-2.jpg?v=1734420724" />
      <Card name='hello' image1="https://ap-medilazar.myshopify.com/cdn/shop/files/product-12-1.jpg?v=1734420724"
        image2="https://ap-medilazar.myshopify.com/cdn/shop/files/product-12-2.jpg?v=1734420724" />
      <Card name='hello' image1="https://ap-medilazar.myshopify.com/cdn/shop/files/product-12-1.jpg?v=1734420724"
        image2="https://ap-medilazar.myshopify.com/cdn/shop/files/product-12-2.jpg?v=1734420724" />
      </section>
      <Footers />
    </div>
  )
}

export default Products