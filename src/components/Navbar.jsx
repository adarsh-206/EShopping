import React, { useState } from 'react';
import { FaShopware, FaBars, FaTimes, FaUser } from 'react-icons/fa';
import { BsCart4 } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Navbar = () => {
    let Links = [
        { name: "Home", link: "/" },
        { name: "Men", link: "/men" },
        { name: "Women", link: "/women" },
        { name: "Kids", link: "/kids" },
        { name: <BsCart4 size={18} />, link: "/cart" },
        { name: <FaUser size={16} />, link: "/login" },
    ];
    let [open, setOpen] = useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-50'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                    <FaShopware className='w-6 h-6 text-blue-600' />
                    <span>E-Shop</span>
                </div>

                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {
                        open ? <FaTimes /> : <FaBars />
                    }
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {
                        Links.map((link, index) => (
                            <li key={index} className='md:ml-8 md:my-0 my-7 font-semibold'>
                                <Link to={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</Link>
                            </li>))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;