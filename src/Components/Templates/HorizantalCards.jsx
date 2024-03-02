import React from 'react';
import { Link } from 'react-router-dom';
import noimg from '../../../public/OIP.jpeg';

const HorizontalCards = ({ data }) => {
  return (
    <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5 ml-2'>
      {data.length > 0 ? (
        data.map((item, index) => (
          <Link
            to={`/${item.media_type}/details/${item.id}`}
            key={index}
            className=' ml-4  bg-gray-900 rounded-md overflow-hidden shadow-md hover:shadow-lg transition-all duration-300'
          >
            <img
              className='w-full h-48 object-cover object-center'
              src={
                item.backdrop_path || item.profile_path || item.poster_path
                  ? `https://image.tmdb.org/t/p/original/${
                      item.backdrop_path || item.profile_path || item.poster_path
                    }`
                  : noimg
              }
              alt=''
            />
            <div className='p-4'>
              <h1 className='text-lg font-semibold text-[#3C887E]'>
                {item.name || item.title || item.original_name || item.original_title}
              </h1>
              <p className='text-gray-400 text-sm mt-2'>
                {item.overview.slice(0, 100)}...
                <Link to={`/${item.media_type}/details/${item.id}`} className='text-blue-500 ml-1'>
                  more
                </Link>
              </p>
            </div>
          </Link>
        ))
      ) : (
        <h1 className='text-3xl text-red-600 font-black text-center mt-10'>Nothing to show</h1>
      )}
    </div>
  );
};

export default HorizontalCards;
