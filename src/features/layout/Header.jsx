import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Row, Col } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { LAYOUT } from "../../globals/utils/constants";
import { CART } from "../../router/urlMappings";

export const Header = () => {
  const history = useHistory();
  const handleCartClick = () => history.push(CART);
  return (
    <Row justify="space-between" align="middle" className="app-header">
      <Col className="name" onClick={() => history.push("/")}>
        {LAYOUT.APP_NAME}
      </Col>
      <Col>
        <ShoppingCartOutlined
          onClick={handleCartClick}
          style={{ fontSize: "30px", color: "white", cursor: "pointer" }}
        />
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
