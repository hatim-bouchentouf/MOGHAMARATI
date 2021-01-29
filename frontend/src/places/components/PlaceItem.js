import React, { useState, useContext } from "react";

import Modal from "../../shared/components/UIElements/Modal";
import Card from "../../shared/components/UIElements/Card";
import "./PlaceItem.css";
import Map from "../../shared/components/UIElements/Map";
import { Link } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";
import useHttpClient from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
const PlaceItem = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);
  const showDeleteWarningHandler = () => setShowConfirmModal(true);
  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };
  const ConfirmDeleteHandler = async () => {
    setShowConfirmModal(false);
    try {
      await sendRequest(
        `http://localhost:5000/api/places/${props.id}`,
        "DELETE",
        null,
        { Authorization: "Bearer " + auth.token }
      );
      props.onDelete(props.id);
    } catch (err) {}
  };

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
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
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Are you sure ?"
        footerClass="place-item__modal-actions"
        footer={
          <>
            <button onClick={cancelDeleteHandler}>CANCEL</button>
            <button onClick={ConfirmDeleteHandler}>DELETE</button>
          </>
        }
      >
        <p>Do you really want to delete this place</p>
      </Modal>
      <div className="place-item">
        <Card className="place-item__content">
          {isLoading && <LoadingSpinner asOverlay />}
          <div className="place-item__image">
            <img
              src={`http://localhost:5000/${props.image}`}
              alt={props.title}
            />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <button onClick={openMapHandler}>VIEW ON MAP</button>
            {auth.userId === props.creatorId && (
              <Link to={`/places/${props.id}`}>
                <button>EDIT</button>
              </Link>
            )}
            {auth.userId === props.creatorId && (
              <button onClick={showDeleteWarningHandler}>DELETE</button>
            )}
          </div>
        </Card>
      </div>
    </>
  );
};

export default PlaceItem;
