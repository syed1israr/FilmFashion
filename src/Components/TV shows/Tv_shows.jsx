import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from '../../Utils/axios';
import Loader from '../Templates/Loader';
import { RiArrowDropLeftLine } from 'react-icons/ri';
import Topnav from '../Templates/Topnav';
import Dropdown from '../Templates/Dropdown';
import Cards from "../Templates/Cards"
import InfiniteScroll from 'react-infinite-scroll-component';
const Tv_show = () => {
    const navigate =useNavigate();
    const [categoery, setcategoery] = useState("airing_today")
  
    const [tv, settv] = useState([])
    const [page, setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true)
    document.title= `TV_${categoery} ` 
    const gettv = async () => {
        try {
         
          const d = await axios.get(`/tv/${categoery}?page=${page}`);
          if(d.data.results.length>0){
           
            settv((prev)=>[...prev,...d.data.results])
            setpage(page+1)
          }else{
            hasMore(false);
          }
         
        } catch (error) {
          console.log("settv error", error);
        }
        
      };
      const refreshHandler=async()=>{
        if(tv.length===0){
            gettv(); 
        }else{
            setpage(1)
            settv([])
            gettv()

        }
      }
      useEffect(()=>{
        refreshHandler(); 
      },[categoery])
  return tv.length>0 ?  (
    <div className='  w-screen h-screen overflow-hidden overflow-y-auto '>


        <div className='  w-full   flex items-center justify-between '>
         
            <h1 className=' w-[20%] text-2xl text-zinc-400 font-semibold  flex  item bg-center justify-center'>
                <RiArrowDropLeftLine className='text-4xl hover:text-[#3C887E] '  onClick={()=>navigate(-1)} />
                Tv <small className='text-sm ml-2 mt-4 text-zinc-600'>{categoery}</small></h1>

                <div className='flex items-center justify-between w-[100%]'>
                <Topnav/>
                <Dropdown title="category" options={["popular","top_rated", "on_the_air", "airing_today"]} func={(e)=>setcategoery(e.target.value)}/>
                </div>
        </div>
       <InfiniteScroll
       dataLength={tv.length}
       next={settv}
       
       loader={<Loader/>}
       >
       <Cards data={tv} title="tv"/>
       </InfiniteScroll>
       
        
     
    </div>
  ) : <Loader/>
}

export default Tv_show