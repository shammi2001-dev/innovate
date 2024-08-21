import React from 'react'
import group from '../../assets/group.png'
import vector2 from '../../assets/vector2.png'
import image from '../../assets/image.png'
import image2 from '../../assets/image2.png'
import fb from '../../assets/fb.png'
import ig from '../../assets/ig.png'
import wp from '../../assets/wp.png'
import twt from '../../assets/twt.png'
const Banner = () => {
  return (
    <div>
      <div className='max-w-container mx-auto mt-[100px] pb-[150px]'>
        <img src={group} alt="" />
        <h1 className='font-sans font-extrabold text-[72px] w-[686px] mt-5'>We Are Digital <span className='text-primary'> Marketing </span>Agency</h1>
        <p className='w-[500px] text-[#6C7D93] font-pap font-[20px] leading-9 mt-4'>Use customer data to build great and solid product experiences that convert. Digital marketing’s development has changed the way brands and businesses use technology for marketing. </p>
        <button className='font-sans font-semibold text-white text-[20px] bg-primary px-10 py-5 rounded-full mt-10'>Get free quoto</button>
      </div>
      <div>
        <img className='absolute top-[50px] right-0' src={vector2} alt="" />
        <img className='absolute top-[150px] right-[70px]' src={image} alt="" />
        <img className='absolute top-[400px] right-[350px]' src={image2} alt="" />
        <img className='absolute top-[250px] right-[650px]' src={fb} alt="" />
        <img className='absolute bottom-[180px] right-[900px]' src={ig} alt="" />
        <img className='absolute bottom-[80px] right-[120px]' src={wp} alt="" />
        <img className='absolute bottom-[50px] left-[80px]' src={twt} alt="" />
      </div>
    </div>
  )
}

export default Banner