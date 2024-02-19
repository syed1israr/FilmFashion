
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const SideNav = () => {


  return (
    <div className="w-[20%] h-full  border-r-2 border-zinc-200 p-10 ">
      <h1 className='text-2xl text-white font-bold'>
      <i className=" text-[#6556CD] text-2xl ri-arrow-up-circle-fill mr-3"></i>
      <span className='text-2xl'>Databse</span>
      </h1>
      <nav className='flex flex-col text-zinc-400 text-xl gap-3'>
      <h1 className='text-white font-semibold text-xl mt-10 mb-5 '>News Feeds</h1>
      <Link className='hover:bg-[#6556CD] p-5 text-white rounded-lg duration-300'> <i className="ri-firefox-fill mr-2"></i> trending</Link>
      <Link className='hover:bg-[#6556CD] p-5 text-white rounded-lg duration-300' ><i className="ri-magic-fill mr-2"></i> Popular </Link>
      <Link className='hover:bg-[#6556CD] p-5 text-white rounded-lg duration-300' ><i className="ri-movie-line mr-2"></i>Movies</Link>
      <Link className='hover:bg-[#6556CD] p-5 text-white rounded-lg duration-300'><i className="ri-tv-2-line mr-2"></i>TV Shows</Link>
      <Link className='hover:bg-[#6556CD] p-5 text-white rounded-lg duration-300'><i className="ri-team-fill mr-2"></i>people</Link>
      </nav>
      <hr  className=' border-none h-[1px] bg-zinc-400'/>
      <nav className='flex flex-col text-zinc-400 text-xl gap-3'>
      <h1 className='text-white font-semibold text-xl mt-10 mb-5 '>Website information</h1>
      <Link className='hover:bg-[#6556CD] p-5 text-white rounded-lg duration-300'><i className="ri-customer-service-2-line mr-2"></i>contact Us</Link>
      <Link className='hover:bg-[#6556CD] p-5 text-white rounded-lg duration-300  -mt-6'> <i className="ri-goblet-line mr-2"></i> About</Link>
      </nav>
    </div>
  )
}

export default SideNav