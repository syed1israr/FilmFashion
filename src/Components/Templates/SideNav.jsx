
import React from 'react'
import { Link } from 'react-router-dom'

import {
  RiArrowUpFill,
  RiBarChartBoxFill,
  RiStarHalfFill,
  RiMovieLine,
  RiTv2Line,
  RiTeamFill,
  RiCustomerService2Line,
  RiQuestionFill ,
} from 'react-icons/ri'; // Import specific icons
const SideNav = () => {


  return (
    <div className="w-[18%] h-full  border-r-2 border-zinc-200 p-10 ">
      <h1 className='text-2xl text-white font-bold flex items-center'>
      <RiArrowUpFill
          className="text-white text-2xl ri-arrow-up-circle-fill mr-3"
        />
      <span className='text-2xl'>Databse</span>
      </h1>
      <nav className='flex flex-col text-zinc-400 text-xl gap-3 mb-3'>
      <h1 className='text-white font-semibold text-xl mt-10 mb-5 '>News Feeds</h1>
      <Link  to= {'/trending'} className='hover:bg-[#6556CD]   p-5 text-white rounded-lg duration-300 flex items-center'> <RiBarChartBoxFill
          className="text-white  text-2xl ri-arrow-up-circle-fill mr-3"
        />trending</Link>
      <Link to={'/popular'} className='hover:bg-[#6556CD] p-5 text-white rounded-lg duration-300 flex items-center' ><RiStarHalfFill
          className="text-white  text-2xl ri-arrow-up-circle-fill mr-3"
        /> Popular </Link>
      <Link  to={'/movie'}  className='hover:bg-[#6556CD] p-5 text-white rounded-lg duration-300 flex items-center ' ><RiMovieLine
          className="text-white  text-2xl ri-arrow-up-circle-fill mr-3"
        />Movies</Link>
      <Link  to={'/tv'} className='hover:bg-[#6556CD] p-5 text-white rounded-lg duration-300 flex items-center'><RiTv2Line
          className="text-white  text-2xl ri-arrow-up-circle-fill mr-3"
        />TV Shows</Link>
      <Link to={'/person'}  className='hover:bg-[#6556CD] p-5 text-white rounded-lg duration-300 flex items-center'><RiTeamFill
          className="text-white  text-2xl ri-arrow-up-circle-fill mr-3"
        />people</Link>
      </nav>
      <hr  className=' border-none h-[1px] bg-zinc-400'/>
      <nav className='flex flex-col text-zinc-400 text-xl gap-3'>
      <h1 className='text-white font-semibold text-xl mt-3 mb-2 '>Website information</h1>
      <Link className='hover:bg-[#6556CD] p-5 text-white rounded-lg duration-300 mt-2 flex items-center  '><RiCustomerService2Line
          className="text-white text-2xl ri-arrow-up-circle-fill mr-3"
        />contact Us</Link>
      <Link className='hover:bg-[#6556CD] p-5 text-white rounded-lg duration-300  -mt-2 flex items-center '><RiQuestionFill 
          className="text-white text-2xl ri-arrow-up-circle-fill mr-3"
        /> About</Link>
      </nav>
    </div>
  )
}

export default SideNav