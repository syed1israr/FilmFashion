import React from 'react';
import { Link } from 'react-router-dom';
import {
  MdTrendingUp,
  MdStarHalf,
  MdMovie,
  MdTv,
  MdPeople,
  MdInfo,
  MdContactSupport,
} from 'react-icons/md'; // Import specific icons from Material Design Icons

const SideNav = () => {
  return (
    <div className="w-[18%] h-full  border-r-2 border-zinc-200 p-10 ">
      <h1 className='text-2xl text-white font-bold flex items-center'>
        <MdTrendingUp className="text-white text-2xl mr-3" />
        <span className='text-2xl'>Database</span>
      </h1>
      <nav className='flex flex-col text-zinc-400 text-xl gap-3 mb-3'>
        <h1 className='text-white font-semibold text-xl mt-10 mb-5 '>News Feeds</h1>
        <Link to='/trending' className='hover:bg-[#3C887E] p-5 text-white rounded-lg duration-300 flex items-center'>
          <MdTrendingUp className="text-white text-2xl mr-3" />
          Trending
        </Link>
        <Link to='/popular' className='hover:bg-[#3C887E] p-5 text-white rounded-lg duration-300 flex items-center'>
          <MdStarHalf className="text-white text-2xl mr-3" />
          Popular
        </Link>
        <Link to='/movie' className='hover:bg-[#3C887E] p-5 text-white rounded-lg duration-300 flex items-center'>
          <MdMovie className="text-white text-2xl mr-3" />
          Movies
        </Link>
        <Link to='/tv' className='hover:bg-[#3C887E] p-5 text-white rounded-lg duration-300 flex items-center'>
          <MdTv className="text-white text-2xl mr-3" />
          TV Shows
        </Link>
        <Link to='/person' className='hover:bg-[#3C887E] p-5 text-white rounded-lg duration-300 flex items-center'>
          <MdPeople className="text-white text-2xl mr-3" />
          People
        </Link>
      </nav>
      <hr className='border-none h-[1px] bg-zinc-400'/>
      <nav className='flex flex-col text-zinc-400 text-xl gap-3'>
        <h1 className='text-white font-semibold text-xl mt-3 mb-2 '>Website information</h1>
        <Link to='/about' className='hover:bg-[#3C887E] p-5 text-white rounded-lg duration-300 -mt-2 flex items-center'>
          <MdInfo className="text-white text-2xl mr-3" />
          About
        </Link>
        <Link to='/contact' className='hover:bg-[#3C887E] p-5 text-white rounded-lg duration-300 mt-2 flex items-center'>
          <MdContactSupport className="text-white text-2xl mr-3" />
          Contact Us
        </Link>
      </nav>
    </div>
  );
}

export default SideNav;
