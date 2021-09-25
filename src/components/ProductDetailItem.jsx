import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container } from 'react-bootstrap';

import CartPlusIcon from '../assets/cart-plus.svg';

function ProductDetailItem() {
  return (
    <Container className="border w-50 p-4">
      <img
        src="http://http2.mlstatic.com/D_928833-MLB46151428455_052021-I.jpg"
        alt="Produto"
        width="100%"
        height="250px"
      />

      <h2>Kit10 Farol Milha 16 Leds 48w 3000lm 12v Off-road Caminhão</h2>
      <span>R$200.29</span>

      {/* <ul className="product-info">
        {attributes.map(({ value_name: value, name }, index) => (
          <li key={index} className="product-info-item">
            {`${name} : ${value}`}
          </li>
        ))}
      </ul> */}

      <Button
        onClick={ () => {} }
        style={ { height: '2rem' } }
        className="d-flex"
        variant="secondary"
      >
        <img src={ CartPlusIcon } alt="Icone Adicionar ao carrinho" />
      </Button>
    </Container>
  );
}

export default ProductDetailItem;
