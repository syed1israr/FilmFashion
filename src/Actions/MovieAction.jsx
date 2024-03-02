import axios  from "../Utils/axios";
export { removeMovie } from "../Reducers/MovieSlice"
import  { loadeMovie } from "../Reducers/MovieSlice" 


export const asyncloadMovie=(id)=>async(dispath,getstate)=>{
    try {
        const detail= await axios.get(`/movie/${id}`);
        const externalid= await axios.get(`/movie/${id}/external_ids`);
        const recomendations= await axios.get(`/movie/${id}/recommendations`);
        const similar= await axios.get(`/movie/${id}/similar`);
        const Videos= await axios.get(`/movie/${id}/videos`);
        const watchproviders= await axios.get(`/movie/${id}/watch/providers`);
        const translations= await axios.get(`/movie/${id}/translations`);
        let the_ultimate_dets={
            detail:detail.data,
            externalid:externalid.data,
            recomendations:recomendations.data.results,
            similar:similar.data.results,
            videos:Videos.data.results,
            watchproviders:watchproviders.data.results.IN,
            translations:translations.data.translations.map(t=>t.name)
        };
        dispath(loadeMovie(the_ultimate_dets))
       
    } catch (error) {
        alert("Error:", error)
    }
}