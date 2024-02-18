import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../Utils/axios'
import noimg from '../../../public/OIP.jpeg'
const Topnav = () => {
  const [query, setQuery] = useState(''); 

  const clearSearch = () => {
    setQuery(''); 
  };

  const [searches,setseachers]=useState([])
  const GetSearches=async()=>{
    try {
      const d=await axios.get(`/search/multi?query=${query}`);
      console.log(d.data.results)
      setseachers(d.data.results)
    } catch (error) {
      console.log("getSearches error",error)
    }
  }

  useEffect(()=>{
    GetSearches();
  },[query])

  return (
    <div className='w-full h-[10vh] relative flex justify-start items-center ml-[20%]'>
      <i className="text-3xl text-zinc-400 ri-file-search-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder='Search anything...'
        className='w-[50%] mx-10 p-5 text-zinc-400 text-xl outline-none border-none bg-transparent'
        value={query}
      />
      {query.length > 0 && (
        <i onClick={clearSearch} className="text-xl text-zinc-400 ri-crosshair-2-line"></i>
      )}

      <div className='absolute w-[50%] max-h-[50vh] top-[90%] bg-zinc-200 overflow-auto rounded'>
      {
  searches.map((s, i) => (
    <Link
      key={i}
      className={`duration-100 hover:text-black hover:bg-zinc-600 w-[100%] text-zinc-800 p-10 flex justify-start items-center border-b-2 border-zinc-100 font-semibold`}
    >
      <img
        src={
          s.backdrop_path || s.profile_path
            ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}`
            : noimg // Or your preferred placeholder
        }
        alt={s.original_title || s.name || s.title || s.original_name || 'Image'} // Provide alt text
        className={`w-[10vh] h-[10vh] object-cover rounded mr-8 shadow-lg`}
      />
      <span>{s.original_title || s.name || s.title || s.original_name}</span>
    </Link>
  ))
}


      
      </div>
      <h1 className='text-white'>54:17</h1>
    </div>
  );
};

export default Topnav;




