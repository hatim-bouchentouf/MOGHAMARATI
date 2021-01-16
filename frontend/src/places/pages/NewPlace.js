import React, { isValidElement, useCallback, useReducer } from "react";
import Input from "../../shared/components/FormElements/Input";
import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";

import "./PlaceForm.css";

const NewPlace = () => {
  const [formState, inputHandler] = useForm(
    {
      inputs: {
        title: { value: "", isValid: false },
        description: {
          value: "",
          isValid: false,
        },
        address: {
          value: "",
          isVald: false,
        },
      },
      isValid: false,
    },
    false
  );

  const placeSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)."
        onInput={inputHandler}
      />
      <Input
        id="address"
        element="input"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid Address."
        onInput={inputHandler}
      />
      <button type="submit" disabled={!formState.isValid}>
        Add Place
      </button>
    </form>
  );
};

export default NewPlace;
