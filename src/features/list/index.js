import React from "react";
import { CART } from "../../router/urlMappings";

const List = ({ history }) => {
  return (
    <div>
      Hi i am list
      <button onClick={() => history.push(CART)}> Cl</button>
    </div>
  );
};

export default List;
