import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";



export default function App() {
  return (
  <div className="w-screen- h-screen bg-[#1F1E24] flex">
    <Routes>
    <Route path="/" element={<Home/>}/>


    </Routes>

  </div>
  )
}