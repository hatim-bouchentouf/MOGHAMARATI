const axios = require("axios");

const getAddressLocation = async (address) => {
  const response = await axios.get(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
      address
    )}.json?access_token=pk.eyJ1IjoiY2hhbmtvMSIsImEiOiJja2s4ZnoyNzcwbjc5MnBvMHFmdXdkYzhlIn0.uOznKaky9Hj58KoVk5IeBQ`
  );

  const data = response.data;

  if (!data || data.status === "ZERO_RESULTS") {
    return next();
  }
  let [longitude, latitude] = response.data.features[0].center;
  const coordinates = {
    longitude,
    latitude,
  };

  return coordinates;
};

module.exports = getAddressLocation;
