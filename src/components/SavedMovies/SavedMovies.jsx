import { useEffect, useState } from "react";
import { ArrowCircleLeft, ArrowCircleRight, X } from "phosphor-react";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";

import "../../pages/Account/account.scss";

import Movie from "../Movie/Movie";

const SavedMovies = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const movieRef = doc(db, "users", `${user?.email}`);

  const removeMovie = async (showID) => {
    try {
      const result = movies.filter((item) => item.id !== showID);
      await updateDoc(movieRef, {
        savedMovies: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedMovies);
    });
  }, [user?.email]);

  return (
    <>
      <h2 className="row-title">My favorite shows</h2>
      <div className="row-slider">
        <ArrowCircleLeft className="arrow left" size={45} onClick={slideLeft} />
        <div id={`slider`} className="slider">
          {movies.map((movie, id) => (
            <div className="slide" key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.img}`}
                alt={movie?.title}
              />
              <div className="slide-cover">
                <p>{movie?.title}</p>
                <p onClick={() => removeMovie(movie.id)} className="removeIcon">
                  <X size={23} />
                </p>{" "}
              </div>
            </div>
          ))}
        </div>
        <ArrowCircleRight
          className="arrow right"
          size={45}
          onClick={slideRight}
        />
      </div>
    </>
  );
};

export default SavedMovies;
