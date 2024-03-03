import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from '../../Utils/axios';
import Loader from '../Templates/Loader';
import { RiArrowDropLeftLine } from 'react-icons/ri';
import Topnav from '../Templates/Topnav';
import Dropdown from '../Templates/Dropdown';
import Cards from "../Templates/Cards"
import InfiniteScroll from 'react-infinite-scroll-component';


const people = () => {
    const navigate =useNavigate();
    const [categoery, setcategoery] = useState("popular")
  
    const [person, setperson] = useState([])
    const [page, setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true)
    document.title= `person_${categoery} ` 
    const getperson = async () => {
        try {
         
          const d = await axios.get(`/person/${categoery}?page=${page}`);
          if(d.data.results.length>0){
           
            setperson((prev)=>[...prev,...d.data.results])
            setpage(page+1)
          }else{
            hasMore(false);
          }
         
        } catch (error) {
          console.log("setperson error", error);
        }
        
      };
      const refreshHandler=async()=>{
        if(person.length===0){
            getperson(); 
        }else{
            setpage(1)
            setperson([])
            getperson()

        }
      }
      useEffect(()=>{
        refreshHandler(); 
      },[categoery])
  return person.length>0 ?  (
    <div className='  w-screen h-screen overflow-hidden overflow-y-auto '>


        <div className='  w-full   flex items-center justify-between '>
         
            <h1 className=' w-[20%] text-2xl text-zinc-400 font-semibold  flex  item bg-center justify-center'>
                <RiArrowDropLeftLine className='text-4xl hover:text-[#3C887E]'  onClick={()=>navigate(-1)} />
                People <small className='text-sm ml-2 mt-4 text-zinc-600'>{categoery}</small></h1>

                <div className='flex items-center justify-between w-[100%]'>
                <Topnav/>
                </div>
        </div>
       <InfiniteScroll
       dataLength={person.length}
       next={setperson}
       
       loader={<Loader/>}
       >
       <Cards data={person} title="person"/>
       </InfiniteScroll>
       
        
     
    </div>
  ) : <Loader/>
}

export default people