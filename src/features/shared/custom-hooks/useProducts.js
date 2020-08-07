import { useQuery } from "react-query";
import axios from "axios";

const getProducts = async () => {
  const { data } = await axios.get(
    "https://my-json-server.typicode.com/tamandhindsa/demo/products"
  );
  return data;
};

export default function useProducts() {
  return useQuery("posts", getProducts);
}
