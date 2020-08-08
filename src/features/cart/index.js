import React from "react";
import { connect } from "react-redux";

import { Heading } from "../shared/components/Heading";
import { CartView } from "./CartView";
import { removeFromCart } from "../../redux/actions/actions";
import {
  getActiveCartItems,
  getInactiveCartItems,
} from "../../redux/selectors/cart.selector";

const Cart = ({ handleButtonClick, addedItems, removedItems }) => {
  return (
    <div className="app-cart-container">
      <Heading> Cart Checkout </Heading>
      <section style={{ paddingBottom: "10rem" }}>
        <hr className="added-items-hr" />
        {addedItems.map(({ title, id, quantity }) => (
          <CartView
            key={id}
            {...{ title, handleButtonClick, id, quantity, key: id }}
          >
            <strong>Quantity x {quantity}</strong>
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
  addedItems: getActiveCartItems(state),
  removedItems: getInactiveCartItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleButtonClick: (payload) => dispatch(removeFromCart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
