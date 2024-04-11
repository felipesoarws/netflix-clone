import { useState } from "react";
import { HeartStraight } from "phosphor-react";

const Movie = ({ movie, id }) => {
  const [favorite, setFavorite] = useState(false);

  return (
    <div key={id} className="slide">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt={movie?.title}
      />
      <div className="slide-cover">
        <p>{movie?.title}</p>
        <p>{favorite ? <HeartStraight /> : <HeartStraight fill="full" />}</p>
      </div>
    </div>
  );
};

export default Movie;
