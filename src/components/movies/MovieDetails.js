import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { getMovieById } from "../modules/MovieManager";

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    getMovieById(movieId).then((thisMovie) => {
      setMovie(thisMovie.children[0]);
    });
  }, []);

  const handleClick = () => {
    navigate(`/${movieId}/play`);
  }

  return (
    <div className="movie_detail_card">
      <div className="movie_detail_poster">
        {<img src={location.state.posterUrl} onClick={() => handleClick()} />}
      </div>
      <h1>{movie.attributes?.title}</h1>
    </div>
  );
};
