
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { useLocation ,Link, useNavigate } from 'react-router-dom'
import {  X } from 'react-feather'; 
import Loader from './Loader';
const Trailer = () => {
    const { pathname }=useLocation()
    const navigate=useNavigate()
    const YTvideo=useSelector(state=>state.movie.info.videos)
    
    
  return  (
    <div className='bg-[rgba(0,0,0,0.8)] absolute top-0 left-0 w-screen h-screen flex items-center justify-center z-10000 '
    >
      <Link
      onClick={()=>navigate(-1)}
      className='hover:text-[#3C887E] absolute text-3xl text-white right-[5%] top-[5%]'
      >
        <X/>
      </Link>
      {  YTvideo ? <ReactPlayer
          controls
          height={600}
          width={1000}
       url={`https://www.youtube.com/watch?v=${YTvideo[0].key}`} /> : <Loader/>}
     
    
    </div>
  ) 
}

export default Trailer