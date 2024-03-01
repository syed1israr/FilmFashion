import React from 'react';
import { Link } from 'react-router-dom';

const HorizontalCards = ({ data }) => {
  return (
    <div className='w-[100%] h-[40vh] flex overflow-y-hidden mb-5 mt-5 pb-3 '>
      {data.map((item, index) => (
        <Link
          to={`/${item.media_type}/details/${item.id}`}
          key={index}
          className='ml-[20px] min-w-[20%] w-[50%] rounded-[10px] overflow-hidden border border-gray-700 shadow-md hover:shadow-lg hover:bg-opacity-90 transition-all'
        >
          <img
            className='w-full h-[45%] object-cover rounded-[5px]'
            src={`https://image.tmdb.org/t/p/original/${
              item.backdrop_path || item.profile_path || item.poster_path
            }`}
            alt=''
          />
          <div className='text-white h-[65%] p-3'>
            <h1 className='text-xl font-semibold text-yellow-300'>{
              item.name || item.title || item.original_name || item.original_title
            }</h1>
            <p className='text-white text-[14px] mb-3'>
              {item.overview.slice(0, 100)}...
              <Link className='text-blue-900'>more</Link>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HorizontalCards;
