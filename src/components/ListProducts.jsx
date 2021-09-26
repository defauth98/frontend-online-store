import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'react-bootstrap';
import Product from './Product';

import '../styles/components/list-products.css';
import { productContext } from '../contexts/productsContext';

function ListProducts() {
  const { productsList, addProductToCart, isLoading } = useContext(productContext);

  return (
    <div className="w-100 vh-100 my-4">
      {isLoading ? (
        <div
          className="
          h-100 w-auto d-flex align-items-center justify-content-center"
        >
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>

      )
        : (
          <div className="list-products">
            {productsList.map(
              (
                { title, price, thumbnail, id, attributes, shipping },
              ) => (
                <Product
                  title={ title }
                  imagePath={ thumbnail }
                  price={ price }
                  key={ id }
                  addToCart={ addProductToCart }
                  itemId={ id }
                  techSpecs={ { title, price, thumbnail, attributes } }
                  free_shipping={ shipping.free_shipping }
                />
              ),
            )}
          </div>

        )}

    </div>
  );
}

ListProducts.propTypes = {
  productsList: PropTypes.arrayOf(PropTypes.object),
  func: PropTypes.func,
}.isRequired;

export default ListProducts;
