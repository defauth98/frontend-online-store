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
import { Helmet } from 'react-helmet';

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
      <Helmet>
        <meta name="title" content="Frontend Online Store" />
        <meta name="description" content="Ecommerce"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://defauth98.github.io/frontend-online-store/" />
        <meta property="og:title" content={product ? product.title : ''} />
        <meta property="og:description" content="Web site created using create-react-app" />
        <meta property="og:image" content="https://cdn.shopify.com/s/files/1/0070/7032/files/how-to-price-a-product.jpg?v=1611727768"/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://defauth98.github.io/frontend-online-store/" />
        <meta property="twitter:title" content={product ? product.title : ''} />
        <meta property="twitter:description" content="Web site created using create-react-app" />
        <meta property="twitter:image" content="https://cdn.shopify.com/s/files/1/0070/7032/files/how-to-price-a-product.jpg?v=1611727768" />
      </Helmet>

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
