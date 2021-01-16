import React, { useEffect, useState } from "react";
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
    title: "rabat",
    description: "nadiaaa",
    imageURL:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.qFaZWxhzLVu8CT9HrZ2IhQHaE8%26pid%3DApi&f=1",
    address: "khabazat",
    location: {
      latitude: 34.01,
      longitude: -6.83,
    },
    creator: "u2",
  },
];
const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const identifiedPlace = PLACES.find((p) => p.id === placeId);

  useEffect(() => {
    setFormData(
      {
        title: {
          value: identifiedPlace?.title,
          isValid: true,
        },
        description: {
          value: identifiedPlace?.description,
          isValid: true,
        },
      },
      true
    );
    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  const placeUpdateSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="noplace-list">
        <h2>Could not find place!</h2>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }
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
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="input"
        type="text"
        label="description"
        validators={[VALIDATOR_MINLENGTH(6)]}
        errorText="Please enter a valid description (min 5 characters)"
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <button type="submit" disabled={!formState.isValid}>
        Update Place
      </button>
    </form>
  );
};

export default UpdatePlace;
