import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  { asyncloadperson } from '../../../Actions/PersonAction.jsx'
import { removeperson } from "../../../Reducers/PeopleSlice.jsx"
import { Outlet, useLocation, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { RiArrowDropLeftLine, RiFacebookBoxFill } from 'react-icons/ri'
import { RiEarthFill } from 'react-icons/ri'
import { RiInstagramFill } from 'react-icons/ri'
import { RiTwitterXLine } from 'react-icons/ri'
import Loader from '../../Templates/Loader.jsx'

import HorizantalCards from '../../Templates/HorizantalCards.jsx'

const MovieDetails = () => {
  const  { pathname }=useLocation()
  const navigate=useNavigate()
  const { id }=useParams()
  const dispath=useDispatch();
  const { info }=useSelector(state=>state.people)
 console.log( " person ",info)
  useEffect(()=>{
    dispath(asyncloadperson(id))
    return ()=>{
      dispath(removeperson())
    }
  },[]);
  return  info ?(
    <div className='p-[9%] w-screen h-[200vh]  flex  bg-[#071013]  overflow-x-hidden' >
      
      <div className='w-[40%] -ml-[50px] '>
      <nav className='w-full text-fuchsia-100  top-[7.5%] absolute '>
          <Link>
          <RiArrowDropLeftLine className=' -mt-1 text-5xl hover:text-purple-700'  onClick={()=>navigate(-1)} />
          </Link>
       
      </nav>

      <div className='w-full flex flex-col '>
        <div className='w-[100%] '>
        <img src={`https://image.tmdb.org/t/p/original/${ info.detail.profile_path ||  info.detail.backdrop_path }`} className='  w-[30vw]  object-cover shadow-[8px_16px_32px_2px_rgba(0,0,0.5)]' alt="" />
        <hr  className=' w-[40vh] bg-zinc-900 mb-4 mt-5'/>
        </div>
      <div className='w-[80%] flex  text-white gap-x-10'>
           <a target='_blank'   href={`https://wikidata.org/wiki/${info.externalid.wikidata_id}`} className=' hover:text-[#3C887E] text-2xl text-white'>
            <RiEarthFill/>
            </a>
            <a target='_blank'   href={`https://facebook.com/${info.externalid.facebook_id}`} className=' hover:text-[#3C887E] text-2xl text-white'>
            <RiFacebookBoxFill/>
            </a>
            <a target='_blank'   href={`https://instagram.com/${info.externalid.instagram_id}`} className=' hover:text-[#3C887E] text-2xl text-white'>
            <RiInstagramFill/>
            </a>
            <a target='_blank'   href={`https://twitter.com/${info.externalid.twitter_id}`} className=' hover:text-[#3C887E] text-2xl text-white'>
            <RiTwitterXLine/>
            </a>

      </div>

      </div>
      <h1 className='text-2xl text-zinc-400 font-semibold my-5'>Personal Info</h1>
      <h1 className='text-lg text-zinc-400 '>
        Knwon For
        </h1>
        <h1 className=' text-zinc-400 font- my-5'>
        {info.detail.known_for_department}
        </h1>
      <h1 className='text-lg text-zinc-400 '>
        Gender
        </h1>
        <h1 className=' text-zinc-400 font- my-5'>
        {info.detail.gender === 2 ? "male" : "female"}
        </h1>
        <h1 className='text-lg text-zinc-400 '>
        Birthday
        </h1>
        <h1 className=' text-zinc-400 font- my-5'>
        {info.detail.birthday}
        </h1>
        <h1 className='text-lg text-zinc-400 '>
        Deathday
        </h1>
        <h1 className=' text-zinc-400 font- my-5'>
        {info.detail.deathday ? info.detail.deathday : "Not yet" }
        </h1>
        <h1 className='text-lg text-zinc-400 '>
        place of birth
        </h1>
        <h1 className=' text-zinc-400 font- my-5'>
        {info.detail.place_of_birth }
        </h1>
        <h1 className='text-lg text-zinc-400 '>
        also Known As
        </h1>
        <h1 className=' text-zinc-400 font- my-5'>
        {info.detail.also_known_as.join("  ,  ") }
        </h1>
      </div>
      <div className='w-[90%] ml-[10%]'>
      

        <h1 className='  text-6xl text-zinc-400 font-semibold my-5'>
        {info.detail.name}
        </h1>
        <h1 className='text-2xl text-zinc-400 font-semibold my-5'>Biography</h1>
        <p className='text-zinc-300 mt-3 '>{info.detail.biography}</p>
        <h1 className='text-lg text-zinc-400 font-semibold my-5'>summary</h1>
        <div className='-ml-[50px]'>
        <HorizantalCards data={info.combined_credits.cast}/>
        </div>

      </div>

    </div>
  ) :  <Loader/>
 
}

export default MovieDetails


