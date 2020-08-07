import React from "react";
import { CART } from "../../router/urlMappings";
import useProducts from "../shared/custom-hooks/useProducts";
import { Card } from "antd";
import { REACTQUERY_API_STATES } from "../../globals/utils/constants";

const List = ({ history }) => {
  const { status, data, error, isFetching } = useProducts();
  return (
    <div>
      {status === REACTQUERY_API_STATES.LOADING && (
        <Card loading={isFetching}> Loading... </Card>
      )}
      {status === REACTQUERY_API_STATES.ERROR && <Card> {error.message} </Card>}
      {status === REACTQUERY_API_STATES.SUCCESS &&
        data.map(
          (
            { id, currencyFormat, currencyId, isFreeShipping, price, title },
            index
          ) => (
            <Card key={id}>
              {title} {price}
            </Card>
          )
        )}
      <button onClick={() => history.push(CART)}> Cl</button>
    </div>
  );
};

export default List;
