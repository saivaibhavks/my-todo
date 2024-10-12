import { useEffect, useState } from "react";

const useFetch = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const resp = await fetch("https://fakestoreapi.com/products");
    const json = await resp.json();
    setProducts(json);
  };

  return { products };
};

export default useFetch;
