import React, { useEffect, useState } from "react";
import { getMoviePoster } from "../modules/MovieManager";
import './MovieList.css'

export const MovieCard = ({ movie }) => {

  const [poster, setPoster] = useState([]);

  const getPoster = () => {
    getMoviePoster(movie.attributes.thumb).then((thisPoster) => {
      setPoster(thisPoster);
    });
  };

  useEffect(() => {
    getPoster();
  }, []);

  return (
    <>
      <div className="movie_card">
        {<img src={poster.url}></img>}
      </div>
    </>
  );
};
