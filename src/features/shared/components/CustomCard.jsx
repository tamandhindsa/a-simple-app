import React from "react";
import { Card } from "antd";

export const CustomCard = ({ children, cardProps, customClassName }) => (
  <div className="app-custom-card-container">
    <Card {...cardProps} className={`custom-card ${customClassName || ""}`}>
      {children}
    </Card>
  </div>
);
