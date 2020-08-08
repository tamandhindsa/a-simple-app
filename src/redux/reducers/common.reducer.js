import { STOP_LOADING, START_LOADING } from "../actions/action-types";

const initialState = {
  globalLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        globalLoading: true,
      };
    case STOP_LOADING:
      return {
        ...state,
        globalLoading: false,
      };
    default:
      return state;
  }
}
