import { img_300, unavailable } from "../../config/config";

const MovieCard = ({ id, poster, title, date , handleGotoDetailPage}) => {
 
  return (
    <>
      <div
        className="grid-item"
        id={id}
        onClick={() => {
          handleGotoDetailPage(id);
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
