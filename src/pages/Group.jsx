import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import { RiAddFill } from "react-icons/ri";

const Group = () => {
  return (
    <div>
        <div>
            <h1>Group name</h1>
            <div>
                <h1>Owner: Muhriddin Ibragimov</h1>
                <p><BsThreeDots size={20} /></p>
            </div>
        </div>
        <div className='flex justify-between mt-4 gap-6'>
            <div className='w-[50%] h-150 border-1 p-4 rounded-xl bg-white'>
                <div className='flex justify-between py-3 border-b-1'>
                    <h1 className='text-xl font-medium'>Items: <span>5</span></h1>
                    <div className='flex items-center gap-2'>
                        <input className='px-3 py-[3px] border-1 border-gray-400 focus:outline-3 focus:outline-[#27ae60] rounded-sm' type="text" placeholder='Item title' />
                        <button className='bg-[#27ae60] hover:bg-[#27ae56e1] text-white px-3 py-1 rounded-md border-2 border-[#27ae60] cursor-pointer'><RiAddFill size={20} /></button>
                    </div>
                </div>
            </div>
            <div className='w-[50%] border-1 p-4 rounded-xl bg-white'>
                <div className='flex justify-between py-3 border-b-1'>
                    <h1 className='text-xl font-medium'>Members: <span>2</span></h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Group