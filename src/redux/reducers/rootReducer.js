import { combineReducers } from "redux";
import list from "./list.reducer";
import cart from "./cart.reducer";

export default combineReducers({
  list,
  cart,
});
