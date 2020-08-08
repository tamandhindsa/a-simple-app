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
  imageUrl,
}) => {
  const isProductAdded = quantity !== 0;

  return (
    <CustomCard
      cardProps={{ title }}
      hideImage={hideImage}
      customClassName={!isProductAdded && "disabled"}
      imageUrl={imageUrl}
    >
      <Row justify="space-between" align="middle" gutter={6}>
        <Col span={handleButtonClick ? 20 : 24}>{children}</Col>
        {handleButtonClick && (
          <Col span={4}>
            <Tooltip title="Remove From Cart">
              <Button onClick={() => handleButtonClick({ id })} type="dashed">
                -
              </Button>
            </Tooltip>
          </Col>
        )}
      </Row>
    </CustomCard>
  );
};
