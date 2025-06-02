
import { NavLink } from 'react-router'
import avatar from '../assets/images/image.png'
import logo from '../assets/images/logo.png'
import { useState } from 'react';

// React icons
import { BiLogOut } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdDelete } from "react-icons/md";



const DashboardNavbar = () => {
    const [showDropDown, setShowDropDown] = useState(false);

    const toogleDropDown = () => {
        setShowDropDown(!showDropDown)
    }
    return (
        <div className='main-shadow w-[100%] px-14 py-3 mx-auto flex justify-between items-center rounded-b-xl bg-white'>
            <div className='flex justify-between items-center gap-38'>
                <NavLink to={'/'} className='flex items-center gap-1'>
                    <img className='w-6' src={logo} alt="" />
                    <p className='text-xl'>uantum</p>
                </NavLink>
                <div>
                    <input className='border-1 w-80 px-4 py-1 rounded-md' type="text" placeholder='Search' />
                </div>
            </div>
            <div className='flex items-center gap-6'>
                <NavLink to={'notifactions'} className='cursor-pointer'>
                    <span className='text-yellow-500'>< IoIosNotifications size={30} /></span>
                </NavLink>
                <div onClick={() => toogleDropDown()} className='flex justify-between items-center gap-2 cursor-pointer'>
                    <img className='rounded-[50%] ' src={avatar} alt="" />
                    <p>Quantum Lab</p>
                </div>
                {/* Profile drop down */}
                {showDropDown && (
                    <ul className='main-shadow  absolute top-18 right-6 p-4 bg-white rounded-xl z-100'>
                        <li className='px-5 py-1 mb-1 font-medium hover:bg-[#e6f2ff] hover:text-[#2f80ed] cursor-pointer flex items-center gap-2 rounded-md'><CgProfile size={22} color='gray' /> Profile</li>
                        <NavLink to={'login'} className='px-5 py-1 font-medium hover:bg-[#e6f2ff] hover:text-[#2f80ed] cursor-pointer flex items-center gap-2 rounded-md'><BiLogOut size={22} color='gray' /> Log out</NavLink>
                        {/* <NavLink to={'login'} className='px-5 py-1 font-medium hover:bg-[#f9dada] hover:text-red-500 cursor-pointer flex items-center gap-2 rounded-md'><MdDelete size={22} color='red' /> Delete account</NavLink> */}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default DashboardNavbar