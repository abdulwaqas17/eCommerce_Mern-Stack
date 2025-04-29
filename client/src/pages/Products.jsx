import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import Footers from '../components/Footers';
import CatHeader from '../components/productsUtils/catHeader';
import FilterBar from '../components/productsUtils/FilterBar';
import Card from '../components/Card';
import { useCarts } from '../hooks/hooks';

const Products = () => {


  let [products,setProducts] = useState([]);
  // getting value from context
  let {carts,setCarts} = useCarts();

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

  // let [cart, setCart] = useState([]);


  // console.log(' useCarts()',  useCarts());
  

  // useEffect(()=> {

    
  //   let userCarts = JSON.parse(window.localStorage.getItem('userCarts'));
  //   setCarts([...userCarts]);
  //   // console.log('userCarts');
  //   console.log('userCarts ==>', userCarts);

  //   // console.log('[]');

    
    
  // },[])

  useEffect(()=> {

    // console.log('cart effect',carts);
    console.log('carts ===>', carts);
    
    window.localStorage.setItem('userCarts',JSON.stringify(carts));
    // console.log('[carts]');
    
    

  },[carts])


  let addToCart = (id) => {
    setCarts((prev) => [...prev, id]);
    // console.log('cart func',carts);
  };


  // console.log('cart ',carts);

  return (
    <div>
      <Navbar />
      <CatHeader/>
      <FilterBar />
    
      <section className='flex justify-between flex-wrap px-[30px] py-[60px] gap-4'>

        {products.map((product)=> (
          <Card key={product._id} product={product} func={addToCart}/>
        ))}
    

      </section>
      <Footers />
    </div>
  )
}

export default Products