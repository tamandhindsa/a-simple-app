import { combineReducers } from "redux";
import common from "./common.reducer";
import cart from "./cart.reducer";

export default combineReducers({
  common,
  cart,
});
