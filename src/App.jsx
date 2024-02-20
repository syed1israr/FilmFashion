import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";

import Trending from "./Components/Trending/Trending";
import Popular from "./Components/Popular/Popular";
import Movie from "./Components/Movie/Movie";
import Tv_show from "./Components/TV shows/Tv_shows";
import People  from "./Components/People/people";


export default function App() {
   console.log("Contact us and About is remaining")
  return (
  <div className="w-screen- h-screen bg-[#1F1E24] flex">
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/trending" element={<Trending/>}/>
    <Route path="/popular" element={<Popular/>}/>
    <Route path="/movie" element={<Movie/>}/>
    <Route path="/tv_show" element={<Tv_show/>}/>
    <Route path="/person" element={<People/>}/>
    </Routes>

  </div>
  )
}