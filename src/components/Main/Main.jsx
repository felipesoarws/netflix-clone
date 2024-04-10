import { useEffect, useState } from "react";
import axios from "axios";
import requests from "../../requests";
import "./main.scss";

import { Play, Clock } from "phosphor-react";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get(requests.requestPopular)
      .then((res) => {
        setMovies(res.data.results);
        setMovie(res.data.results[Math.floor(Math.random() * movies.length)]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="container-main">
      <div className="backdrop">
        <div className="gradient"></div>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt={movie?.title}
        />
      </div>
      <div className="movie-content">
        <div className="title">
          <h1>{movie.title}</h1>
          <p>{truncateString(movie.overview, 150)}</p>
        </div>
        <div className="buttons">
          <button className="play">
            <Play weight="fill" />
            Play
          </button>
          <button className="watch-later">
            <Clock weight="bold" />
            Watch Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
