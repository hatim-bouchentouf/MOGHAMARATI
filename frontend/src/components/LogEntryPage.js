import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "./LogEntryPage.css";
import { listLogEntries } from "../API/API";
import LogEntryForm from "./LogEntryForm";
import { useStateValue } from "../StateProvide";
import AddInfo from "./AddInfo";

function LogEntryPage() {
  const [logEntries, setLogEntries] = useState([]);
  const [showPopup, setShowPopup] = useState({});
  const [addEntryLocation, setAddEntryLocation] = useState(null);
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 34.01,
    longitude: -6.83,
    zoom: 6,
  });
  const [{ location }, dispatch] = useStateValue();

  const getEntries = async () => {
    const logEntries = await listLogEntries();
    setLogEntries(logEntries);
  };

  useEffect(() => {
    getEntries();
  }, []);
  const showAddMarker = (e) => {
    const [longitude, latitude] = e.lngLat;

    dispatch({
      type: "ADD_LOCATION",
      location: { latitude, longitude },
    });
    setAddEntryLocation({
      latitude,
      longitude,
    });
  };
  return (
    <div className="map">
      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/outdoors-v11"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        onDblClick={showAddMarker}
        onClick={() => {
          setAddEntryLocation(null);
          setShowPopup({});
        }}
      >
        {logEntries?.map((entry) => (
          <React.Fragment key={entry._id}>
            <Marker
              longitude={entry.longitude}
              latitude={entry.latitude}
              offsetLeft={-19}
              offsetTop={-38}
            >
              <svg
                onClick={() =>
                  setShowPopup({
                    [entry._id]: true,
                  })
                }
                viewBox="0 0 24 24"
                width="38"
                height="38"
                stroke="red"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </Marker>
            {showPopup[entry._id] ? (
              <Popup
                latitude={entry.latitude}
                longitude={entry.longitude}
                closeButton={true}
                closeOnClick={false}
                dynamicPosition={true}
                onClose={() => setShowPopup({ [entry._id]: false })}
                anchor="top"
              >
                <div className="popup">
                  <h3>{entry.title}</h3>
                  <p>{entry.description}</p>
                  <small>
                    Visited on :{" "}
                    {new Date(entry.visitDate).toLocaleDateString()}
                  </small>
                  <img src={entry.images["data_url"]} alt={entry.title} />
                </div>
              </Popup>
            ) : null}
          </React.Fragment>
        ))}
        {addEntryLocation ? (
          <>
            {" "}
            <Marker
              longitude={addEntryLocation.longitude}
              latitude={addEntryLocation.latitude}
              offsetLeft={-19}
              offsetTop={-38}
            >
              <svg viewBox="0 0 24 24" width="38" height="38" stroke="orange">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </Marker>
            <Popup
              latitude={addEntryLocation.latitude}
              longitude={addEntryLocation.longitude}
              closeButton={true}
              closeOnClick={false}
              dynamicPosition={true}
              onClose={() => setAddEntryLocation(null)}
              anchor="top"
            >
              <div className="popup">
                <LogEntryForm
                  onClose={() => {
                    setAddEntryLocation(null);
                    getEntries();
                  }}
                  location={addEntryLocation}
                />
              </div>
            </Popup>
          </>
        ) : null}
      </ReactMapGL>
    </div>
  );
}

export default LogEntryPage;
