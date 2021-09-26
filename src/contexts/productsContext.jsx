/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';
import {
  getCategories,
  getProductsFromCategoryAndQuery,
} from '../services/api';

const productContext = createContext();

function ProductContextProvider({ children }) {
  const [productsList, setProductsList] = useState(null);
  const [product, setProduct] = useState(null);
  const [categories, setCategories] = useState(null);
  const [cart, setCart] = useState([]);
  const [cartSize, setCartSize] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  async function getProductsFromCategory(categoryId) {
    setIsLoading(true);
    const response = await getProductsFromCategoryAndQuery(categoryId);

    setProductsList(response.results);
    setIsLoading(false);
  }

  async function fetchCategories() {
    const results = await getCategories();

    setCategories(results);
  }

  async function getProductsFromQuery(item) {
    setIsLoading(true);
    const response = await getProductsFromCategoryAndQuery(false, item);

    setProductsList(response.results);
    setIsLoading(false);
  }

  async function addProductToCart(productItem) {
    const newCartArray = [...cart, productItem];

    setCart(newCartArray);

    setCartSize(cartSize ? cartSize + 1 : 1);
  }

  async function getProductData(productId) {
    const productResponse = await fetch(`https://api.mercadolibre.com/items/${productId}`);

    const parsedJson = await productResponse.json();

    setProduct(parsedJson);
  }

  return (
    <productContext.Provider
      value={ {
        productsList,
        categories,
        cartSize,
        product,
        cart,
        isLoading,
        getProductData,
        getProductsFromCategory,
        fetchCategories,
        getProductsFromQuery,
        setProduct,
        addProductToCart,
      } }
    >
      {children}
    </productContext.Provider>
  );
}

export { productContext, ProductContextProvider };
