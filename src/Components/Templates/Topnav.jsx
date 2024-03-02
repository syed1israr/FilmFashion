import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, X } from 'react-feather'; // Import icons from react-feather
import axios from '../../Utils/axios';
import noimg from '../../../public/OIP.jpeg';

const Topnav = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const clearSearch = () => {
    setQuery('');
    setSearchResults([]);
  };

  const getSearchResults = async () => {
    try {
      const response = await axios.get(`/search/multi?query=${query}`);
      setSearchResults(response.data.results);
    } catch (error) {
      console.log("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    if (query.trim() !== '') {
      getSearchResults();
    } else {
      setSearchResults([]);
    }
  }, [query]);

  return (
    <div className='w-full h-[10vh] relative flex justify-start items-center pl-[20%]'>
      <Search className="text-3xl text-zinc-400 mr-2" />
      <input
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder='Search anything...'
        className='w-[50%] mx-10 p-5 text-zinc-400 text-xl outline-none border-none bg-transparent'
        value={query}
      />
      {query.length > 0 && (
        <X onClick={clearSearch} className="text-xl text-zinc-400 cursor-pointer" />
      )}

      <div className='absolute z-50 w-[50%] max-h-[50vh] top-[100%] left-[20%] bg-zinc-200 overflow-auto rounded'>
        {searchResults.map((result, i) => (
          <Link
            to={`/${result.media_type}/details/${result.id}`}
            key={i}
            className="duration-100 bg-[#071013] text-zinc-200  hover:text-black hover:bg-slate-300 w-full p-8 flex justify-start items-center border-b border-slate-900 font-semibold search-result-item"
          >
            <img
              src={result.backdrop_path || result.profile_path ? `https://image.tmdb.org/t/p/w500/${result.backdrop_path || result.profile_path}` : noimg}
              alt={result.original_title || result.name || result.title || result.original_name || "Image"}
              className="w-24 h-24 rounded-lg mr-8 shadow-md"
            />
            <span className="text-lg leading-6">{result.original_title || result.name || result.title || result.original_name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topnav;
