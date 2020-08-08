import React from "react";

export const Image = () => (
  <img
    className="app-image"
    alt="mock-product"
    src={`https://picsum.photos/500/10${Math.floor(Math.random() * 6) + 1}`}
  />
);
