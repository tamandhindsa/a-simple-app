import { useQuery } from "react-query";
import axios from "axios";
import { REACT_QUERY_CONFIG } from "../../../globals/config/constants";

const getProducts = async () => {
  const { data } = await axios.get(
    "https://my-json-server.typicode.com/tamandhindsa/demo/products"
  );
  return data.slice(0, 10);
};

export default function useProducts() {
  return useQuery("posts", getProducts, REACT_QUERY_CONFIG);
}
