import React from "react";
import { NavLink } from "react-router-dom";
import "./MainNav.scss";

export default (props) => (
  <nav class="main-nav">
    <ul>
      <li>
        <NavLink to="/" exact activeClassName="selected">Home</NavLink>
      </li>
      <li>
        <NavLink to="/live/" activeClassName="selected">Live</NavLink>
      </li>
    </ul>
  </nav>
);
