import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getMovieById } from "../modules/MovieManager";

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  const location = useLocation();

  useEffect(() => {
    getMovieById(movieId).then((thisMovie) => {
      setMovie(thisMovie.children[0]);
    });
  }, []);

  return (
    <div className="movie_detail_card">
      <div className="movie_detail_poster">
        {<img src={location.state.posterUrl} className="" />}
      </div>
      <h1>{movie.attributes?.title}</h1>
    </div>
  );
};
