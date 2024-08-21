import React from 'react'
import group from '../../assets/group.png'
import showone from '../../assets/showone.png'
import showtwo from '../../assets/showtwo.png'
import showthree from '../../assets/showthree.png'
import showfour from '../../assets/showfour.png'
import showfive from '../../assets/showfive.png'
import showsix from '../../assets/showsix.png'
const Work = () => {
  return (
    <div className='max-w-container mx-auto mt-[150px]'>
<img className='m-auto' src={group} alt="" />
<h1 className='font-sans font-extrabold text-center text-[48px] mt-3'>Work Showcase</h1>
<ul className='mt-10 flex gap-11'>
    <li><a className='font-sans font-semibold text-[#6C7D93] hover:text-primary text-[24px]' href="">All</a></li>
    <li><a className='font-sans font-semibold text-[#6C7D93] hover:text-primary text-[24px]' href="">Digital Mkt</a></li>
    <li><a className='font-sans font-semibold text-[#6C7D93] hover:text-primary text-[24px]' href="">Branding</a></li>
    <li><a className='font-sans font-semibold text-[#6C7D93] hover:text-primary text-[24px]' href="">Content Mkt</a></li>
    <li><a className='font-sans font-semibold text-[#6C7D93] hover:text-primary text-[24px]' href="">Social Media Mkt</a></li>
</ul>
<div className='flex gap-8 mt-10'>
    <img src={showone} alt="" />
    <img src={showtwo} alt="" />
    <img src={showthree} alt="" />
</div>
<div className='flex gap-8 mt-8'>
    <img src={showfour} alt="" />
    <img src={showfive} alt="" />
    <img src={showsix} alt="" />
</div>
    </div>
  )
}

export default Work