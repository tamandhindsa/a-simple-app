import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "./reducers/rootReducer";
import storageSession from "redux-persist/lib/storage/session";

const middleware = [thunk];

const persistConfig = {
  key: "cart",
  storage: storageSession,
  whitelist: ["cart"], // which reducer want to persist
};

const reducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  reducer,
  process.env.NODE_ENV === "development"
    ? compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
        // to activate the tool
      )
    : compose(applyMiddleware(...middleware))
);
const persistor = persistStore(store);

export { persistor, store };
