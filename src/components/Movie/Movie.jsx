import { useState } from "react";
import { HeartStraight, User } from "phosphor-react";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const Movie = ({ movie }) => {
  const [favorite, setFavorite] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const movieID = doc(db, "users", `${user?.email}`);

  const saveMovie = async () => {
    if (user?.email) {
      setFavorite(!favorite);
      setSaved(true);

      await updateDoc(movieID, {
        savedMovies: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.backdrop_path,
        }),
      });
    } else {
      alert("You need to log in to save a movie!");
    }
  };

  return (
    <div className="slide">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt={movie?.title}
      />
      <div className="slide-cover">
        <p>{movie?.title}</p>
        <p onClick={saveMovie}>
          {favorite ? (
            <HeartStraight size={23} weight="fill" />
          ) : (
            <HeartStraight />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
