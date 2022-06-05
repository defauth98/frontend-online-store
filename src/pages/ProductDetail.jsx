import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Container,
} from 'react-bootstrap';

import ProductDetailItem from '../components/ProductDetailItem';
import ProductEvaluate from '../components/ProductEvaluate';
import { productContext } from '../contexts/productsContext';
import '../styles/pages/productDetail.css';
import Headerbar from '../components/HeaderBar';

function ProductDetails() {
  const params = useParams();
  const { itemId } = params;
  const { product, getProductData } = useContext(productContext);

  useEffect(() => {
    async function getDataAsync() {
      await getProductData(itemId);
    }
    getDataAsync();
  }, [itemId]);

  return (
    <>
      <Headerbar />
      {product && (
        <Container className="d-flex mt-4">
          <ProductDetailItem product={ product } />
          <ProductEvaluate />
        </Container>
      )}
    </>
  );
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.number,
      thumbnail: PropTypes.string,
      attributes: PropTypes.arrayOf(PropTypes.object),
    }),
  }),
}.isRequired;

export default ProductDetails;
