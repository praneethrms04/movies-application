import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../../components/moviecard/MovieCard";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/header/Navbar";
import "./moviesStyles.css";
import { Context } from "../../App";
import { useContext } from "react";
import Footer from "../../components/footer/Footer";
const Movies = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [allmovies, setAllMovies] = useState([]);

  const { setMovieDetail } = useContext(Context);

  const handleGotoDetailPage = (item, id) => {
    navigate(`/movie-detail/${id}`);
    // console.log(item)
    setMovieDetail(item);
  };

  const fetchMovies = async () => {
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`;

    // const url = `
    // https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&
    //   language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`;
    try {
      const { data } = await axios.get(url);
      console.log(data.results);
      setMovies(data.results);
      setAllMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, []);
  const filterMoviesBySearch = (searchText) => {
    const filteredmovies = allmovies.filter((item) => {
      return item.name || item.title.toLowerCase().includes(searchText);
    });
    setMovies(filteredmovies);
  };

  return (
    <>
      <Navbar filterMoviesBySearch={filterMoviesBySearch} hideSearch={true} />
      <div className="container">
        <div className="grid-container">
          {movies &&
            movies.map((item) => (
              <MovieCard
                item={item}
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
      <Footer />
    </>
  );
};

export default Movies;
