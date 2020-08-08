import React from "react";
import { Card } from "antd";

export const CustomCard = ({ children, cardProps, classname }) => (
  <div className="app-custom-card-container">
    <Card {...cardProps} className={`custom-card ${classname || ""}`}>
      {children}
    </Card>
  </div>
);
