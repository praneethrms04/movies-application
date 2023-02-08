import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllMovies from "./pages/movies/AllMovies"
import Movies from "./pages/homepage/TrendingMovies";
import Authentication from "./pages/authentication/Authentication";
import MovieDetail from "./pages/moviedetailpage/MovieDetail";
import "./App.css";

export const Context = createContext();

function App() {
  const [movieDetail, setMovieDetail] = useState({});
  return (
    <div className="App">
      <Context.Provider value={{ movieDetail, setMovieDetail }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/all-movies" element={<AllMovies />} />
            <Route path="/login" element={<Authentication />} />
            <Route path="/movie-detail/:id" element={<MovieDetail />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
