import React from "react";
import { connect } from "react-redux";

import { Heading } from "../shared/components/Heading";
import { CartView } from "./CartView";
import { removeFromCart } from "../../redux/actions/actions";

const Cart = ({ handleButtonClick }) => {
  return (
    <>
      <Heading> Cart Checkout </Heading>

      <h5> Added Items </h5>
      <hr />
      <CartView title={"I am what"}> Hello</CartView>
      <br />
      <br />
      <h5> Removed Items </h5>
      <hr />
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  handleButtonClick: (payload) => dispatch(removeFromCart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
