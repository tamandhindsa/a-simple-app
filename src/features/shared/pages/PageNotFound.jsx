import React from "react";
import { Result, Button } from "antd";

export const PageNotFound = (props) => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button onClick={() => props.history.push("/")} type="primary">
          Back Home
        </Button>
      }
    />
  );
};
