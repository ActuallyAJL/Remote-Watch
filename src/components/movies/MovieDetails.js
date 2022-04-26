import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { getMovieById } from "../modules/MovieManager";

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [videoURL, setVideoURL] = useState("");
  const { movieId } = useParams();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    getMovieById(movieId).then((thisMovie) => {
      setMovie(thisMovie.children[0]);
      setVideoURL(thisMovie.children[0].children[0].children[0].attributes.key);
    });
  }, []);

  return (
    <div className="movie_detail_card">
      <div className="movie_detail_poster">
        {<img src={location.state.posterUrl} className="" />}
      </div>
      <h1>{movie.attributes?.title}</h1>
      <button
        onClick={
          (navigate(`/play`),
          {
            state: { videoURL: videoURL },
          })
        }
      ></button>
    </div>
  );
};
