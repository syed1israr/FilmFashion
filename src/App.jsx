import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";

import Trending from "./Components/Trending/Trending";
import Popular from "./Components/Popular/Popular";
import Movie from "./Components/Movie/Movie";
import Tv_show from "./Components/TV shows/Tv_shows";
import People  from "./Components/People/people";
import MovieDetails from "../src/Components/Details/Movie/MovieDetails"
import TVDetails from "../src/Components/Details/Tv/TvDetails"
import PeopleDetails from "../src/Components/Details/People/PeopleDetails"
export default function App() {
   console.log("Contact us and About is remaining")
  return (
  <div className="w-screen- h-screen bg-[#1F1E24] flex">
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/trending" element={<Trending/>}/>
    <Route path="/popular" element={<Popular/>}/>
    <Route path="/movie" element={<Movie/>}/>
    <Route path="/movie/details/:id" element={<MovieDetails/>}/>
    <Route path="/tv" element={<Tv_show/>}/>
    <Route path="/tv/details/:id" element={<TVDetails/>}/>
    <Route path="/person" element={<People/>}/>
    <Route path="/person/details/:id" element={<PeopleDetails/>}/>
    </Routes>

  </div>
  )
}