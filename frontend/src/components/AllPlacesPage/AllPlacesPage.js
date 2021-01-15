import React from "react";
import Moghamarati from "../Moghamarati/Moghamarati";
import Place from "../Place/Place";

import "./AllPlacesPage.css";

function AllPlacesPage() {
  return (
    <div className="allplaces">
      <div className="allplaces__header">
        <div className="header__logo">
          <a href="/">
            <Moghamarati />
          </a>
        </div>
      </div>
      <div className="allplaces__filter">
        <input type="search" placeholder="tap to filter" />
        <button>Add Place</button>
      </div>
      <div className="allplaces__main">
        <Place />
        <Place />
        <Place />
        <Place />
        <Place />
        <Place />
      </div>
    </div>
  );
}

export default AllPlacesPage;
