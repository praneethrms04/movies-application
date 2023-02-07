import { useEffect, useState } from "react";
import axios from "axios";
import "./moviesStyles.css";
import MovieCard from "../../components/moviecard/MovieCard";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/header/Navbar";
const Movies = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [allmovies, setAllMovies] = useState([]);

  const handleGotoDetailPage = (movieId) => {
    navigate(`/movie-detail/${movieId}`);
  };

  const fetchMovies = async () => {
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`;
    const { data } = await axios.get(url);
    console.log(data.results);
    setMovies(data.results);
    setAllMovies(data.results);
  };
  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, []);
  const filterMoviesBySearch = (searchText) => {
    const filteredmovies = allmovies.filter((item) => {
      return item.name || item.title.toLowerCase().includes(searchText.toLowerCase());
    });
    console.log(filteredmovies)
    setMovies(filteredmovies);
  };

  return (
    <>
      <Navbar filterMoviesBySearch={filterMoviesBySearch} hideSearch={true} />
      <div className="container">
        <div class="grid-container">
          {movies &&
            movies.map((item) => (
              <MovieCard
                key={item.id}
                id={item.id}
                poster={item.poster_path}
                title={item.title || item.name}
                date={item.first_air_date || item.release_date}
                handleGotoDetailPage={handleGotoDetailPage}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Movies;
