import axios  from "../Utils/axios";
export { removeperson } from "../Reducers/PeopleSlice"
import  { loadeperson } from "../Reducers/PeopleSlice" 


export const asyncloadperson=(id)=>async(dispath,getstate)=>{
    try {
        const detail= await axios.get(`/person/${id}`);
        const externalid= await axios.get(`/person/${id}/external_ids`);
        const combined_credits= await axios.get(`/person/${id}/combined_credits`);
        const tv_credits= await axios.get(`/person/${id}/tv_credits`);
        const movie_credits= await axios.get(`/person/${id}/movie_credits`);
        let the_ultimate_dets={
            detail:detail.data,
            externalid:externalid.data,
            combined_credits:combined_credits.data,
            tv_credits:tv_credits.data,
            movie_credits:movie_credits.data
        };
        dispath(loadeperson(the_ultimate_dets))
        
    } catch (error) {
        alert("Error:", error)
    }
}