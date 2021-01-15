import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

function NavLinks() {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/users" exact>
          All Users
        </NavLink>
      </li>
      <li>
        <NavLink to="/u1/places" exact>
          My Places
        </NavLink>
      </li>
      <li>
        <NavLink to="/places/new" exact>
          Add Place
        </NavLink>
      </li>
      <li>
        <NavLink to="/auth" exact>
          Auth
        </NavLink>
      </li>
    </ul>
  );
}

export default NavLinks;
