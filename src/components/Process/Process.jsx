import React from 'react'
import group from '../../assets/group.png'
import showtwo from '../../assets/showtwo.png'
const Process = () => {
    return (
        <div className='max-w-container mx-auto mt-[150px]'>
            <img className='m-auto' src={group} alt="" />
            <h1 className='font-sans font-extrabold text-center text-[48px] mt-3'>Our creative process.
            </h1>
            <p className='text-[18px] w-[412px] text-center m-auto text-[#6C7D93] mt-4'>We provide digital experience services to startups and small businesses.
            </p>
<div className='flex gap-10'>
            <div className='w-1/2'>
                <div className='p-6 bg-[#EBF7E9] hover:bg-[#D8EAFF] w-[465px] rounded-2xl mt-[100px]'>
                    <h1 className='font-sans font-bold text-[18px]'>Step-1</h1>
                    <h2 className='font-sans font-semibold text-[30px] mt-5 mb-5'>Global SEO Research</h2>
                    <p className='text-[18px] w-[356px] text-[#6C7D93]'>Practical tools and features make it easier to build and manage your site.
                    </p>
                </div>
                <img className='mt-12' src={showtwo} alt="" />
                <div className='p-6 bg-[#FBF1EC] hover:bg-[#D8EAFF] w-[465px] rounded-2xl mt-12'>
                    <h1 className='font-sans font-bold text-[18px]'>Step-1</h1>
                    <h2 className='font-sans font-semibold text-[30px] mt-5 mb-5'>Launching the Application</h2>
                    <p className='text-[18px] w-[356px] text-[#6C7D93]'>Practical tools and features make it easier to build and manage your site.
                    </p>
                </div>
            </div>

            <div className='w-1/2'>
            <img className='mt-12' src={showtwo} alt="" />
            <div className='p-6 bg-[#EBF7E9] hover:bg-[#D8EAFF] w-[465px] ml-20 rounded-2xl mt-12'>
                    <h1 className='font-sans font-bold text-[18px]'>Step-1</h1>
                    <h2 className='font-sans font-semibold text-[30px] mt-5 mb-5 '>Social media integration</h2>
                    <p className='text-[18px] w-[356px] text-[#6C7D93]'>Practical tools and features make it easier to build and manage your site.
                    </p>
                </div>
                <img className='mt-12' src={showtwo} alt="" />
            </div>
            </div>
        </div>
    )
}

export default Process