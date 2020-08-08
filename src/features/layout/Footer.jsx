import React from "react";
import { Row, Col } from "antd";
import { LAYOUT } from "../../globals/utils/constants";

export const Footer = () => {
  return (
    <Row justify="center" align="middle" className="app-footer">
      <Col>{LAYOUT.COPYRIGHT}</Col>
    </Row>
  );
};
