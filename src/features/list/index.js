import React from "react";
import { CART } from "../../router/urlMappings";
import useProducts from "../shared/custom-hooks/useProducts";
import { Card, Row } from "antd";
import { REACTQUERY_API_STATES } from "../../globals/utils/constants";
import { ProductView } from "./ProductView";
import { StatusBar } from "./StatusBar";
import { CustomCard } from "../shared/components/CustomCard";

const List = ({ history }) => {
  const { status, data, error, isLoading, isFetching } = useProducts();
  return (
    <>
      <Row justify="center">
        <h4>
          <strong>List of available products</strong>
        </h4>
      </Row>
      <button onClick={() => history.push(CART)}> Cl</button>
      <StatusBar isFetching={!isLoading && isFetching} />
      <ProductView> I am card</ProductView>
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
            <ProductView key={id}>
              {title} {price}
            </ProductView>
          )
        )}
    </>
  );
};

export default List;
