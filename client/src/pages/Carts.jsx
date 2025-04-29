import React from 'react'
import Navbar from '../components/Navbar'
import Footers from '../components/Footers'
import Breadcrumb from '../components/Breadcrumb'
import CartTable from '../components/cartsUtils/CartTable'
import CartNoteAndShipping from '../components/cartsUtils/NoteAndShipping'
import CartFooter from '../components/cartsUtils/CartFooter'
import { useCarts } from '../hooks/hooks'
import { useEffect } from 'react'


const Carts = () => {

   let {carts,setCarts} = useCarts();
   

  

  const progress = 0.75;
  const progressPercent = Math.min(progress * 100, 100);

  return (
    <div>
      <Navbar/>
      <Breadcrumb val='Your Shopping Carts' />

      {/* Carts header */}
      <div className="w-full px-4 py-6 bg-white ">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-semibold text-gray-800 mb-3 text-center">Your cart</h1>

        <p className="text-sm text-center">
          { progressPercent == 100 ? 'You are eligible for free shipping!' : 'You are not eligible for free shipping!' }
        </p>
        <div className="w-[70%] rounded-md h-3 my-3 border mx-auto">
          <div
            className="h-full bg-black transition-all"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

      </div>
    </div>


    {/* carts Table  */}
    <div className='mx-6'>
    <CartTable />
    </div>


    {/* CartNoteAndShipping */}
    <div className='mx-9'>
    <CartNoteAndShipping/>
    </div>


    <CartFooter />


    
      <Footers/>
      </div>
  )
}

export default Carts