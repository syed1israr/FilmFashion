import React, { useEffect ,useState } from 'react';
import SideNav from '../Templates/SideNav';
import Topnav from '../Templates/Topnav';
import Headers from '../Templates/Header';

import HorizontalCards from '../Templates/HorizantalCards';
import axios from '../../Utils/axios';
import Loader from '../Templates/Loader';
const Home = () => {
  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState([]);
  const [categoery, setCategoery] = useState("all");
  const [page,setpage] = useState(1)

  const getheaderWallpaper = async () => {
    try {
      const d = await axios.get(`trending/all/day`);
      let randomeData = d.data.results[(Math.random() * d.data.results.length).toFixed()];
      setWallpaper(randomeData);
    } catch (error) {
      console.log("getheaderWallpaper error", error);
    }
  };

  const getTrending = async () => {
    try {
     
      const d = await axios.get(`trending/${categoery}/day?page=${page}`);
      
      setpage(page+1)
      setTrending(d.data.results);
    } catch (error) {
      console.log("getTrending error", error);
    }
  };

  useEffect(() => {
    if (!wallpaper) {
      getheaderWallpaper();
    }
    if (!trending.length) {
      console.log(categoery)
      getTrending();
    }
  }, [categoery,page]);

  return wallpaper && trending ? (
    <>
      <SideNav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <Topnav />
        <Headers data={wallpaper} />
        <div className=' mt-2 ml-[20px] mb-3 flex justify-between' >
          <h1 className='text-3xl  ml-[10px] mt-2 font-semibold text-zinc-400'>
            Trending
          </h1>
          <div className='mr-4'>
          
          </div>
        </div>
        <HorizontalCards data={trending} />
      </div>
    </>
  ) : (
    <Loader/>
  );
};

export default Home;