import React from 'react'
import group from '../../assets/group.png'
import result from '../../assets/result.png'
import circle from '../../assets/circle.png'
import sm1 from '../../assets/sm1.png'
import sm2 from '../../assets/sm2.png'
const Service = () => {
  return (
    <div>
      <div className='max-w-container mx-auto mt-[50px]'>
            <img className='m-auto' src={group} alt="" />
            
            <h1 className='font-sans text-[48px] text-center font-extrabold'>Our Services</h1>
            <h1 className='m-auto mt-4 mb-7 text-center font-pap text-[18px] w-[332px] text-[#6C7D93]'>We have been providing great flooring solutions service.</h1>
        <div className='flex mt-[50px] gap-5'>

          <div className='w-1/3 bg-[#EBF7E9] hover:bg-[#D8EAFF] pt-[70px] pb-[70px] rounded-2xl'>
              <img className='m-auto' src={result} alt="" />
              <h1 className='font-sans mt-7 text-[30px] font-semibold text-center'>MARKETING STRATEGY</h1>
            <p className='font-pap text-[18px] text-center m-auto mt-5 text-[#6C7D93] w-[257px]'>Social Media has changed the way we interact & do business while creating</p>
            <div className='flex justify-center'>
            <button className='font-sans font-bold text-[18px] mt-7' >Read more</button>
            </div>
          </div>
          <div className='w-1/3 bg-[#EBF7E9] hover:bg-[#D8EAFF] pt-[70px] pb-[70px] rounded-2xl'>
              <img className='m-auto' src={sm1} alt="" />
              <h1 className='font-sans mt-7 text-[30px] font-semibold text-center'>Social Marketing</h1>
            <p className='font-pap text-[18px] text-center m-auto mt-5 text-[#6C7D93] w-[257px]'>Social Media has changed the way we interact & do business while creating</p>
            <div className='flex justify-center'>
            <button className='font-sans font-bold text-[18px] mt-7' >Read more</button>
            </div>
          </div>
          <div className='w-1/3 bg-[#FBF1EC] hover:bg-[#D8EAFF] pt-[70px] pb-[70px] rounded-2xl'>
              <img className='m-auto' src={sm2} alt="" />
              <h1 className='font-sans mt-7 text-[30px] font-semibold text-center'>Content Marketing</h1>
            <p className='font-pap text-[18px] text-center m-auto mt-5 text-[#6C7D93] w-[257px]'>Social Media has changed the way we interact & do business while creating</p>
            <div className='flex justify-center'>
            <button className='font-sans font-bold text-[18px] mt-7' >Read more</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Service