import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import Card from "../../shared/components/UIElements/Card";
import { AuthContext } from "../../shared/context/auth-context";

import PlaceItem from "./PlaceItem";
import "./PlaceList.css";

const PlaceList = (props) => {
  const auth = useContext(AuthContext);
  const userId = useParams().userId;

  if (props.items?.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>This User have no place !!!</h2>
          {auth.userId === userId && (
            <Link to="/places">
              <button>Add Place</button>
            </Link>
          )}
        </Card>
      </div>
    );
  }
  return (
    <div className="place-list">
      {props.items?.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.image}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
          onDelete={props.onDeletePlace}
        />
      ))}
    </div>
  );
};

export default PlaceList;
