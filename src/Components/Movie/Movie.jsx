import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from '../../Utils/axios';
import Loader from '../Templates/Loader';
import { RiArrowDropLeftLine } from 'react-icons/ri';
import Topnav from '../Templates/Topnav';
import Dropdown from '../Templates/Dropdown';
import Cards from "../Templates/Cards"
import InfiniteScroll from 'react-infinite-scroll-component';
const Movie = () => {
    const navigate =useNavigate();
    const [categoery, setcategoery] = useState("now_playing")
  
    const [Movie, setMovie] = useState([])
    const [page, setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true)
    document.title= `Movie_${categoery} ` 
    const getMovie = async () => {
        try {
         
          const d = await axios.get(`/movie/${categoery}?page=${page}`);
          if(d.data.results.length>0){
           
            setMovie((prev)=>[...prev,...d.data.results])
            setpage(page+1)
          }else{
            hasMore(false);
          }
         
        } catch (error) {
          console.log("getTrending error", error);
        }
        
      };
      const refreshHandler=async()=>{
        if(Movie.length===0){
            getMovie(); 
        }else{
            setpage(1)
            setMovie([])
            getMovie()

        }
      }
      useEffect(()=>{
        refreshHandler(); 
      },[categoery])
  return Movie ?  (
    <div className='  w-screen h-screen overflow-hidden overflow-y-auto '>


        <div className='  w-full   flex items-center justify-between '>
         
            <h1 className=' w-[20%] text-2xl text-zinc-400 font-semibold  flex  item bg-center justify-center'>
                <RiArrowDropLeftLine className='text-4xl hover:text-[#3C887E] '  onClick={()=>navigate(-1)} />
                Movie <small className='text-sm ml-2 mt-4 text-zinc-600'>{categoery}</small></h1>

                <div className='flex items-center justify-between w-[100%]'>
                <Topnav/>
                <Dropdown title="category" options={["popular","top_rated", "upcoming", "now_playing"]} func={(e)=>setcategoery(e.target.value)}/>
                </div>
        </div>
       <InfiniteScroll
       dataLength={Movie.length}
       next={setMovie}
       
       loader={<Loader/>}
       >
       <Cards data={Movie} title="movie"/>
       </InfiniteScroll>
       
        
     
    </div>
  ) : <Loader/>
}

export default Movie