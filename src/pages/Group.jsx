import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import { RiAddFill } from "react-icons/ri";
import { FaCartPlus } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const Group = () => {
    return (
        <div>
            <div className='flex justify-between'>
                <h1 className='text-3xl font-medium'>Group name</h1>
                <div className='flex'>
                    <h1>Owner: Muhriddin Ibragimov</h1>
                    <p><BsThreeDots size={20} /></p>
                </div>
            </div>
            <div className='flex justify-between mt-4 gap-6'>
                <div className='main-shadow w-[50%] h-100 p-4 rounded-xl bg-white'>
                    <div className='flex justify-between py-3 border-b-1'>
                        <h1 className='text-xl font-medium'>Items: <span>5</span></h1>
                        <div className='flex items-center gap-2'>
                            <input className='px-3 py-[3px] border-1 border-gray-400 focus:outline-3 focus:outline-[#27ae60] rounded-sm' type="text" placeholder='Item title' />
                            <button className='bg-[#27ae60] hover:bg-[#27ae56e1] text-white px-3 py-1 rounded-md border-2 border-[#27ae60] cursor-pointer'><RiAddFill size={20} /></button>
                        </div>
                    </div>

                    {/* Item */}
                    <div className='flex mt-2 border-1 px-4 py-2 items-center justify-between rounded-md'>
                        <div>
                            <div className='flex'>
                                <h1 className='text font-medium'>Title ljkjk</h1>
                                <span className='bg-cyan-200 px-3 rounded-2xl ml-5 text-sm'>Bought by Muhriddin</span>
                            </div>
                            <p className='text-gray-500'>Created by Muhriddin</p>
                        </div>
                        <div className='flex gap-2'>
                            <button className='bg-[#27ae60] hover:bg-[#27ae56e1] px-4 py-2 rounded-md cursor-pointer'><FaCartPlus size={22} color='white' /></button>
                            <button className='bg-[#eb5757] hover:bg-[#eb5757dd] px-4 py-2 rounded-md cursor-pointer'><MdDeleteForever size={22} color='white' /></button>
                        </div>
                    </div>
                    {/* Item */}
                    <div className='flex mt-2 border-1 px-4 py-2 items-center justify-between rounded-md'>
                        <div>
                            <div className='flex'>
                                <h1 className='text font-medium'>Title ljkjk</h1>
                                <span className='bg-cyan-200 px-3 rounded-2xl ml-5 text-sm'>Bought by Muhriddin</span>
                            </div>
                            <p className='text-gray-500'>Created by Muhriddin</p>
                        </div>
                        <div className='flex gap-2'>
                            <button className='bg-[#27ae60] hover:bg-[#27ae56e1] px-4 py-2 rounded-md cursor-pointer'><FaCartPlus size={22} color='white' /></button>
                            <button className='bg-[#eb5757] hover:bg-[#eb5757dd] px-4 py-2 rounded-md cursor-pointer'><MdDeleteForever size={22} color='white' /></button>
                        </div>
                    </div>

                </div>
                <div className='main-shadow w-[50%] p-4 rounded-xl bg-white'>
                    <div className='flex justify-between py-3 border-b-1'>
                        <h1 className='text-xl font-medium'>Members: <span>2</span></h1>
                    </div>

                    {/* Member */}
                    <div className='flex mt-2 border-1 px-4 py-2 items-center justify-between rounded-md'>
                        <div>
                            <div className='flex'>
                                <h1 className='text font-medium'>Full name</h1>
                            </div>
                            <p className='text-gray-500'>username12</p>
                        </div>
                        <div className='flex gap-2'>
                            <button className='bg-[#eb5757] hover:bg-[#eb5757dd] px-4 py-2 rounded-md cursor-pointer'><MdDeleteForever size={22} color='white' /></button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Group