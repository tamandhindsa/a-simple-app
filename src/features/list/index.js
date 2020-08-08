import React from "react";
import { connect } from "react-redux";
import useProducts from "../shared/custom-hooks/useProducts";
import { ProductView } from "./ProductView";
import { StatusBar } from "./StatusBar";
import { CustomCard } from "../shared/components/CustomCard";
import { Heading } from "../shared/components/Heading";
import { REACTQUERY_API_STATES } from "../../globals/utils/constants";
import { addToCart } from "../../redux/actions/actions";

const List = ({ handleButtonClick }) => {
  const { status, data, error, isLoading, isFetching } = useProducts();
  return (
    <>
      <Heading> List of available products</Heading>
      <StatusBar isFetching={!isLoading && isFetching} />
      {status === REACTQUERY_API_STATES.LOADING && (
        <CustomCard cardProps={{ loading: isLoading }} hideImage>
          Loading...
        </CustomCard>
      )}
      {status === REACTQUERY_API_STATES.ERROR && (
        <CustomCard hideImage> {error.message} </CustomCard>
      )}
      {status === REACTQUERY_API_STATES.SUCCESS &&
        data.map(({ id, ...rest }) => (
          <ProductView {...{ key: id, handleButtonClick, id, ...rest }}>
            <Items {...{ ...rest }} />
          </ProductView>
        ))}
    </>
  );
};

const Items = ({ currencyFormat, isFreeShipping, price }) => (
  <div>
    <strong> Price: </strong>
    {currencyFormat}
    {price}
    {isFreeShipping && <i>&nbsp;&nbsp;(Free shipping available)</i>}
  </div>
);

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  handleButtonClick: (payload) => dispatch(addToCart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
