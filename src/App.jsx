import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Trending from "./Components/Trending/Trending";
import Popular from "./Components/Popular/Popular";
import Movie from "./Components/Movie/Movie";
import Tv_show from "./Components/TV shows/Tv_shows";
import People  from "./Components/People/people";
import MovieDetails from "../src/Components/Details/Movie/MovieDetails"
import TVDetails from "../src/Components/Details/Tv/TvDetails"
import PeopleDetail from "./Components/Details/People/PeopleDetails"
import ContactUs from "./Components/Contactus/ContactUs";
import About from "./Components/About/About";
import Trailer from "./Components/Templates/Trailer";
import TV_trailer from "./Components/Templates/TV_trailer";
import NotFound from "../src/Components/Templates/NotFound"
export default function App() {
  
  return (
  <div className="w-screen- h-screen bg-[#071013] flex">
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/trending" element={<Trending/>}/>
    <Route path="/popular" element={<Popular/>}/>
    <Route path="/movie" element={<Movie/>}/>
    <Route path="/movie/details/:id" element={<MovieDetails />}>
    <Route path="trailer" element={<Trailer />} />
    </Route>
    <Route path="/tv" element={<Tv_show/>}/>
    <Route path="/tv/details/:id" element={<TVDetails/>}>
    <Route path="trailer" element={<TV_trailer />} />
    </Route>
    <Route path="/tv/details/:id/trailer" element={<Trailer/>}/>
    <Route path="/person" element={<People/>}/>
    <Route path="/person/details/:id" element={<PeopleDetail/>}/>
    <Route path="/contact" element={<ContactUs/>}/>
    <Route path="/about" element={<About/>}/>

    <Route path="*" element={<NotFound/>}/>
    </Routes>

  </div>
  )
}