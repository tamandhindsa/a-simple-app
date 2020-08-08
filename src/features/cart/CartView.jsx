import React from "react";
import { Row, Col, Button, Tooltip } from "antd";
import { CustomCard } from "../shared/components/CustomCard";

export const CartView = ({
  title,
  children,
  handleButtonClick,
  quantity,
  id,
  hideImage,
}) => {
  const isProductAdded = quantity !== 0;

  return (
    <CustomCard
      cardProps={{ title }}
      hideImage={hideImage}
      customClassName={!isProductAdded && "disabled"}
    >
      <Row justify="space-between" align="middle" gutter={6}>
        <Col span={handleButtonClick ? 20 : 24}>{children}</Col>
        {handleButtonClick && (
          <Col span={4}>
            <Button onClick={() => handleButtonClick({ id })} type="dashed">
              <Tooltip title="Remove From Cart">-</Tooltip>
            </Button>
          </Col>
        )}
      </Row>
    </CustomCard>
  );
};
