import React from 'react'
import group from '../../assets/group.png'
import rev from '../../assets/rev.png'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";

const Review = () => {
    return (
        <div className='max-w-container mx-auto flex mt-[150px] gap-8'>
            <div className='w-1/3'>
                <img src={group} alt="" />
                <h1 className='font-sans font-extrabold text-[48px] mt-3'>Client Review</h1>
                <p className='font-pap text-[#6C7D93] text-[18px] mt-3'>people use digital devices instead of visiting physical shops, digital marketing campaigns are becoming more prevalent and efficient.  </p>
                <div className='flex mt-3'>
                <IoIosArrowDropleftCircle className='w-[50px] h-[50px] text-[#e9b698] hover:text-primary' />
                <IoIosArrowDroprightCircle className='w-[50px] h-[50px] text-[#e9b698] hover:text-primary'/>
                </div>
            </div>
            <div className='w-1/3 bg-[#EBF7E9] hover:bg-[#D8EAFF] p-10  rounded-2xl'>
                <p className='font-pap text-[#6C7D93] text-[18px] mt-3 w-[270px]'>Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient. </p>
                <p className='font-sans font-semibold text-[24px] text-right mt-4'>Jane Cooper</p>
                <div className='flex justify-end gap-3'>
                    <img src={rev} alt="" />
                <p className='font-sans text-[18px] text-[#202427]'>Fashion Designer</p>
                
                </div>
            </div>
            <div className='w-1/3 bg-[#EBF7E9] hover:bg-[#D8EAFF] p-10  rounded-2xl'>
                <p className='font-pap text-[#6C7D93] text-[18px] mt-3 w-[270px]'>Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient. </p>
                <p className='font-sans font-semibold text-[24px] text-right mt-4'>Eleanor Pena</p>
                <div className='flex justify-end gap-3'>
                    <img src={rev} alt="" />
                <p className='font-sans text-[18px] text-[#202427]'>Fashion Designer</p>
                
                </div>
            </div>
            

        </div>
    )
}

export default Review