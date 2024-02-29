import React from 'react'

import { Link } from 'react-router-dom';

const  HorizantalCards=({data})=> {

  return (
        <div className='w-[100%]  h-[40vh]  flex overflow-y-hidden mb-5 pb-3'  >
            {
                data.map((data,i)=><Link to={`/${data.media_type}/details/${data.id}`} key={i} className=' ml-[20px] min-w-[20%] w-[50%]  bg-purple-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-pink-400'>
                    <img className='w-full h-[45%] object-cover rounded-[5px]'
                    src={`https://image.tmdb.org/t/p/original/${ data.backdrop_path || data.profile_path || data.poster_path }  `}alt="" />
                     <div className='text-white h-[65%]'>
                     <h1 
                     className=' ml-2  mt-3 text-xl font-semiblack  text-yellow-300'>{data.name || data.title || data.original_name ||data.original_title}
                     </h1>
            <p 
            className=' text-white mt-3 text-[14px] ml-2 mb-3'>{data.overview.slice(0,100)}...<Link className=' text-blue-900 '>more </Link>
            </p>
                     </div>
                    </Link>)
            }
        </div>
    
  )
}

export default HorizantalCards