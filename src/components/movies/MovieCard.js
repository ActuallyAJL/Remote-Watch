import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getMoviePoster } from "../modules/MovieManager";
import "./MovieList.css";

export const MovieCard = ({ movie }) => {
  const [poster, setPoster] = useState([]);

  const navigate = useNavigate();

  const getPoster = () => {
    getMoviePoster(movie.attributes.thumb).then((thisPoster) => {
      setPoster(thisPoster);
    });
  };

  const handleClick = () => {
    navigate(`/${movie.attributes.ratingKey}/details`, {
      state: { posterUrl: poster.url },
    });
  };

  useEffect(() => {
    getPoster();
  }, []);

  return (
    <>
      <div className="movie_card">
        {<img src={poster.url} onClick={() => handleClick()} />}
      </div>
    </>
  );
};
