import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

const Trailer = () => {
    const {pathname} =useLocation()
    const category = pathname.includes("movie") ? "movie" : "tv"
    const YTvideo = useSelector(state => state.movie.info.videos);
    console.log(pathname.includes("movie"),YTvideo)
    
  return (
    <div className=' absolute top-0 left-0 w-screen h-screen flex items-center justify-center '>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${"hello"}`}/>

    </div>
  )
}

export default Trailer