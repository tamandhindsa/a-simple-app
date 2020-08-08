import React from "react";
import { Button, Row, Col, Tooltip } from "antd";
import { CustomCard } from "../shared/components/CustomCard";

export const ProductView = ({
  children,
  title,
  handleButtonClick,
  imageUrl,
  ...rest
}) => {
  const handleClick = () => {
    const { price, id, currencyFormat } = rest;
    const obj = {
      id,
      title,
      currencyFormat,
      price,
      imageUrl,
    };
    return handleButtonClick(obj);
  };
  return (
    <CustomCard cardProps={{ title }} imageUrl={imageUrl}>
      <Row justify="space-between" align="middle" gutter={6}>
        <Col span={20}>{children}</Col>
        <Col span={4}>
          <Button onClick={handleClick} type="dashed">
            <Tooltip title="Add to cart">+</Tooltip>
          </Button>
        </Col>
      </Row>
    </CustomCard>
  );
};
