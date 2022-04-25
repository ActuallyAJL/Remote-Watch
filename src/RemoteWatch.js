import React, { useState } from "react";
import { Player } from "./components/player/Player";
import { ApplicationViews } from "./components/ApplicationViews";
import { NavBar } from "./components/nav/NavBar";
import "./RemoteWatch.css";

export const RemoteWatch = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem("rm_user") !== null
  );

  const setAuthUser = (user) => {
    sessionStorage.setItem("rm_user", JSON.stringify(user));
    setIsAuthenticated(sessionStorage.getItem("rm_user") !== null);
  };

  const clearUser = () => {
    sessionStorage.clear();
    setIsAuthenticated(sessionStorage.getItem("rm_user") !== null);
  };

  return (
    <>
      <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated} />
      <ApplicationViews
        setAuthUser={setAuthUser}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
    </>
  );
};
