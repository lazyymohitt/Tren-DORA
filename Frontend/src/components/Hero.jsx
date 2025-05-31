import React from 'react'
import {assets} from '../assets/assets'

const Hero = () => {
  return (
    <div className= ' flex flex-col mt-5 sm:flex-row border boredr-gray-500 '>
        {/* Herosection left side  */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className=' flex flex-col'>
        <div className="fst-heading flex items-center gap-2">
          <p className='w-8 md:w-11 h-[2px] bg-gray-800'></p>
          <p className='text-sm text-[#414141]'>OUR BESTSELLERS</p>
        </div>
        <div className="sec-heading">
          <h1 className='text-2xl text-center md:text-4xl font-sembold'>Latest Arrivals</h1>
        </div>
        <div className="third-heading flex items-center  gap-2">
          <p className='text-sm text-[#414141]'>SHOP NOW </p>
           <p className='w-8 md:w-11 h-[2px] bg-gray-800'></p>
        </div>
        </div>
        </div>
        {/* Herosection Right side  */}
     <img className='w-full  sm:w-1/2 ' src="https://media.istockphoto.com/id/540863422/photo/modern-businessman.jpg?s=612x612&w=0&k=20&c=e591kv86VcMZ4oz_vTCLprRsfxT7H9rRM6lrgpaalzg=" alt="" />
    </div>
  )
}

export default Hero