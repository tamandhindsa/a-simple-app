import React from "react";

export const Image = ({ src = "https://picsum.photos/500/100" }) => (
  <img className="app-image" alt="mock-product" src={src} />
);
