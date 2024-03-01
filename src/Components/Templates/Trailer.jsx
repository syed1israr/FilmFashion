import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import NotFound from '../Templates/NotFound'
const Trailer = () => {
  const navigate=useNavigate()
  const { pathname }=useLocation()
  const catogery=pathname.includes("movie") ? "movie" :"tv"
  const YTvideo=useSelector( (state) =>state[catogery]?.info?.videos)

  
  return YTvideo?  (
    <div className=' absolute w-screen h-screen flex items-center justify-center z-100  bg-[rgba(0,0,0,0.8)] '>
      <Link
      onClick={()=>navigate(-1)}
      className=' absolute hover:bg-purple-300 ri-close-fill  text-3xl text-white right-[5%] top-[5%]'  >
      </Link>
      <ReactPlayer 
      height={800}
      width={1500}
      url={`https://www.youtube.com/watch?v=${catogery.key}`}/>
       
    </div>
  ) :  <NotFound/>
}

export default Trailer