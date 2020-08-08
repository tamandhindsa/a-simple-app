import React from "react";
import { Button, Row, Col, Tooltip } from "antd";
import { CustomCard } from "../shared/components/CustomCard";

export const ProductView = ({ children, title, handleButtonClick }) => {
  return (
    <div className="app-product-view">
      <CustomCard cardProps={{ title }}>
        <Row justify="space-between" align="middle" gutter={6}>
          <Col span={20}>{children}</Col>
          <Col span={4}>
            <Button onClick={handleButtonClick} type="dashed">
              <Tooltip title="Add to cart">+</Tooltip>
            </Button>
          </Col>
        </Row>
      </CustomCard>
    </div>
  );
};
