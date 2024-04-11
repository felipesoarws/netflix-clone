import { useEffect, useState } from "react";
import { ArrowCircleLeft, ArrowCircleRight } from "phosphor-react";

import "./row.scss";
import axios from "axios";
import Movie from "../Movie/Movie";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);

  const filteredMovies = movies.filter((movie) => movie.backdrop_path);

  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      setMovies(res.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    let slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="row-title">{title}</h2>
      <div className="row-slider">
        <ArrowCircleLeft className="arrow left" size={45} onClick={slideLeft} />
        <div id={`slider` + rowID} className="slider">
          {filteredMovies.map((movie, id) => (
            <Movie movie={movie} key={id} />
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

export default Row;
