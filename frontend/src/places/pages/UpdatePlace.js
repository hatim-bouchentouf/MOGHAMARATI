import React from "react";
import { useParams } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";

import "./PlaceForm.css";

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
    title: "kenitra",
    description: "kizafthhhhhhhhhhhhhhhhhhhhhhh",
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
const UpdatePlace = () => {
  const placeId = useParams().placeId;
  const identifiedPlace = PLACES.find((p) => p.id === placeId);

  const [formState, inputHandler] = useForm(
    {
      title: {
        value: identifiedPlace.title,
        isValid: true,
      },
      description: {
        value: identifiedPlace.description,
        isValid: true,
      },
    },
    true
  );

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  const placeUpdateSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
        value={formState.inputs.title.value}
        valid={formState.isValid}
      />
      <Input
        id="description"
        element="input"
        type="text"
        label="description"
        validators={[VALIDATOR_MINLENGTH(6)]}
        errorText="Please enter a valid description (min 5 characters)"
        onInput={inputHandler}
        value={formState.inputs.description.value}
        valid={formState.isValid}
      />
      <button type="submit" disabled={!formState.isValid}>
        Update Place
      </button>
    </form>
  );
};

export default UpdatePlace;
