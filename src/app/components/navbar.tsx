"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from  'react-icons/bs' 
// import { useRouter } from 'next/router'


const Navbar = () => {
    const [nav, setnav] = useState(false)
    const [shadow, setShadow] = useState(false)

    const handleNav = () => {
        setnav(!nav)
    }

    useEffect(() => {
        const handleShadow = () => {
          if (window.scrollY >= 90) {
            setShadow(true);
          } else {
            setShadow(false);
          }
        };
        window.addEventListener('scroll', handleShadow);
      }, []);
    

  return (
    
    <div className="sticky top-0 bg-[#ecf0f3]
    ? 'fixed shadow-xl ease-in-out duration-300'
    : 'fixed w-full h-20 z-[100]">
     
       <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
            <Image src="/logo1.png" alt="" width="200" height = "150"/>
        </Link>
        <div>
            <ul className='hidden md:flex'>
                <Link href="#">
                    <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                </Link>
                <Link href="/#about">
                    <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                </Link>
                <Link href="/#skills">
                    <li className='ml-10 text-sm uppercase hover:border-b'>Skill</li>
                </Link>
                <Link href="/#projects">
                    <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                </Link>
                <Link href="/#contact">
                    <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                </Link>
            </ul>
  
            <div onClick={handleNav} className='md:hidden'>
                <AiOutlineMenu size={25}/>
            </div>
        </div>
    </div>

       <div className= {nav ? 'md:hidden fixed left-0 top-30 w-full h-screen bg-black/70' : ''}>
        <div className= {nav ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] mg:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' 
        : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
        <div>
            <div className='flex w-full items-center justify-between'>
                <Image src="/logo1.png" alt="" width="100" height = "55"/>
                <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                    <AiOutlineClose/>
                </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
                <p className='w-[85%] md:w-[90%] py-4'>Let's build something legendary</p>        
            </div>     
        </div>
        <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
                <Link href="#">
                <li className='py-4 text-sm'>Home</li>
                </Link>
                <Link href="#">
                <li className='py-4 text-sm'>About</li>
                </Link>
                <Link href="#">
                <li className='py-4 text-sm'>Skill</li>
                </Link>
                <Link href="#">
                <li className='py-4 text-sm'>Projects</li>
                </Link>
                <Link href="#">
                <li className='py-4 text-sm'>Contact</li>
                </Link>
            </ul>
            <div className='pt-40'>
               <p className='uppercase tracking-widest text-[#2b34a8] '>Let's Connect</p>
               <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                   <FaLinkedinIn/>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                   <FaGithub/>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                   <AiOutlineMail/>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                   <BsFillPersonLinesFill/>
                </div>   
               </div>
            </div>
        </div>
       </div>
      </div> 
    </div>
  )
}

export default Navbar