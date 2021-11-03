/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Container, Button } from 'react-bootstrap';
import { productContext } from '../contexts/productsContext';

import '../styles/components/productDetailItem.css';

const TOTAL_ATRIBUTES = 5;

function ProductDetailItem({ product }) {
  const { addProductToCart } = useContext(productContext);

  return (
    <Container className="product border w-75 p-4">
      <img
        src={ product.thumbnail }
        alt="Produto"
        width="50%"
        height="250px"
      />

      <h2>{product.title}</h2>
      <span>
        R$
        {product.price}
      </span>

      <ul className="product-info">
        {product.attributes.map(({ value_name: value, name }, index) => {
          if (index < TOTAL_ATRIBUTES) {
            return (
              <li key={ index } className="product-info-item">
                {`${name}: ${value}`}
              </li>
            );
          }

          return '';
        })}
      </ul>

      <Button
        onClick={ () => {
          addProductToCart({
            title: product.title,
            imagePath: product.thumbnail,
            price: product.price,
            itemId: product.id,
          });
        } }
        className="d-flex"
        variant="secondary"
      >
        Adicionar ao carrinho
      </Button>
    </Container>
  );
}

export default ProductDetailItem;
