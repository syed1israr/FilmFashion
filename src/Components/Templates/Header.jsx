import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ data }) => {
 
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0.2)), url(https://image.tmdb.org/t/p/original/${ data.backdrop_path || data.profile_path})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat'
    }}
      className='w-full h-[50vh] flex flex-col justify-end p-[3%] items-start'
    >
     <h1 className=' w-[70%] text-5xl font-black text-white'>{data.name || data.title || data.original_name ||data.original_title}</h1>
     <p className='w-[70%] text-white mt-3  mb-3'>{data.overview.slice(0,400)}...<Link to={`/${data.media_type}/details/${data.id}`} className=' text-blue-900 '>more </Link></p>
     <p className='text-white'>
        <i className="ri-megaphone-line text-[#3C887E]"></i> {" "}{data.release_date || "Coming Soon... "}
        <i className="ri-film-fill  text-[#3C887E] ml-5" ></i> {" "}{data.media_type.toUpperCase()}
     </p>
     <Link to={`/${data.media_type}/details/${data.id}/trailer`} className='p-2 rounded text-white  bg-[#3C887E] font-semibold mt-4'> watch Trailer</Link>
    </div>
  );
};

export default Header;
