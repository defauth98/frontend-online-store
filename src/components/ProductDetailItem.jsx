/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Container, Button } from 'react-bootstrap';
import { productContext } from '../contexts/productsContext';

import '../styles/components/productDetailItem.css';

function ProductDetailItem({ product }) {
  const { addProductToCart } = useContext(productContext);

  return (
    <Container className="border w-50 p-4">
      <img
        src={ product.thumbnail }
        alt="Produto"
        width="100%"
        height="250px"
      />

      <h2>{product.title}</h2>
      <span>{product.price}</span>

      <ul className="product-info">
        {product.attributes.map(({ value_name: value, name }, index) => (
          <li key={ index } className="product-info-item">
            {`${name}: ${value}`}
          </li>
        ))}
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
