import { useContext } from "react";
import { img_500, unavailable } from "../../config/config";
import { Context } from "../../App";
import Navbar from "../../components/header/Navbar";
import Footer from "../../components/footer/Footer";

import "./moviedetail.css";
const MovieDetail = () => {
  const { movieDetail } = useContext(Context);
  // console.log(movieDetail);

  return (
    <>
      <Navbar />
      <div className="container-data">
        <div className="image-container">
          <img
            className="m-img"
            src={
              movieDetail.poster_path
                ? `${img_500}/${movieDetail.poster_path}`
                : unavailable
            }
            alt={movieDetail.title}
          />
        </div>
        <div className="data">
          <h2 className="picture-title">
            {movieDetail.title || movieDetail.name}
          </h2>
          <p className="picture-overview">
            Over View : <span>{movieDetail.overview}</span>{" "}
          </p>
          <p> {movieDetail.tagline}</p>
          <p>
            Release Date :{" "}
            {movieDetail.first_air_date || movieDetail.release_date}
          </p>
          <button>Watch the Trailer</button>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default MovieDetail;
