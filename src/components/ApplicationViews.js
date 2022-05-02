import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { MovieList } from "./movies/MovieList";
import { MovieDetails } from "./movies/MovieDetails";
import { Player } from "./player/Player";

export const ApplicationViews = ({
  isAuthenticated,
  setAuthUser,
  getLoggedInUser,
}) => {
  const PrivateOutlet = () => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<PrivateOutlet />}>
          <Route path="/" element={<MovieList getLoggedInUser={getLoggedInUser}/>}></Route>
          <Route
            path="/:movieId/details"
            element={<MovieDetails getLoggedInUser={getLoggedInUser} />}
          ></Route>
          <Route path="/:movieId/play" element={<Player />}></Route>
        </Route>

        <Route path="/login" element={<Login setAuthUser={setAuthUser} />} />
        <Route
          path="/register"
          element={<Register setAuthUser={setAuthUser} />}
        />
      </Routes>
    </>
  );
};
