import React from 'react'

const BannerCard = (props) => {
  return (
    
  
    <div className="w-full lg:w-1/2" data-aos="fade-right">
      <div className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg group">
        <img
          src={props.img}
          alt="Banner 1"
          className="w-full h-[280px] object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/5 hover:bg-black/0 flex flex-col justify-center px-[40px] text-white">
          <h6 className="text-sm tracking-widest mb-1">{props.topH}</h6>
          <h4 className="text-2xl md:text-3xl font-medium leading-snug mb-4">
           {props.h1} <br /> {props.h2}
          </h4>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-wider hover:text-pink-500 transition-all duration-300"
          >
            Shop Now
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-900 hover:bg-primary hover:text-white transition-all duration-300">
              →
            </span>
          </a>
        </div>
      </div>
    </div>

  
  )
}

export default BannerCard

{/* <div className="flex flex-col lg:flex-row justify-center gap-6"> */}