import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import Footers from '../components/Footers';
import CatHeader from '../components/productsUtils/catHeader';
import FilterBar from '../components/productsUtils/FilterBar';
import Card from '../components/Card';

const Products = () => {

  let [products,setProducts] = useState([]);

  useEffect(()=> {

    const fetchData = async () => {

     try {

      // let token = window.localStorage.getItem('token');

      // const res = await fetch('http://localhost:3000/home/products', {
      //   method: 'GET',
      //   headers: {
      //       'Content-Type': 'application/json',
      //       'Authorization': `Bearer ${token}` // 👉 yahan se verifyToken middleware chalega
      //   }
      // });

      let res = await fetch('http://localhost:3000/home/products');

      let data = await res.json();

      console.log(data);
      

      setProducts(data.products);

     } catch (err) {
      console.log(err);

     }

    }

    fetchData();

  },[])

  return (
    <div>
      <Navbar />
      <CatHeader/>
      <FilterBar />
    
      <section className='flex justify-between flex-wrap px-[30px] py-[60px] gap-4'>

        {products.map((product)=> (
          <Card Key={product._id} product={product}/>
        ))}
    

      </section>
      <Footers />
    </div>
  )
}

export default Products