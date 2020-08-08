import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/action-types";

const initialState = {
  selectedItems: {},
  loaders: {},
  errors: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_CART:
      const originalItemToBeAdded = state.selectedItems[payload.id];
      const originalItemToBeUpdated = { [payload.id]: {} };
      if (originalItemToBeAdded) {
        originalItemToBeUpdated[payload.id] = {
          ...originalItemToBeAdded,
          quantity: originalItemToBeAdded.quantity + 1,
        };
      } else {
        originalItemToBeUpdated[payload.id] = {
          ...payload,
          quantity: 1,
        };
      }
      return {
        ...state,
        selectedItems: {
          ...state.selectedItems,
          ...originalItemToBeUpdated,
        },
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        selectedItems: {
          ...state.selectedItems,
          [payload.id]: {
            ...state.selectedItems[payload.id],
            quantity: Math.max(state.selectedItems[payload.id].quantity - 1, 0),
          },
        },
      };
    default:
      return state;
  }
}
