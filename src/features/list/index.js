import React from "react";
import useProducts from "../shared/custom-hooks/useProducts";
import { Card, Row } from "antd";
import { ProductView } from "./ProductView";
import { StatusBar } from "./StatusBar";
import { CustomCard } from "../shared/components/CustomCard";
import { REACTQUERY_API_STATES } from "../../globals/utils/constants";

const List = ({ history }) => {
  const { status, data, error, isLoading, isFetching } = useProducts();
  return (
    <>
      <Row justify="center">
        <h4>
          <strong>List of available products</strong>
        </h4>
      </Row>
      <StatusBar isFetching={!isLoading && isFetching} />
      {status === REACTQUERY_API_STATES.LOADING && (
        <CustomCard cardProps={{ loading: isLoading }}> Loading... </CustomCard>
      )}
      {status === REACTQUERY_API_STATES.ERROR && <Card> {error.message} </Card>}
      {status === REACTQUERY_API_STATES.SUCCESS &&
        data.map(
          (
            { id, currencyFormat, currencyId, isFreeShipping, price, title },
            index
          ) => (
            <ProductView key={id} title={title}>
              <Items {...{ currencyFormat, price, isFreeShipping }} />
            </ProductView>
          )
        )}
    </>
  );
};

const Items = ({ currencyFormat, isFreeShipping, price }) => (
  <>
    <div>
      <strong> Price: </strong> {price}
      {currencyFormat}
      {isFreeShipping && <i>&nbsp;&nbsp;(Free shipping available)</i>}
    </div>
  </>
);

export default List;
