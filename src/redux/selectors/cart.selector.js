import { filter } from "lodash";

export const getActiveCartItems = ({ cart }) => {
  const { selectedItems: items } = cart;
  return filter(items, (item) => item.quantity > 0);
};
export const getInactiveCartItems = ({ cart }) => {
  const { selectedItems: items } = cart;
  return filter(items, (item) => item.quantity === 0);
};
export const getCheckOutPrice = ({ cart }) => {
  const { selectedItems: items } = cart;
  return Object.values(items).reduce((value, item) => {
    return value + Number(item.price) * Number(item.quantity);
  }, 0);
};
