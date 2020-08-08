import React from "react";
import { connect } from "react-redux";

import { Heading } from "../shared/components/Heading";

const Cart = () => {
  return (
    <>
      <Heading> Cart Checkout </Heading>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
