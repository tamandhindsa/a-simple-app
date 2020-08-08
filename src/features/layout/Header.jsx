import React from "react";
import { connect } from "react-redux";
import { Row, Col } from "antd";
import { LAYOUT } from "../../globals/utils/constants";

export const Header = () => {
  return (
    <Row justify="space-between" align="middle" className="app-header">
      <Col className="name">{LAYOUT.APP_NAME}</Col>
      <Col>Put cart here</Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
