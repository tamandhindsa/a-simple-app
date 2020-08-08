import React from "react";
import { CustomCard } from "../shared/components/CustomCard";

export const ProductView = ({ title }) => {
  return (
    <div className="app-product-view">
      <CustomCard cardProps={{ title }}> I am product </CustomCard>
    </div>
  );
};
