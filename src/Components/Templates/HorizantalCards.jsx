import React from 'react'

import { Link } from 'react-router-dom';

const  HorizantalCards=({data})=> {

  return (
        <div className='w-[100%] h-[40vh]  flex overflow-y-hidden mb-3 '  >
            {
                data.map((data,i)=><div key={i} className=' ml-[20px] min-w-[20%] w-[50%]  bg-zinc-900 mr-5 rounded-xl shadow-slate-900 shadow-xl'>
                    <img className='w-full h-[45%] object-cover rounded-xl'
                    src={`https://image.tmdb.org/t/p/original/${ data.backdrop_path || data.profile_path || data.poster_path }  `}alt="" />
                     <div className='text-white h-[65%]'>
                     <h1 
                     className=' ml-2  mt-3 text-xl font-semiblack '>{data.name || data.title || data.original_name ||data.original_title}
                     </h1>
            <p 
            className=' text-white mt-3 text-[14px] ml-2 mb-3'>{data.overview.slice(0,100)}...<Link className=' text-blue-900 '>more </Link>
            </p>
                     </div>
                    </div>)
            }
        </div>
    
  )
}

export default HorizantalCards