import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
        <div className='bg-bg-repice-red'>
            <nav className='py-5 container font-roboto flex justify-between'>
                <div className='flex'>
                    <img src="src/assets/newcooker.png" className='w-20 h-16' alt="" />
                    <Link to="/" >
                        <h1 className='mt-3 font-bold text-white uppercase text-lg'>Repice</h1>
                        <h1 className='-mt-3 ml-7 font-bold text-white uppercase text-lg'>Book</h1>
                    </Link>
                </div>
                <div className=''>
                    
                </div>
                <div className='flex'>
                    <IoMdSearch className='mt-5 ml-1 w-8 h-6  absolute' />
                    <input type="text" className='pl-10 h-10 mt-3 rounded shadow-md outline-none' placeholder="Search" />
                    <IoMdSearch className='mt-5 pr-10' />

                </div>
            </nav>
        </div>
      
    </div>
  )
}

export default Header
