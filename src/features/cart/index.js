import React from "react";
import { connect } from "react-redux";

import { Heading } from "../shared/components/Heading";
import { CartView } from "./CartView";
import { removeFromCart } from "../../redux/actions/actions";
import {
  getActiveCartItems,
  getInactiveCartItems,
  getCheckOutPrice,
} from "../../redux/selectors/cart.selector";
import { Row, Col } from "antd";

const Cart = ({
  handleButtonClick,
  addedItems,
  removedItems,
  checkoutPrice,
}) => {
  return (
    <div className="app-cart-container">
      <Heading> Cart Checkout </Heading>

      <section style={{ paddingBottom: "10rem", textAlign: "center" }}>
        <hr className="total-cost-hr" />
        <CartView>
          <strong>Checkout Price is ${checkoutPrice}</strong>
          <br />
          <br />
          <i>*Assuming all the prices are in dollars.</i>
        </CartView>
      </section>

      <section style={{ paddingBottom: "10rem" }}>
        <hr className="added-items-hr" />
        {addedItems.map(({ title, id, quantity, currencyFormat, price }) => (
          <CartView
            key={id}
            {...{ title, handleButtonClick, id, quantity, key: id }}
          >
            <Row justify="start" align="middle">
              <Col xs={24} sm={8}>
                <strong>Quantity x {quantity}</strong>
              </Col>
              <Col xs={0} sm={8}>
                <hr className="custom-vl" />
              </Col>
              <Col xs={24} sm={8}>
                <strong>
                  Total Price is {currencyFormat}{" "}
                  {Number(price) * Number(quantity)}
                </strong>
              </Col>
            </Row>
          </CartView>
        ))}
      </section>

      <section>
        <hr className="removed-items-hr" />
        {removedItems.map(({ title, id, quantity }) => (
          <CartView {...{ title, quantity, key: id }}>
            <strong>Quantity x {quantity}</strong>
          </CartView>
        ))}
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  checkoutPrice: getCheckOutPrice(state),
  addedItems: getActiveCartItems(state),
  removedItems: getInactiveCartItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleButtonClick: (payload) => dispatch(removeFromCart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
