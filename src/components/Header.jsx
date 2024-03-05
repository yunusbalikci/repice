import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function Header({data})  {

  return (
    <div>
        <div className='bg-bg-repice-red'>
            <nav className='py-5 container font-roboto flex justify-between'>
                <div className='flex'>
                    <img src="https://cdn-icons-png.freepik.com/512/5403/5403020.png" className='w-20 h-16' alt="" />
                    <Link to="/" >
                        <h1 className='mt-3 font-bold text-white uppercase text-lg'>Repice</h1>
                        <h1 className='-mt-3 ml-7 font-bold text-white uppercase text-lg'>Book</h1>
                    </Link>
                </div>
            </nav>
        </div>
      
    </div>
  )
}

export default Header
