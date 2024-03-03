import React, { useEffect } from 'react'
import { useNavigate} from 'react-router-dom'
import { RiArrowDropLeftLine } from 'react-icons/ri';
import Topnav from '../Templates/Topnav';
import Dropdown from '../Templates/Dropdown';
import { useState } from 'react';
import axios from '../../Utils/axios';
import Loader from '../Templates/Loader';
import Cards from "../Templates/Cards"
import InfiniteScroll from 'react-infinite-scroll-component';
const Trending = () => {
    document.title= "Trending"
    const navigate =useNavigate();
    const [categoery, setcategoery] = useState("all")
    const [duration, setduration] = useState("day")
    const [Trending, setTrending] = useState([])
    const [page, setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true)
    
    const getTrending = async () => {
        try {
         
          const d = await axios.get(`trending/${categoery}/${duration}?page=${page}`);
          if(d.data.results.length>0){
            console.log(d.data)
            setTrending((prev)=>[...prev,...d.data.results])
            setpage(page+1)
          }else{
            hasMore(false);
          }
         
        } catch (error) {
          console.log("getTrending error", error);
        }
      };
      const refreshHandler=async()=>{
        if(Trending.length===0){
            getTrending(); 
        }else{
            setpage(1)
            setTrending([])
            getTrending()

        }
      }

      useEffect(()=>{
        refreshHandler(); 
      },[categoery,duration])



  return  Trending ? (
    <div className='  w-screen h-screen overflow-hidden overflow-y-auto '>


        <div className='  w-full   flex items-center justify-between '>
         
            <h1 className=' w-[20%] text-2xl text-zinc-400 font-semibold  flex  item bg-center justify-center'>
                <RiArrowDropLeftLine className='text-4xl hover:text-[#3C887E]'  onClick={()=>navigate(-1)} />
                Trending <small className='text-sm ml-2 mt-4 text-zinc-600'>{categoery}</small> </h1>

                <div className='flex items-center justify-between w-[100%]'>
                <Topnav/>
                <Dropdown title="category" options={["movie","tv","all"]} func={(e)=>setcategoery(e.target.value)}/>
                <div className='w-[2%]'></div>
                <Dropdown title="duration" options={["Week","day"]} func={(e)=>setduration(e.target.value)}/>
                </div>
        </div>
       <InfiniteScroll
       dataLength={Trending.length}
       next={getTrending}
       
       loader={<Loader/>}
       >
       <Cards data={Trending} title={categoery}/>
       </InfiniteScroll>
       
        
     
    </div>
  ) : <Loader/>
}

export default Trending