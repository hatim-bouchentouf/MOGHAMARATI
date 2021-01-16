import React from "react";
import { Link } from "react-router-dom";

import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";
import "./PlaceList.css";

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="noplace-list">
        <Card>
          <h2>No places Found. Maybe create One ?</h2>
          <Link to="/places/new">
            <button>Share Place</button>
          </Link>
        </Card>
      </div>
    );
  }
  return (
    <div className="place-list">
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageURL}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </div>
  );
};

export default PlaceList;
