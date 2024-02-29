import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  { asyncloadMovie } from '../../../Actions/MovieAction.jsx'
import { removeMovie } from "../../../Reducers/MovieSlice.jsx"
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { RiArrowDropLeftLine } from 'react-icons/ri'
import { RiEarthFill } from 'react-icons/ri'
import { RiHome2Fill } from 'react-icons/ri'
import Loader from '../../Templates/Loader.jsx'

const MovieDetails = () => {
  const navigate=useNavigate()
  const {id}=useParams()
  const dispath=useDispatch();
  const {info}=useSelector(state=>state.movie)

  useEffect(()=>{
    dispath(asyncloadMovie(id))
    return ()=>{
      dispath(removeMovie())
    }
  },[]);
  return info ? (
    <div className='w-screen h-screen px-[10%]' style={{
      background: `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0.2)), url(https://image.tmdb.org/t/p/original/${ info.detail.backdrop_path})`,
      backgroundPosition:'center',
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat'
  }}>



        

        <nav className='w-full h-[10vh] text-zinc-200  flex gap-10 text-2xl item-center mt-8   '>
          <Link>

          <RiArrowDropLeftLine className=' -mt-1 text-4xl hover:text-purple-700'  onClick={()=>navigate(-1)} />
          </Link>
          <a target='_blank'   href={`https://wikidata.org/wiki/${info.externalid.wikidata_id}`} className=' hover:text-purple-700'>
            <RiEarthFill/>
            </a>
          <a target='_blank'  href={info.detail.homepage} className=' hover:text-purple-700'>
            <RiHome2Fill/>
            </a>
          <a target='_blank'  href= {`https://www.imdb.com/title/${info.externalid.imdb_id}`}  className=' hover:text-yellow-700 -mt-1'>
              IMDB
          </a>


        </nav>

  




    </div>
  ) : <Loader/> 
 
}

export default MovieDetails