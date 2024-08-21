import React from 'react'
import logo from '../../assets/logo.png'
import vector from '../../assets/vector.png'
import man from '../../assets/man.png'

export const Navbar = () => {
  return (
    <div>
      <div className='max-w-container mx-auto mt-5'>
        <div className='flex justify-between'>
          <img src={logo} alt="" />
          <ul className='flex gap-10 items-center'>
            <li className='font-sans text-primary font-semibold text-[18px]'><a href="">Home</a></li>
            <li className='font-sans font-semibold text-[18px]'><a href="">About</a></li>
            <li className='font-sans font-semibold text-[18px]'><a href="">Service</a></li>
            <li className='font-sans font-semibold text-[18px]'><a href="">Portfolio</a></li>
            <li className='font-sans font-semibold text-[18px]'><a href="">Price</a></li>
            <li className='font-sans font-semibold text-[18px]'><a href="">Blog</a></li>

          </ul>
          <button className='font-sans font-semibold text-white text-[18px] bg-primary px-8 py-4 rounded-full'>Contact Us</button>
        </div>
      </div>
      <div className='absolute top-0 left-0 flex '>
        <img src={vector} alt="" />
        <img className='h-[255px] w-[194px] top-[200px] left-[80px] absolute' src={man} alt="" />
      </div>
    </div>
  )
}
