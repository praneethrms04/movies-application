import { useEffect, useState } from "react";
import { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Context } from "../../App";
import MovieCard from "../../components/moviecard/MovieCard";
import Navbar from "../../components/header/Navbar";
import Footer from "../../components/footer/Footer";
import "./moviesStyles.css";

const TrendingMovies = () => {
  const navigate = useNavigate();
  const [trendingMovies, setAllTrendingMovies] = useState([]);
  const [allmovies, setAllMovies] = useState([]);

  const { setMovieDetail } = useContext(Context);

  const handleGotoDetailPage = (item, id) => {
    navigate(`/movie-detail/${id}`);
    setMovieDetail(item);
  };

  const fetchTrendingMovies = async () => {
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`;

    try {
      const { data } = await axios.get(url);
      console.log(data.results);
      setAllTrendingMovies(data.results);
      setAllMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTrendingMovies();
    // eslint-disable-next-line
  }, []);
  const filterMoviesBySearch = (searchText) => {
    const filteredmovies = allmovies.filter((item) => {
      return item.name || item.title.toLowerCase().includes(searchText);
    });
    setAllTrendingMovies(filteredmovies);
  };

  return (
    <>
      <Navbar filterMoviesBySearch={filterMoviesBySearch} hideSearch={true} />
      <div className="container">
        <div className="heading">
          <h3>Trending Movies</h3>
        </div>

        <div className="grid-container">
          {trendingMovies &&
            trendingMovies.map((item) => (
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

export default TrendingMovies;
