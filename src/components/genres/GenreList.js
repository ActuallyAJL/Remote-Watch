import React, { useState, useEffect } from "react";
import { GenreCard } from "./GenreCard";
import { getAllGenres } from "../modules/GenreManager";
import "./GenreList.css";

export const GenreList = ({ getLoggedInUser }) => {
  const [genres, setGenres] = useState([]);

  const getGenres = () => {
    getAllGenres().then((theGenres) => {
      setGenres(theGenres.children);
    });
  };

  useEffect(() => {
    getGenres();
  }, []);

  return (
    <>
      {genres.map((genre) => {
        return (
          <GenreCard
            key={genre.attributes?.key}
            genre={genre.attributes}
            getLoggedInUser={getLoggedInUser}
          />
        );
      })}
    </>
  );
};
