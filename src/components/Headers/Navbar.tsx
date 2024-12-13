import React from 'react'
import logo from '../../assets/logoimage.png'

const Navbar = () => {
  return (
    <div className='flex justify-around bg-black h-20'>
        <div>
            <img src={logo} alt="" className='w-48 pt-11 z-50 absolute  ' />
        </div>
        <div className='flex text-white items-end     '>
            <button  className='p-4 hover:text-blue-600 focus:text-blue-700' >HOME</button>
            <button  className='p-4 hover:text-blue-600 focus:text-blue-700'> MENU</button>
            <button  className='p-4 hover:text-blue-600 focus:text-blue-700'>MAKE A RESERVATION</button>
            <button  className='p-4 hover:text-blue-600 focus:text-blue-700'>CONTACT US</button>
            
        </div>
    </div>
  )
}

export default Navbar