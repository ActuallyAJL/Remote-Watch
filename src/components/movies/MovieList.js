import React, { useState, useEffect } from "react";
import { MovieCard } from "./MovieCard";
import { getAllMovies } from "../modules/MovieManager";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    getAllMovies().then((theMovies) => {
      setMovies(theMovies.children);
    });
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

  return (
    <>
      {movies.map((movie) => {
        return <MovieCard key={movie.attributes.key} movie={movie} />;
      })}
    </>
  );
};
