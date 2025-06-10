import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/ShopContext'
import Title from './Title'
const LatestCollection = () => {
    const {products } = useContext(GlobalContext)

    const [LatestProducts,setLatestProducts] =  useState()
    
    useEffect(()=>{
            setLatestProducts(products.slice(0,10))
    },[])
  return (
    <div className='my-10'>
    <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST '} text2={'COLLECTIONS'} />
        <p className='w-3/4 m-auto text-xs sm:text md:text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, harum?</p>
    </div>

    </div>
  )
}

export default LatestCollection