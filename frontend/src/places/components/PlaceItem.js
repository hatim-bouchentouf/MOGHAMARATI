import React, { useState } from "react";

import Modal from "../../shared/components/UIElements/Modal";
import Card from "../../shared/components/UIElements/Card";
import "./PlaceItem.css";
import Map from "../../shared/components/UIElements/Map";
import { Link } from "react-router-dom";
const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);
  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);

  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<button onClick={closeMapHandler}>CLOSE</button>}
      >
        <div className="map-container">
          <Map location={props.coordinates} />
        </div>
      </Modal>
      <div className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <button onClick={openMapHandler}>VIEW ON MAP</button>
            <Link to={`/places/${props.id}`}>
              <button>EDIT</button>
            </Link>

            <button>DELETE</button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default PlaceItem;