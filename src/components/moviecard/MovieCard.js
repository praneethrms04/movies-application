import { img_300, unavailable } from "../../config/config";
import "./moviesCard.css";
const MovieCard = ({ id, poster, title, date, handleGotoDetailPage, item }) => {
  return (
    <>
      <div
        className="grid-item"
        id={id}
        onClick={() => {
          handleGotoDetailPage(item, id);
        }}
      >
        <img
          className="poster"
          src={poster ? `${img_300}${poster}` : unavailable}
          alt={title}
        />
        <div className="movie-title">
          <p> {title}</p>
          <p>Relase Date : {date}</p>
        </div>
      </div>
    </>
  );
};
export default MovieCard;
