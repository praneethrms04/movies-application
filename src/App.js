import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./pages/homepage/Movies";
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
            <Route path="/login" element={<Authentication />} />
            <Route path="/movie-detail/:id" element={<MovieDetail />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
