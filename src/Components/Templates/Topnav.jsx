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
      
      setseachers(d.data.results)
    } catch (error) {
      console.log("getSearches error",error)
    }
  }

  useEffect(()=>{
    GetSearches();
  },[query])

  return (
    <div className='w-full h-[10vh] relative flex justify-start items-center pl-[20%]'>
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

      <div className='absolute z-50 w-[50%] max-h-[50vh] top-[100%] left-[20%] bg-zinc-200 overflow-auto rounded'>
      {
searches.map((s, i) => (
  <Link
    to={`/${s.media_type}/details/${s.id}`}
    key={i}
    className="duration-100 bg-[#071013] text-zinc-200  hover:text-black hover:bg-slate-300 w-full p-8 flex justify-start items-center border-b border-slate-900 font-semibold search-result-item"
  >
    <img
      src={
        s.backdrop_path || s.profile_path
          ? `https://image.tmdb.org/t/p/w500/${s.backdrop_path || s.profile_path}`
          : noimg // Use a pre-defined variable with the no image path
      }
      alt={s.original_title || s.name || s.title || s.original_name || "Image"}
      className="w-24 h-24 rounded-lg mr-8 shadow-md" // Consistent sizing and rounded corners
    />
    <span className="text-lg leading-6">{s.original_title || s.name || s.title || s.original_name}</span>
  </Link>
))

}


      
      </div>
     
    </div>
  );
};

export default Topnav;




