import React from 'react'
import avatar2 from '../assets/images/avatar2.webp'
import coverImg from '../assets/images/cover-img.jpg'

import { MdEdit } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const Profile = () => {
  return (
     <div className='main-shadow rounded-2xl overflow-hidden relative pb-20 bg-white'>
        <div className='h-50 relative'>
            <img className='w-full h-full object-cover' src={coverImg} alt="" />
            <span className='absolute bottom-2 right-3 px-2 cursor-pointer text-[#2f80ed] bg-[#e6f2ff] rounded-md hover:bg-[#c6dff5]'>Change cover</span>
        </div>
        <div className='avatar-img-box border-4 border-[#2f80ed] w-40 h-40 rounded-[50%] overflow-hidden absolute top-28 left-18'>
            <img className='w-100 ' src={avatar2} alt="" />
            <span className='add-avatar-img absolute w-full text-center bg-[#e6f2ff] bottom-0 left-0 justify-center py-1 hidden opacity-85 cursor-pointer'><MdEdit size={22} /></span>
        </div>
        <div className='pl-16 mt-22'>
            <h1 className='text-3xl font-medium px-4 py-2'>Muhriddin Ibragimov</h1>
            <p className='text flex items-center gap-2 cursor-pointer hover:text-indigo-800 px-4 py-2'><MdEmail size={20} color='gray' /> muhrididn@gmail.com</p>
            <p className='text flex items-center gap-2 cursor-pointer hover:text-indigo-800 px-4 py-2'><FaPhone size={20} color='gray' /> +998 88 939 5953</p>
            <p className='mt-2 text items-center gap-2 cursor-pointer hover:text-red-500 hover:bg-[#f9dada] inline-flex px-4 py-2 rounded-md '><MdDelete size={20} color='gray' display={'inline'} /> Delete account</p>
        </div>
     </div>
  )
}

export default Profile