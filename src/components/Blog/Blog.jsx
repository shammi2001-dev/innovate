import React from 'react'
import group from '../../assets/group.png'
import blog from '../../assets/blog.png'
const Blog = () => {
    return (
        <div className='max-w-container mx-auto mt-[100px]'>
            <img className='m-auto' src={group} alt="" />
            <h1 className='font-sans font-extrabold text-center text-[48px] mt-3'>Our Latest Blog
            </h1>
            <p className='text-[18px] w-[412px] text-center m-auto text-[#6C7D93] mt-4'>We provide digital experience services to startups and small businesses.
            </p>
            <div className='flex mt-[60px] gap-10'>

                <div className='w-1/3'>
                    <img src={blog} alt="" />
                    <div className='p-7 bg-[#f3f3f7] w-[369px]'>
                        <h1 className='font-sans mt-5 text-[24px] text-[#413F45] w-[223px]'>How to Be Ahead of Stock Changes</h1>
                        <p className='text-[18px] text-[#413F45] mt-5 '>By John  - 5 Comments</p>
                        <button className='font-sans font-bold text-[18px] mt-5' >Read more</button>
                    </div>
                </div>
                <div className='w-1/3'>
                    <img src={blog} alt="" />
                    <div className='p-7 bg-[#f3f3f7] w-[369px]'>
                        <h1 className='font-sans mt-5 text-[24px] text-[#413F45] w-[223px]'>How to Be Ahead of Stock Changes</h1>
                        <p className='text-[18px] text-[#413F45] mt-5 '>By John  - 5 Comments</p>
                        <button className='font-sans font-bold text-[18px] mt-5' >Read more</button>
                    </div>
                </div>
                <div className='w-1/3'>
                    <img src={blog} alt="" />
                    <div className='p-7 bg-[#f3f3f7] w-[369px]'>
                        <h1 className='font-sans mt-5 text-[24px] text-[#413F45] w-[223px]'>How to Be Ahead of Stock Changes</h1>
                        <p className='text-[18px] text-[#413F45] mt-5 '>By John  - 5 Comments</p>
                        <button className='font-sans font-bold text-[18px] mt-5' >Read more</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Blog