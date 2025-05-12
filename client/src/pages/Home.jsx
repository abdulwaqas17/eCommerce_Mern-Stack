import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Slideshow from '../components/homeUtils/Slider'
import FeaturedBrands from '../components/homeUtils/FeatureBrands'
import Categories from '../components/homeUtils/Categories'
import Services from '../components/homeUtils/Services'
import CardsBar from '../components/homeUtils/CardsBar'
import BannerCard from '../components/homeUtils/BannerCards'
import AboutSection from '../components/homeUtils/AboutSection'
import BlogCard from '../components/homeUtils/BlogCard'
import Card from '../components/ProductCart'
import { useCarts } from '../hooks/hooks'
import ClientReview from '../components/clientReviews'
import ForForNewsletter from '../components/FormForNewsLatter'
import Facilities from '../components/Facilities'

const Home = () => {

 let [products, setProducts] = useState([]);
  // getting value from context
  let { carts, setCarts } = useCarts();

  useEffect(() => {
    console.log("carts []");

    const fetchData = async () => {
      try {
       
        let res = await fetch("http://localhost:3000/products");

        let data = await res.json();

        console.log(data);

        setProducts(data.products);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
  



  
    useEffect(() => {
      console.log("cart effect", carts);
  
      window.localStorage.setItem("userCarts", JSON.stringify(carts));
      // console.log('[carts]');
    }, [carts]);
  
  
    // add to cart
    let addToCart = (product) => {
  
    // to prevent form app carsh, id hona zarori h
      if (!product || !product._id) return;
  
  //Because, React detects state changes only when reference changes.
      let existingItem = carts.find((item) => item._id === product._id);
    
      if (existingItem) {
        // Update quantity immutably
        const updatedCarts = carts.map((item) =>
  
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }  //Mutate nahi karo, naya object banao using { ...item }.
            : item
  
        );
        setCarts(updatedCarts);
      } else {
        // Add new product with quantity
        setCarts([...carts, { ...product, quantity: 1 }]);
      }
    };
  
 

  let healthCareProducts = products.filter((product) => ( product.category == 'health care' ));
  let supplementsProducts = products.filter((product) => ( product.category == 'supplements' ));
  let recentProducts = products.filter((product) => ( product.type == 'recent' ));

  console.log(healthCareProducts);
  console.log(supplementsProducts);
  console.log(recentProducts);
  
  

  return (
    <div>

      <Navbar/>
      
      <Slideshow/>

      {/* services list  */}
      <Services />

    {/* 2 Banner  */}
      <div className="flex flex-col lg:flex-row justify-center gap-6 px-[30px]">

          <BannerCard topH='GET ALL YOUR' h1='Medication at' h2='One Place' img='/images/asset 12.jpeg'/>

          <BannerCard topH='QUICK ACCESS TO A' h1='PLETHORA OF' h2='Medicines' img='/images/asset 13.jpeg'/>
    
      </div>
    

    {/* categories section  */}
    <Categories />
    
    {/* gradient 1  */}
    <section className='py-[40px] bg-sky-50'>
      
    {/* healthCareProducts  */}
    <h2 className="text-center font-bold md:text-4xl text-2xl md:py-[20px]">Health Products</h2>
    <section className="flex justify-between flex-wrap px-[30px] py-[60px] gap-4">
        {healthCareProducts.map((product) => (
          <Card key={product._id} product={product} func={addToCart} />
        ))}
      </section>
  

    {/* FeaturedBrands */}
    <FeaturedBrands />

    </section>

    {/* Daily well being products  */}
    <h2 className="text-center font-bold md:text-4xl text-2xl md:py-[20px]">Daily well being</h2>
   <section className="flex justify-between flex-wrap px-[30px] py-[60px] gap-4">
        {supplementsProducts.map((product) => (
          <Card key={product._id} product={product} func={addToCart} />
        ))}
      </section>

    {/* 2 Banner  */}
    <div className="flex flex-col lg:flex-row justify-center gap-6 px-[30px] py-[60px]">

      <BannerCard topH='FlAT 30% OFF' h1='Naturally' h2='Good' img='/images/asset 58.jpeg'/>

      <BannerCard topH='FLAT 25% OFF' h1='Healthcare' h2='Products' img='/images/asset 59.jpeg'/>

    </div>

    {/* AboutSection */}
    <AboutSection/>


         
    {/* products bar  */}
    <CardsBar  heading='Recent Products' products={recentProducts}/>



   {/* Articles Sections */}
  <section className='bg-sky-50 py-[50px]'>
  <h2 className='text-center font-bold md:text-4xl text-2xl py-[30px]'>Latest Articles & Blogs</h2>


<div className="flex flex-wrap justify-center md:justify-between md:gap-0 gap-6 px-[30px]">

  <BlogCard img='images/asset 61.jpeg'/>
  <BlogCard img='images/asset 62.jpeg'/>
  <BlogCard img='images/asset 63.jpeg'/>
  <BlogCard img='images/asset 64.jpeg'/>
  
</div>
  </section>

      <ClientReview/>
      <ForForNewsletter/>
      <Facilities/>
      
      <Footer/>
      </div>
  )
}

export default Home;
// // export default Home
// // import React from 'react';

// // const Home = () => {
// //   return (
// //     <div className="font-sans bg-white text-gray-800">
// //       {/* Hero Section */}
// //       <div className="bg-gradient-to-r from-yellow-100 via-orange-100 to-pink-100 p-6 md:p-20 text-center">
// //         <h1 className="text-4xl md:text-6xl font-bold mb-4">Elegant New Arrivals</h1>
// //         <p className="text-lg md:text-2xl mb-6">Exclusive collections just for you</p>
// //         <button className="bg-black text-white px-6 py-3 rounded-full text-lg hover:bg-gray-800">Shop Now</button>
// //       </div>

// //       {/* Promotional Banners */}
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 md:p-12">
// //         <div className="h-40 bg-yellow-200 rounded-lg shadow-md flex items-center justify-center text-xl font-semibold">Banner 1</div>
// //         <div className="h-40 bg-red-200 rounded-lg shadow-md flex items-center justify-center text-xl font-semibold">Banner 2</div>
// //         <div className="h-40 bg-blue-200 rounded-lg shadow-md flex items-center justify-center text-xl font-semibold">Banner 3</div>
// //       </div>

// //       {/* Featured Collections */}
// //       <div className="px-6 md:px-12 mb-12">
// //         <h2 className="text-3xl font-bold mb-6 text-center">Featured Collections</h2>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
// //           {[1, 2, 3, 4].map((item) => (
// //             <div key={item} className="bg-white border rounded-lg shadow-md p-4 text-center">
// //               <div className="h-40 bg-gray-200 mb-4" />
// //               <h3 className="font-semibold">Collection {item}</h3>
// //               <button className="mt-2 text-indigo-600 hover:underline">Shop Now</button>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Products Grid */}
// //       <div className="px-6 md:px-12 pb-12">
// //         <h2 className="text-3xl font-bold mb-6 text-center">Trending Products</h2>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
// //           {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
// //             <div key={item} className="bg-white border rounded-lg shadow-md overflow-hidden">
// //               <div className="h-48 bg-gray-300" />
// //               <div className="p-4">
// //                 <h3 className="font-semibold text-lg">Product {item}</h3>
// //                 <p className="text-sm text-gray-600">Short description here</p>
// //                 <p className="text-indigo-600 font-bold mt-2">$99.00</p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;
// import React from "react";

// const Home = () => {
//   return (
//     <div className="font-sans text-gray-800">
//       {/* Hero Section (if any) would go here */}
      
//       {/* Featured Products Section */}
//       <section className="py-12 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-8">
//             <h3 className="text-2xl font-bold">Featured Products</h3>
//             <div className="w-24 h-px bg-gray-300 mx-auto mt-2 mb-4"></div>
//           </div>
          
//           <div className="relative">
//             <div className="swiper-container">
//               <div className="flex space-x-5 overflow-x-auto pb-4">
//                 {[...Array(5)].map((_, i) => (
//                   <div key={i} className="flex-shrink-0 w-64">
//                     <div className="bg-gray-200 rounded-lg aspect-square mb-4"></div>
//                     <div className="h-4 bg-gray-200 mb-2"></div>
//                     <div className="h-3 bg-gray-200 w-3/4 mb-4"></div>
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2">
//               <button className="bg-white rounded-full p-2 shadow-md">
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                 </svg>
//               </button>
//               <button className="bg-white rounded-full p-2 shadow-md">
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       {/* Best Sellers Section */}
//       <section className="py-12 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-8">
//             <h3 className="text-2xl font-bold">Best Sellers</h3>
//             <div className="w-24 h-px bg-gray-300 mx-auto mt-2 mb-4"></div>
//           </div>
          
//           <div className="relative">
//             <div className="swiper-container">
//               <div className="flex space-x-5 overflow-x-auto pb-4">
//                 {[...Array(5)].map((_, i) => (
//                   <div key={i} className="flex-shrink-0 w-64">
//                     <div className="bg-gray-300 rounded-lg aspect-square mb-4"></div>
//                     <div className="h-4 bg-gray-300 mb-2"></div>
//                     <div className="h-3 bg-gray-300 w-3/4 mb-4"></div>
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2">
//               <button className="bg-white rounded-full p-2 shadow-md">
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                 </svg>
//               </button>
//               <button className="bg-white rounded-full p-2 shadow-md">
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       {/* Brands Section */}
//       <section className="py-12 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-8">
//             <h3 className="text-2xl font-bold">Shop by Brands</h3>
//             <div className="w-24 h-px bg-gray-300 mx-auto mt-2 mb-8"></div>
//           </div>
          
//           <div className="relative">
//             <div className="flex space-x-5 overflow-x-auto pb-4">
//               {[...Array(6)].map((_, i) => (
//                 <div key={i} className="flex-shrink-0 w-40 h-24 bg-gray-200 rounded flex items-center justify-center">
//                   <span className="text-gray-500">Brand Logo</span>
//                 </div>
//               ))}
//             </div>
            
//             <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2">
//               <button className="bg-white rounded-full p-2 shadow-md">
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                 </svg>
//               </button>
//               <button className="bg-white rounded-full p-2 shadow-md">
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       {/* Newsletter Section */}
//       <section className="py-12 bg-blue-500 text-white">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <div className="flex flex-col md:flex-row items-center">
//               <div className="md:w-2/5 mb-6 md:mb-0">
//                 <h3 className="text-2xl font-bold mb-2">Join Our Newsletter</h3>
//                 <p className="opacity-90">Subcribe to get information about products and coupons</p>
//               </div>
              
//               <div className="md:w-3/5">
//                 <form className="flex">
//                   <input 
//                     type="email" 
//                     placeholder="Enter your Email Address" 
//                     className="flex-grow px-4 py-3 rounded-l focus:outline-none text-gray-800"
//                     required
//                   />
//                   <button 
//                     type="submit" 
//                     className="bg-white text-blue-500 px-6 py-3 rounded-r font-medium flex items-center"
//                   >
//                     Subscribe
//                     <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                     </svg>
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       {/* Blog Section */}
//       <section className="py-12 bg-gray-100">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-8">
//             <h3 className="text-2xl font-bold">From Our Blog</h3>
//             <div className="w-24 h-px bg-gray-300 mx-auto mt-2 mb-4"></div>
//           </div>
          
//           <div className="relative">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {[
//                 {
//                   title: "Sed adipiscing ornare.",
//                   date: "Sep 02, 2019",
//                   excerpt: "Phasellus hendrerit. Pelletesque aliquet nibh necurna In nisi neque, aliquet vel, dapibus id"
//                 },
//                 {
//                   title: "Vivamus vestibulum ntulla.",
//                   date: "Sep 02, 2019",
//                   excerpt: "Phasellus hendrerit. Pelletesque aliquet nibh necurna In nisi neque, aliquet vel, dapibus id"
//                 },
//                 {
//                   title: "Praesent placerat risus.",
//                   date: "Sep 02, 2019",
//                   excerpt: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc"
//                 },
//                 {
//                   title: "Sed adipiscing ornare.",
//                   date: "Sep 02, 2019",
//                   excerpt: "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero augue."
//                 }
//               ].map((post, i) => (
//                 <article key={i} className="bg-white rounded-lg overflow-hidden shadow-sm">
//                   <div className="bg-gray-300 aspect-video"></div>
//                   <div className="p-4">
//                     <div className="text-sm text-gray-500 mb-2">{post.date}</div>
//                     <h3 className="text-lg font-semibold mb-3">{post.title}</h3>
//                     <p className="text-gray-600 mb-4">{post.excerpt}</p>
//                     <a href="#" className="text-blue-500 font-medium inline-flex items-center">
//                       VIEW THIS STORE
//                       <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                       </svg>
//                     </a>
//                   </div>
//                 </article>
//               ))}
//             </div>
            
//             <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2">
//               <button className="bg-white rounded-full p-2 shadow-md">
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                 </svg>
//               </button>
//               <button className="bg-white rounded-full p-2 shadow-md">
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       {/* Icon Boxes Section */}
//       <section className="py-12 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               {
//                 icon: "🚀",
//                 title: "Free Shipping",
//                 text: "Orders $50 or more"
//               },
//               {
//                 icon: "🔄",
//                 title: "Free Returns",
//                 text: "Within 30 days"
//               },
//               {
//                 icon: "ℹ️",
//                 title: "Get 20% Off 1 Item",
//                 text: "When you sign up"
//               },
//               {
//                 icon: "🛟",
//                 title: "We Support",
//                 text: "24/7 amazing services"
//               }
//             ].map((box, i) => (
//               <div key={i} className="flex items-center">
//                 <div className="text-3xl mr-4">{box.icon}</div>
//                 <div>
//                   <h4 className="font-medium">{box.title}</h4>
//                   <p className="text-gray-500 text-sm">{box.text}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
      
//       {/* Footer */}
//       <footer className="bg-white pt-12 pb-6 border-t">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
//             <div className="lg:col-span-2">
//               <div className="w-32 h-8 bg-gray-300 mb-4"></div>
//               <p className="text-gray-600 mb-6">Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
              
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div>
//                   <h5 className="font-medium mb-2">Got Question? Call us 24/7</h5>
//                   <a href="tel:+98765432" className="text-blue-500">+98 765 432</a>
//                 </div>
//                 <div>
//                   <h5 className="font-medium mb-2">Payment Method</h5>
//                   <div className="h-8 bg-gray-200"></div>
//                 </div>
//               </div>
//             </div>
            
//             <div>
//               <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-gray-600 hover:text-blue-500">About Midas</a></li>
//                 <li><a href="#" className="text-gray-600 hover:text-blue-500">How to shop on Molla</a></li>
//                 <li><a href="#" className="text-gray-600 hover:text-blue-500">FAQ</a></li>
//                 <li><a href="#" className="text-gray-600 hover:text-blue-500">Contact us</a></li>
//                 <li><a href="#" className="text-gray-600 hover:text-blue-500">Log in</a></li>
//               </ul>
//             </div>
            
//             <div>
//               <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-gray-600 hover:text-blue-500">Payment Methods</a></li>
//                 <li><a href="#" className="text-gray-600 hover:text-blue-500">Money-back guarantee!</a></li>
//                 <li><a href="#" className="text-gray-600 hover:text-blue-500">Returns</a></li>
//                 <li><a href="#" className="text-gray-600 hover:text-blue-500">Shipping</a></li>
//                 <li><a href="#" className="text-gray-600 hover:text-blue-500">Terms and conditions</a></li>
//                 <li><a href="#" className="text-gray-600 hover:text-blue-500">Privacy Policy</a></li>
//               </ul>
//             </div>
            
//             <div>
//               <h4 className="text-lg font-semibold mb-4">My Account</h4>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-gray-600 hover:text-blue-500">Sign In</a></li>
//                 <li><a href="#" className="text-gray-600 hover:text-blue-500">View Cart</a></li>
//                 <li><a href="#" className="text-gray-600 hover:text-blue-500">My Wishlist</a></li>
//                 <li><a href="#" className="text-gray-600 hover:text-blue-500">Track My Order</a></li>
//                 <li><a href="#" className="text-gray-600 hover:text-blue-500">Help</a></li>
//               </ul>
//             </div>
//           </div>
          
//           <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center">
//             <div className="mb-4 md:mb-0">
//               <p className="text-gray-600">Copyright © 2019 Molla Store. All Rights Reserved.</p>
//               <ul className="flex space-x-4 mt-2">
//                 <li><a href="#" className="text-gray-600 hover:text-blue-500 text-sm">Terms / Privacy Policy</a></li>
//               </ul>
//             </div>
            
//             <div className="flex items-center">
//               <span className="text-gray-600 mr-3">Social Media</span>
//               <div className="flex space-x-2">
//                 <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
//                   <span className="sr-only">Facebook</span>
//                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
//                   </svg>
//                 </a>
//                 <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
//                   <span className="sr-only">Twitter</span>
//                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                   </svg>
//                 </a>
//                 <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
//                   <span className="sr-only">Instagram</span>
//                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
//                   </svg>
//                 </a>
//                 <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
//                   <span className="sr-only">YouTube</span>
//                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
      
//       {/* Mini Cart and Scroll Top */}
//       <div className="fixed bottom-8 right-8 z-50">
//         <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Home;

/* 
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Practical Wooden Bottle",
    price: "$529.28",
    image1: "https://ap-medilazar.myshopify.com/cdn/shop/files/product-12-1.jpg?v=1734420724",
    image2: "https://ap-medilazar.myshopify.com/cdn/shop/files/product-12-2.jpg?v=1734420724"
  },
  // Same object ko 5 times repeat kar dein for now
  { id: 2, ... },
  { id: 3, ... },
  { id: 4, ... },
  { id: 5, ... },
];

const ProductCarousel = () => {
  const carouselRef = useRef();

  const scroll = (direction) => {
    const { current } = carouselRef;
    if (!current) return;

    const scrollAmount = direction === "left" ? -300 : 300;
    current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (



*/