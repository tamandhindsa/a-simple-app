import { FETCH_PRODUCTS } from "../actions/action-types";

const initialState = {
  items: [],
  loaders: {},
  errors: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}
