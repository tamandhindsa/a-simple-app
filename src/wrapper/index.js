import React from "react";
import AppBoundary from "../features/shared/hocs/AppBoundary";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "../features/layout";
import { store } from "../redux/store";
import "../sass/index.scss";
import "antd/dist/antd.css";

export const Wrapper = () => (
  <BrowserRouter>
    <Provider store={store}>
      <AppBoundary>
        <Layout />
      </AppBoundary>
    </Provider>
  </BrowserRouter>
);
