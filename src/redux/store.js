import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "./reducers/rootReducer";
import storage from "redux-persist/lib/storage";

const middleware = [thunk];

const persistConfig = {
  key: "cart",
  storage: storage,
  whitelist: ["cart"], // which reducer want to persist
};

const reducer = persistReducer(persistConfig, rootReducer);

const store = createStore(reducer, applyMiddleware(...middleware));
const persistor = persistStore(store);

export { persistor, store };
