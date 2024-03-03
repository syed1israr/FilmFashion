import React from 'react'
import { Link } from 'react-router-dom'
import noimg from '../../../public/OIP.jpeg'
const Cards = ({data,title,CustomCss}) => {

  return (
    <div className={`${CustomCss}`}>
        {
            data.map((c,i)=>(
                <Link to={`/${c.media_type || title}/details/${c.id}`} key={i} 
                className={`relative w-[35vh] ml-[6%] mb-[5%]`}
                
                >
                  <img  src={ (c.poster_path ||  c.backdrop_path || c.profile_path) ? `https://image.tmdb.org/t/p/original/${ c.poster_path ||  c.backdrop_path || c.profile_path}` : noimg} className='w-[40vh] object-cover shadow-[8px_16px_32px_2px_rgba(0,0,0.5)] rounded-sm' alt="" />
                  <h1 className='text-2xl text-zinc-200 mt-3 font-semibold'>
                {
                c.name ||
                c.title ||
                c.original_name ||
                c.original_title
                }
                </h1>

              {
                c.vote_average && 
                <div class=" absolute right-[-6%] bottom-[20%] text-zinc-100 rounded-full text-xl bg-yellow-600 w-[5vh] h-[5vh] flex justify-center items-center 
                "> {(c.vote_average * 10).toFixed()} <sup>%</sup></div>
              }

               
                </Link>
            ))
        }
    </div>
  )
}

export default Cards