import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import Footers from '../components/Footers';

const Products = () => {

  let [products,setProducts] = useState(null);

  useEffect(()=> {

    const fetchData = async () => {

     try {

      let token = window.localStorage.getItem('token');

      const res = await fetch('http://localhost:3000/home/products', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // 👉 yahan se verifyToken middleware chalega
        }
      });

      let data = res.json();

      setProducts(data);

     } catch (err) {
      console.log(err);
      
     }

    }

    fetchData();

  },[])

  return (
    <div>
      <Navbar/>
      Products
      <Footers/>
    </div>
  )
}

export default Products