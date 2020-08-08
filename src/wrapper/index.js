import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../redux/store";
import AppBoundary from "../features/shared/hocs/AppBoundary";
import { Layout } from "../features/layout";
import "../sass/index.scss";
import "antd/dist/antd.css";

export const Wrapper = () => (
  <BrowserRouter>
    <Provider store={store}>
      <AppBoundary>
        <PersistGate loading={null} persistor={persistor}>
          <Layout />
        </PersistGate>
      </AppBoundary>
    </Provider>
  </BrowserRouter>
);
