import React, { useEffect ,useState } from 'react';
import SideNav from '../Templates/SideNav';
import Topnav from '../Templates/Topnav';
import Headers from '../Templates/Header';
import axios from '../../Utils/axios';
const Home = () => {

  const [wallpaper, setwallpaper] = useState(null);

  const getheaderWallpaper=async()=>{
    try {
      const d=await axios.get(`trending/all/day`);
     let randomeData= d.data.results[(Math.random()*d.data.results.length).toFixed()]
      setwallpaper(randomeData)
      
    } catch (error) {
      console.log("getSearches error",error)
    }
  }

  useEffect(()=>{
    !wallpaper && getheaderWallpaper();
  },[])


  return wallpaper?  (
     <>
      <SideNav/>
      <div className="w-[80%] h-full">
        <Topnav/>
        <Headers data={wallpaper}/>
      </div>
      </>
  ) : <h1>loading</h1>;
};

export default Home;
