import React from 'react'
import logo2 from '../../assets/logo2.png'
const Footer = () => {
    return (
        <div className='max-w-container mx-auto flex mt-[150px] pb-12 gap-[250px]'>
            <div className='w-1/4'>
                <img src={logo2} alt="" />
                <p className='text-[20px] w-[412px] text-[#6C7D93] mt-8'>Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
                <p className='text-[18px] w-[412px] text-[#6C7D93] mt-[180px]'>@2024 Innovate.All rights reserved.</p>
            </div>
            <div className='w-3/4 flex'>
                <div>
                    <h1 className='font-sans font-semibold text-[24px]'>Features</h1>
                    <ul>
                        <li className='text-[20px] w-[412px] text-[#6C7D93] mt-8'>Home</li>
                        <li className='text-[20px] w-[412px] text-[#6C7D93] mt-8'>About</li>
                        <li className='text-[20px] w-[412px] text-[#6C7D93] mt-8'>Benefit</li>
                        <li className='text-[20px] w-[412px] text-[#6C7D93] mt-8'>Pricing</li>
                        <li className='text-[20px] w-[412px] text-[#6C7D93] mt-8'>Blog</li>
                    </ul>
                </div> 
                <div>
                    <h1 className='font-sans font-semibold text-[24px]'>Product</h1>
                    <ul>
                        <li className='text-[20px] w-[412px] text-[#6C7D93] mt-8'>Task Management</li>
                        <li className='text-[20px] w-[412px] text-[#6C7D93] mt-8'>Company growth</li>
                        <li className='text-[20px] w-[412px] text-[#6C7D93] mt-8'>Time tracking</li>   
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Footer