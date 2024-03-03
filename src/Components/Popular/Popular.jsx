import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from '../../Utils/axios';
import Loader from '../Templates/Loader';
import { RiArrowDropLeftLine } from 'react-icons/ri';
import Topnav from '../Templates/Topnav';
import Dropdown from '../Templates/Dropdown';
import Cards from "../Templates/Cards"
import InfiniteScroll from 'react-infinite-scroll-component';


const Popular = () => {
    
    const navigate =useNavigate();
    const [categoery, setcategoery] = useState("movie")
  
    const [Popular, setPopular] = useState([])
    const [page, setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true)
    document.title= `Popular + Category ${categoery} ` 
    const getPopular = async () => {
        try {
         
          const d = await axios.get(`/${categoery}/popular?page=${page}`);
          if(d.data.results.length>0){
           
            setPopular((prev)=>[...prev,...d.data.results])
            setpage(page+1)
          }else{
            hasMore(false);
          }
         
        } catch (error) {
          console.log("getTrending error", error);
        }
        
      };
      const refreshHandler=async()=>{
        if(Popular.length===0){
            getPopular(); 
        }else{
            setpage(1)
            setPopular([])
            getPopular()

        }
      }
      useEffect(()=>{
        refreshHandler(); 
      },[categoery])

  return Popular ?  (
    <div className='  w-screen h-screen overflow-hidden overflow-y-auto '>


        <div className='  w-full   flex items-center justify-between '>
         
            <h1 className=' w-[20%] text-2xl text-zinc-400 font-semibold  flex  item bg-center justify-center'>
                <RiArrowDropLeftLine className='text-4xl hover:text-[#3C887E]'  onClick={()=>navigate(-1)} />
                Popular <small className='text-sm ml-2 mt-4 text-zinc-600'>{categoery}</small></h1>

                <div className='flex items-center justify-between w-[100%]'>
                <Topnav/>
                <Dropdown title="category" options={["movie","tv"]} func={(e)=>setcategoery(e.target.value)}/>
                </div>
        </div>
       <InfiniteScroll
       dataLength={Popular.length}
       next={setPopular}
       
       loader={<Loader/>}
       >
       <Cards data={Popular} title={categoery}/>
       </InfiniteScroll>
       
        
     
    </div>
  ) : <Loader/>
  
}

export default Popular