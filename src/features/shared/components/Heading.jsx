import React from "react";
import { Row } from "antd";

export const Heading = ({ children }) => {
  return (
    <Row justify="center">
      <h4>
        <strong>{children}</strong>
      </h4>
    </Row>
  );
};
