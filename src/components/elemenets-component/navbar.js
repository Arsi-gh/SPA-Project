import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/contact'
import Documents from '../pages/documents'
import Services from '../pages/services'
import About from '../pages/about'

export default function Navbar() {
  return (
    <>
        <nav className='m-auto max-w-full bg-slate-500 p-2 flex justify-between items-center text-slate-100'>
            <ul className='flex gap-5  ml-6 text-md'>
                <Link to="/"  className='cursor-pointer hover:bg-slate-600 p-2 px-6 rounded-[3px] transition-all duration-200'>Home</Link>
                <Link to="/documents"  className='cursor-pointer hover:bg-slate-600 p-2 px-6 rounded-[3px] transition-all duration-200'>Documents</Link>
                <Link to="/services"  className='cursor-pointer hover:bg-slate-600 p-2 px-6 rounded-[3px] transition-all duration-200'>Our Services</Link>
                <Link to="/about"  className='cursor-pointer hover:bg-slate-600 p-2 px-6 rounded-[3px] transition-all duration-200'>About us</Link>
                <Link to="/contact"  className='cursor-pointer hover:bg-slate-600 p-2 px-6 rounded-[3px] transition-all duration-200'>Contact us</Link>
            </ul>
            <div className='mr-6'>
                <span></span>
                <input placeholder='Search...' type="text" className='rounded-sm bg-slate-300 text-black outline-none p-1 px-2 placeholder:text-gray-800' />
            </div>
        </nav>
    </>
  )
}
