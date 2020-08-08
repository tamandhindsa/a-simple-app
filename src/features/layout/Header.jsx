import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Row, Col, Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { LAYOUT } from "../../globals/utils/constants";
import { CART } from "../../router/urlMappings";
import { getActiveCartItems } from "../../redux/selectors/cart.selector";

const Header = ({ addedProducts }) => {
  const history = useHistory();
  const handleCartClick = () => history.push(CART);
  const numberOfItems = (arr) =>
    arr.reduce((value, item) => {
      return value + Number(item.quantity);
    }, 0);

  return (
    <Row justify="space-between" align="middle" className="app-header">
      <Col className="name" onClick={() => history.push("/")}>
        {LAYOUT.APP_NAME}
      </Col>
      <Col>
        <Badge count={numberOfItems(addedProducts)}>
          <ShoppingCartOutlined
            onClick={handleCartClick}
            style={{ fontSize: "30px", color: "white", cursor: "pointer" }}
          />
        </Badge>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({
  addedProducts: getActiveCartItems(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
