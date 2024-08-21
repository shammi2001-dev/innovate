import React from 'react'
import intro1 from '../../assets/intro1.png'
import intro2 from '../../assets/intro2.png'
import element from '../../assets/element.png'
import group from '../../assets/group.png'
import plogo from '../../assets/plogo.png'
export const Intro = () => {
    return (
        <div>
            <div className='max-w-container m-auto mt-[100px] flex gap-[200px]'>
                <div className='w-1/2'>
                    <div className=' relative'>
                        <img className='absolute top-[280px] left-0' src={element} alt="" />
                        <img className='absolute top-[100px] left-[100px]' src={intro1} alt="" />
                        <img className='absolute top-[400px] left-0' src={intro2} alt="" />
                    </div>
                </div>
                <div className='w-1/2 mt-[100px]'>
<img src={group} alt="" />
                        <h1 className='font-sans font-extrabold text-[48px] mt-3'>Who We Are</h1>
                        <p className='font-pap text-[18px] text-[#6C7D93] w-[442px] mt-3'>We are a Dhaka based Digital Communication Agency committed to creating an actionable strategy, online marketing & technology solution for our partners. As a multidisciplinary company, we operate as a unified, </p>
                        <p className='font-pap text-[12px] text-[#6C7D93] w-[442px] mt-3'>Join the 10.000+ Companys Trusting </p>
                        <div className='flex mt-6 gap-12'>
                        <img className src={plogo} alt="" />
                        <img className src={plogo} alt="" />
                        <img className src={plogo} alt="" />
                        </div>
                        <div className='flex mt-10 gap-12'>
                        <img className src={plogo} alt="" />
                        <img className src={plogo} alt="" />
                        <img className src={plogo} alt="" />
                        </div>
                    </div>
            </div>
        </div>
    )
}
