import React from "react";
import { Card } from "antd";

export const CustomCard = ({ children, cardProps, classname }) => (
  <div className="app-custom-card">
    <Card {...cardProps} className={`card ${classname || ""}`}>
      {children}
    </Card>
  </div>
);
