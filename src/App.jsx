import { Route, Routes} from "react-router-dom";
import { Suspense , lazy } from "react";
import Home from "./Components/Home/Home";

const Trending = lazy(() => import("./Components/Trending/Trending"));
const Popular = lazy(() => import("./Components/Popular/Popular"));
const Movie = lazy(() => import("./Components/Movie/Movie"));
const Tv_show = lazy(() => import("./Components/TV shows/Tv_shows"));
const People = lazy(() => import("./Components/People/people"));
const MovieDetails = lazy(() => import("../src/Components/Details/Movie/MovieDetails"));
const TVDetails = lazy(() => import("../src/Components/Details/Tv/TvDetails"));
const PeopleDetail = lazy(() => import("./Components/Details/People/PeopleDetails"));
const ContactUs = lazy(() => import("./Components/Contactus/ContactUs"));
const About = lazy(() => import("./Components/About/About"));
const Trailer = lazy(() => import("./Components/Templates/Trailer"));
const TV_trailer = lazy(() => import("./Components/Templates/TV_trailer"));
const NotFound = lazy(() => import("../src/Components/Templates/NotFound"));

export default function App() {
  return (
    <div className="w-screen h-screen bg-[#071013] flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Suspense fallback={<div>Loading...</div>}><Trending /></Suspense>} />
        <Route path="/popular" element={<Suspense fallback={<div>Loading...</div>}><Popular /></Suspense>} />

        <Route path="/movie" element={<Suspense fallback={<div>Loading...</div>}><Movie /></Suspense>} />
        <Route
          path="/movie/details/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <MovieDetails />
              <Route path="trailer" element={<Trailer />} />
            </Suspense>
          }
        />

        <Route path="/tv" element={<Suspense fallback={<div>Loading...</div>}><Tv_show /></Suspense>} />
        <Route
          path="/tv/details/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <TVDetails />
              <Route path="trailer" element={<TV_trailer />} />
            </Suspense>
          }
        />
        <Route path="/person" element={<Suspense fallback={<div>Loading...</div>}><People /></Suspense>} />
        <Route path="/person/details/:id" element={<Suspense fallback={<div>Loading...</div>}><PeopleDetail /></Suspense>} />
        <Route path="/contact" element={<Suspense fallback={<div>Loading...</div>}><ContactUs /></Suspense>} />
        <Route path="/about" element={<Suspense fallback={<div>Loading...</div>}><About /></Suspense>} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
