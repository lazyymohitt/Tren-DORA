import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div
    className='flex  items-center justify-between py-5 font-medium'
    >
        <h1 className='w-34'>Trendora</h1>

        <ul className='hidden sm:flex gap-5  text-sm text-gray-800'>
            <NavLink to='/' className=' flex flex-col items-center gap-1'>
                <p>Home</p>
                <hr  className=' w-2/4 h-[1.5px] border-none  bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/collection' className=' flex flex-col items-center gap-1'>
                <p>Collection</p>
                <hr  className=' w-2/4 h-[1.5px] border-none  bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/about' className=' flex flex-col items-center gap-1'>
                <p>About</p>
                <hr  className=' w-2/4 h-[1.5px] border-none  bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/contact' className=' flex flex-col items-center gap-1'>
                <p>Contact</p>
                <hr  className=' w-2/4 h-[1.5px] border-none  bg-gray-700 hidden'/>
            </NavLink>
        </ul>

    </div>
  )
}

export default Navbar