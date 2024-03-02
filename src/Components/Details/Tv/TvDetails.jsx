import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncloadtv } from '../../../Actions/TvAction.jsx'
import { removeTV } from '../../../Actions/TvAction.jsx'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { RiArrowDropLeftLine } from 'react-icons/ri'
import { RiEarthFill } from 'react-icons/ri'
import { RiHome2Fill } from 'react-icons/ri'
import Loader from '../../Templates/Loader.jsx'

import HorizontalCards2 from '../../Templates/HorizantalCards2.jsx'

const MovieDetails = () => {
  const  { pathname }=useLocation()
  const navigate=useNavigate()
  const { id }=useParams()
  const dispath=useDispatch();
  const { info }=useSelector(state=>state.TV)
 
  useEffect(()=>{
    dispath(asyncloadtv(id))
    return ()=>{
      dispath(removeTV())
    }
  },[id]);
  return info ? (
    <div className='w-screen h-screen px-[10%] overflow-hidden overflow-y-auto' style={{
      background: `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0.2)), url(https://image.tmdb.org/t/p/original/${ info.detail.backdrop_path})`,
      backgroundPosition:'center',
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat'
  }}>

        <nav className='w-full h-[10vh] text-zinc-200  flex gap-10 text-2xl item-center mt-8   '>
          <Link>

          <RiArrowDropLeftLine className=' -mt-1 text-4xl hover:text-[#3C887E]'  onClick={()=>navigate(-1)} />
          </Link>
          <a target='_blank'   href={`https://wikidata.org/wiki/${info.externalid.wikidata_id}`} className=' hover:text-[#3C887E]'>
            <RiEarthFill/>
            </a>
          <a target='_blank'  href={info.detail.homepage} className=' hover:text-[#3C887E]'>
            <RiHome2Fill/>
            </a>
          <a target='_blank'  href= {`https://www.imdb.com/title/${info.externalid.imdb_id}`}  className=' hover:text-[#3C887E] -mt-1'>
              IMDB
          </a>


        </nav>
          <hr  className='mb-4'/>
        <div className='w-full flex'>
          
        <img src={`https://image.tmdb.org/t/p/original/${ info.detail.poster_path ||  info.detail.backdrop_path }`} className='w-[40vh] object-cover shadow-[8px_16px_32px_2px_rgba(0,0,0.5)]' alt="" />
      
      <div className="content ml-[5%]">
        <h1 className='text-5xl font-black text-white '>
         {
          info.detail.name  || 
          info.detail.original_name ||
          info.detail.title || 
          info.detail.original_title
         }

    {info?.detail?.release_date && (
    <small className='text-xl font-bold text-zinc-300 ml-1' >({info.detail.release_date.split("-")[0]})</small>
           )}
        </h1>
      <div className='flex  text-zinc-100 items-center gap-3 mt-5 mb-10'>
      <span class=" text-zinc-100 rounded-full text-xl bg-yellow-600 w-[5vh] h-[5vh] flex justify-center items-center 
             "> {(info.detail.vote_average * 10).toFixed()} <sup>%</sup></span>
        <h1 className=' font-semibold text-2xl w-[70px] leading-6 '>User Score</h1>
        <h1>{info.detail.release_date}</h1>
        <h1>{info.detail.genres.map(g=>g.name)}.</h1>
        <h1>{info.detail.runtime}min</h1>
      </div>
        <h1 className='text-xl font-semibold italic text-zinc-200 '>{info.detail.tagline}</h1>
        <h1 className='text-2xl mt-5  text-white mb-3 '>Overview</h1>
        <p className='text-white '>{info.detail.overview}</p>
        <h1 className='text-2xl mt-5  text-white mb-3 '>Translations available</h1>
        <p className='text-white mb-10'>{info.translations.join("  ,  ")}</p>

        <Link to={`${pathname}/trailer`} className='text-white mt-[90%]  p-5 bg-purple-600 rounded-lg '> 👻 play Trailer </Link>
        
      </div>
        </div>
        <div className='w-full  '>
        <div className='mt-2'> 
             <div className='mt-5 flex w-[40vh] item-center gap-2'>
              {
               info.watchproviders &&
               info.watchproviders.flatrate &&
               info.watchproviders.flatrate.map((w,i)=>(
                 <img
                 key={i}
                 title={w.provider_name}
                 className='w-[7vh] h-[7vh] object-cover rounded-md '
                 src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                 alt=''
                 />
               ))
              }

              {
               info.watchproviders &&
               info.watchproviders.buy &&
               info.watchproviders.buy.map((w,i)=>(
                 <img
                 key={i}
                 title={w.provider_name}
                 className='w-[7vh] h-[7vh] object-cover rounded-md '
                 src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                 alt=''
                 />
               ))
              }
             </div>
        </div>
        </div>
        <hr  className='mt-5 mb-5'/>
    <div className="w-screen mt-4">
    <h2 className="text-3xl font-semibold text-white pl-5" >Seasons</h2>
    <HorizontalCards2  data={info.detail.seasons} /> 
    </div>

    <hr  className='mt-5 mb-5'/>
    <div className="w-screen mt-4">
    <h2 className="text-3xl font-semibold text-white pl-5" >Similar Tv Shows</h2>
    <HorizontalCards2  data={info.recomendations || info.similar} /> 
    </div>
 <Outlet/>
    </div>
    
  ) : <Loader/> 
 
}

export default MovieDetails