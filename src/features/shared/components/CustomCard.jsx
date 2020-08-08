import React from "react";
import { Card } from "antd";
import { Image } from "./Image";

export const CustomCard = ({
  children,
  cardProps,
  customClassName,
  hideImage,
  imageUrl,
}) => (
  <div className="app-custom-card-container">
    <Card {...cardProps} className={`custom-card ${customClassName || ""}`}>
      {!hideImage && <Image src={imageUrl} />}
      {children}
    </Card>
  </div>
);
