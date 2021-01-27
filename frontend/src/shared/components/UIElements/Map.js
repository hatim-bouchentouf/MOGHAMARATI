import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

const Map = (props) => {
  const [viewport, setViewport] = useState({
    width: "50vw",
    height: "50vh",
    latitude: 34.01,
    longitude: -6.83,
    zoom: 5,
  });
  const [location, setLocation] = useState({});

  const onLocationHandle = (e) => {
    const [longitude, latitude] = e.lngLat;
    setLocation({
      longitude,
      latitude,
    });
  };
  return (
    <div className="map">
      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/outdoors-v11"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        onClick={onLocationHandle}
      >
        <Marker
          longitude={props.location.longitude}
          latitude={props.location.latitude}
          offsetLeft={-19}
          offsetTop={-38}
        >
          <svg viewBox="0 0 24 24" width="38" height="38" stroke="red">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        </Marker>
        )
      </ReactMapGL>
    </div>
  );
};

export default Map;
