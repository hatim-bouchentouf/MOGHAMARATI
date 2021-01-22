const { validationResult } = require("express-validator");
const getAddressLocation = require("../util/location");

let PLACES = [
  {
    id: "p1",
    title: "rabat",
    description: "nadya",
    location: {
      lat: 40.7484474,
      lng: -73.9871516,
    },
    address: "amal4",
    creator: "u1",
  },
];

const getPlaceById = (req, res, next) => {
  const placeId = req.params.pid;

  const place = PLACES.find((p) => {
    return p.id === placeId;
  });

  if (!place) {
    return next();
  }
  res.json({ place });
};

const getPlacesByUserId = (req, res, next) => {
  const userId = req.params.uid;

  const places = PLACES.filter((p) => {
    return p.creator === userId;
  });

  if (!places || places.length === 0) {
    return next();
  }
  res.json({ places });
};

const createPlace = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res
      .status(422)
      .json({ message: "Invalid inputs passed, please check your data." });
  }
  const { id, title, description, address, creator } = req.body;

  let coordinates;

  try {
    coordinates = await getAddressLocation(address);
  } catch (error) {
    return next(error);
  }

  const createdPlace = {
    id,
    title,
    description,
    location: coordinates,
    address,
    creator,
  };

  PLACES.push(createdPlace);

  res.status(201).json({ place: createdPlace });
};

const updatePlace = (req, res, next) => {
  const { title, description } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res
      .status(422)
      .json({ message: "Invalid inputs passed, please check your data." });
  }
  const placeId = req.params.pid;

  const updatedPlace = { ...PLACES.find((p) => p.id === placeId) };
  const placeIndex = PLACES.findIndex((p) => p.id === placeId);

  updatedPlace.title = title;
  updatedPlace.description = description;

  PLACES[placeIndex] = updatedPlace;

  res.status(200).json({ place: updatedPlace });
};

const deletePlace = (req, res, next) => {
  const placeId = req.params.pid;
  if (!PLACES.find((p) => p.id === placeId)) {
    return next();
  }
  PLACES = PLACES.filter((p) => p.id !== placeId);
  res.status(200).json({ message: "Deleted place." });
};

exports.getPlaceById = getPlaceById;
exports.getPlacesByUserId = getPlacesByUserId;
exports.createPlace = createPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;
