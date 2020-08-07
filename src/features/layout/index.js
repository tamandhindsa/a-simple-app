import React from "react";
import MainRouter from "../../router";

export const Layout = (props) => {
  return (
    <div className="app-layout">
      <nav className="header-container">Call header here.</nav>
      <main className="main-container">
        <MainRouter />
      </main>
      <footer>Call footer here</footer>
    </div>
  );
};
