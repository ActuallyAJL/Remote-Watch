import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

export const NavBar = ({ clearUser }) => {
  return (
    <nav className="navbar bg-dark text-white flex-md-nowrap p-0 shadow">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            All
          </Link>
        </li>
        <li className="nav-item">
          <button type="button" className="nav-link" onClick={clearUser}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};
