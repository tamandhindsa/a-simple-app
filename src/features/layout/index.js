import React from "react";
import { ReactQueryDevtools } from "react-query-devtools";
import MainRouter from "../../router";
import { Row, Col } from "antd";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = (props) => {
  return (
    <div className="app-layout">
      <nav className="header-container">
        <Header />
      </nav>
      <main className="main-container">
        <Row justify="center">
          <Col
            xs={24}
            sm={18}
            lg={16}
            xl={12}
            className="content-container shadow-1"
          >
            <MainRouter />
          </Col>
        </Row>
      </main>
      <footer>
        <Footer />
      </footer>
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
};
