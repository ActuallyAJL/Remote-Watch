import React from "react";
import { Link } from "react-router-dom";

export const GenreCard = ({ genre, getLoggedInUser }) => {
  console.log(genre);

  return (
    <li className="nav-item">
      <Link className="nav-link" to={`/genre/${genre.key}`}>
        {genre.title}
      </Link>
    </li>
  );
};
