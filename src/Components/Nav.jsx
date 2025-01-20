import React from 'react'
import logo from '../assets/brand_logo.png'; 

const Nav = () => {
  return (
    <>
        <nav className='flex justify-between items-center mt-6 '>
        <div className='ml-20'>
          <img className='' src={logo} alt='Logo' />
        </div>
        <ul className='flex '>
          
          <li href="#" className='uppercase font-bold text-xl mr-11 cursor-pointer'>Home</li>
          <li href="#" className='uppercase font-bold text-xl mr-11 cursor-pointer'>Location</li>
          <li href="#" className='uppercase font-bold text-xl mr-11 cursor-pointer'>About</li>
          <li href="#" className='uppercase font-bold text-xl mr-11 cursor-pointer'>Contact</li>
        </ul>
        <button className='mr-11 bg-rose-700 px-4 py-2 text-white rounded-md cursor-pointer focus:bg-red-900'>
          Login
        </button>
      
      </nav>
    </>
  )
}

export default Nav