import React from 'react'
import notFound from '../../../public/404.gif'
import { Link } from 'react-router-dom'
import {  X } from 'react-feather'; 
const Loader = () => {
  return (
    < div className='flex items-center justify-center w-screen h-screen bg-[#050F1A]'>
     <Link
      onClick={()=>navigate(-1)}
      className='hover:text-[#3C887E] absolute text-3xl text-white right-[5%] top-[5%]'
      >
        <X/>
      </Link>
    <img src={notFound} alt="" className=' h-[70%] w-[50%] rounded-[50px]  object-cover ' />
   
    </ div>
  )
}

export default Loader