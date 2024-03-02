import axios  from "../Utils/axios";
export { removeTV } from "../Reducers/TVSlice"
import  { loadTV } from "../Reducers/TVSlice" 


export  const asyncloadtv=(id)=>async(dispath,getstate)=>{
    try {
        const detail= await axios.get(`/tv/${id}`);
        const externalid= await axios.get(`/tv/${id}/external_ids`);
        const recomendations= await axios.get(`/tv/${id}/recommendations`);
        const similar= await axios.get(`/tv/${id}/similar`);
        const Videos= await axios.get(`/tv/${id}/videos`);
        const watchproviders= await axios.get(`/tv/${id}/watch/providers`);
        const translations= await axios.get(`/tv/${id}/translations`);
        let the_ultimate_dets={
            detail:detail.data,
            externalid:externalid.data,
            recomendations:recomendations.data.results,
            similar:similar.data.results,
            Videos:Videos.data.results,
            watchproviders:watchproviders.data.results.IN,
            translations:translations.data.translations.map(t=>t.name)
        };
        dispath(loadTV(the_ultimate_dets))
       
    } catch (error) {
        alert("Error:", error)
    }
}