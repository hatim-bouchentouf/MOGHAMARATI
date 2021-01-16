import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const PLACES = [
  {
    id: "u1",
    title: "kenitra",
    description: "kizafthhhhhhhhhhhhhhhhhhhh",
    imageURL:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.qFaZWxhzLVu8CT9HrZ2IhQHaE8%26pid%3DApi&f=1",
    address: "khabazat",
    location: {
      latitude: 34.01,
      longitude: -6.83,
    },
    creator: "u1",
  },
  {
    id: "u2",
    title: "rabat",
    description: "nadia",
    imageURL:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.qFaZWxhzLVu8CT9HrZ2IhQHaE8%26pid%3DApi&f=1",
    address: "khabazat",
    location: {
      latitude: 34.01,
      longitude: -6.83,
    },
    creator: "u1",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = PLACES.filter((place) => place.creator === userId);
  return (
    <li>
      <PlaceList items={loadedPlaces} />
    </li>
  );
};
export default UserPlaces;
