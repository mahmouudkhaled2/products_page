/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

export default function ProuductsContextProvider({ children }) {
  const [allPro, setAllPro] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isError, setError] = useState("");

  const getAllProducts = () => {
    setLoading(true);
    axios("https://fakestoreapi.com/products")
      .then((res) => {
        setAllPro(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(
          "Sorry, there was an error loading the products. Please try again later."
        );
        setLoading(false);
      });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{ allPro, count, setCount, loading, isError }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
