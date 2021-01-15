export const initialState = {
  inputValue: "",
  isValid: false,
  isTouched: false,
  location: {},
  images: {},
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_LOCATION":
      return {
        ...state,
        location: action.location,
      };
    case "CHANGE":
      return {
        ...state,
        inputValue: action.inputValue,
        isValid: action.isValid,
      };
    case "TOUCH": {
      return {
        ...state,
        isTouched: true,
      };
    }
    default:
      return state;
  }
};
export default reducer;
