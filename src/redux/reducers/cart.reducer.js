import { UPDATE_CART } from "../actions/action-types";

const initialState = {
  items: [],
  loaders: {},
  errors: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_CART:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}
