import React, { useState, useEffect } from "react";
import { MovieCard } from "../movies/MovieCard";
import { getMoviesByGenreId } from "../modules/GenreManager";
import "../movies/MovieList.css";
import { useParams } from "react-router-dom";

export const GenreMovieList = ({ getLoggedInUser }) => {
  const [genreMovies, setGenreMovies] = useState([]);
  const { genreId } = useParams();

  const getGenreMovies = () => {
    getMoviesByGenreId(genreId).then((theMovies) => {
      setGenreMovies(theMovies.children);
    });
  };

  useEffect(() => {
    getGenreMovies();
  }, [genreId]);

  return (
    <div className="movie_list">
      {genreMovies.map((movie) => {
        return (
          <MovieCard
            key={movie.attributes?.ratingKey}
            movie={movie}
            getLoggedInUser={getLoggedInUser}
          />
        );
      })}
    </div>
  );
};
