import React, { useState } from 'react'
import { NavLink } from 'react-router'

// react-icons
import { FaUser } from "react-icons/fa";
import { HiOutlineFolderAdd } from "react-icons/hi";
import { FaFolderOpen } from "react-icons/fa6";
import { FaFolder } from "react-icons/fa";
import { FaRegFile } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const DashboardSidebar = () => {

  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [isBackdrop, setBackdrop] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleDropDown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  }

  const toggleBackdrop = () => {
    setBackdrop(!isBackdrop);
    setShowModal(!showModal);
  }

  return (
    <div className='main-shadow max-w-80 w-80 px-6 py-4 h-[90vh] mt-4 ml-4 rounded-2xl bg-white'>
      <NavLink to={'/'} className='px-5 py-2 mb-1 font-medium hover:bg-[#e6f2ff] hover:text-[#2f80ed] cursor-pointer flex items-center gap-4 rounded-md'><FaUser size={18} /> Profile</NavLink>
      <NavLink onClick={() => toggleDropDown()} className='px-5 py-2 mb-1 font-medium hover:bg-[#e6f2ff] hover:text-[#2f80ed] cursor-pointer flex items-center gap-4 rounded-md'>{isOpenDropdown ? <FaFolderOpen size={18} /> : <FaFolder size={18} />} Group</NavLink>
      <div>
        {isOpenDropdown && <NavLink onClick={() => toggleBackdrop()} to={'/'} className={`relative px-5 py-2 ml-4 mb-1 font-medium hover:bg-[#e6f2ff] hover:text-[#2f80ed] cursor-pointer flex items-center gap-4 rounded-md duration-1000 ${isOpenDropdown ? 'translate-y-0' : 'translate-y-[-10px]'}`}><HiOutlineFolderAdd size={18} /> Create Group</NavLink>}
        {isOpenDropdown && <NavLink to={'group'} className='px-5 py-2 ml-4 mb-1 font-medium hover:bg-[#e6f2ff] hover:text-[#2f80ed] cursor-pointer flex items-center gap-4 rounded-md'><FaRegFile size={18} />Group 1</NavLink>}
        {isOpenDropdown && <NavLink to={'group'} className='px-5 py-2 ml-4 mb-1 font-medium hover:bg-[#e6f2ff] hover:text-[#2f80ed] cursor-pointer flex items-center gap-4 rounded-md'><FaRegFile size={18} />Group 2</NavLink>}
      </div>
      <div className={`${isBackdrop ? 'backdrop' : ''}`}></div>
      {showModal && (
        <div className='main-shadow modal bg-white rounded-xl p-4 relative'>
          <h1 className='text-center text-xl'>Add new Group</h1>
          <form className='p-2 text-center ' action="">
            <input className='block px-4 py-1 border-1 border-gray-400 focus:outline-3 focus:outline-[#27ae60] my-5 rounded-sm' type="text" placeholder='Group name' />
            <input className='block px-4 py-1 border-1 border-gray-400 focus:outline-3 focus:outline-[#27ae60] my-5 rounded-sm' type="text" placeholder='Password' />
            <div className='flex items-center justify-around mt-6'>
              <button className='bg-[#27ae60] hover:bg-[#27ae56e1] text-white px-3 py-1 rounded-md border-2 border-[#27ae60] cursor-pointer'>Create group</button>
              <button onClick={() => toggleBackdrop()} className='main-btn hover:bg-[#eb5757] hover:text-white px-3 py-1 rounded-md border-2 hover:border-[#eb5757] cursor-pointer'>Cancel</button>
            </div>
          </form>
          {/* <button className='absolute top-0 right-0 '><IoClose /></button> */}
        </div>
      )}
    </div>
  )
}

export default DashboardSidebar