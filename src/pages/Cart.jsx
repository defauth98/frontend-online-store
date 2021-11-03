import React, { useContext } from 'react';

import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { productContext } from '../contexts/productsContext';

import Headerbar from '../components/HeaderBar';

import '../styles/pages/cart.css';

function Cart() {
  const { cart } = useContext(productContext);

  return (
    <>
      <Headerbar noLink />
      {cart.length
        ? (
          <Container className="py-5">
            { cart.map((cartItem) => (
              <div
                key={ cartItem.itemId }
                className="d-flex border m-2"
              >
                <img src={ cartItem.imagePath } alt={ cartItem.title } />
                <div className="mx-2">
                  <p className="my-2">{cartItem.title}</p>
                  <p>
                    R$
                    {cartItem.price}
                  </p>
                </div>

              </div>
            ))}

            <Container
              className="d-flex justify-content-center my-5"
            >
              <Link to="/checkout">
                <Button variant="primary">Comprar</Button>
              </Link>
            </Container>
          </Container>
        )
        : (
          <Container className="empty-cart">
            <p>:(</p>
            <p>Você não tem produtos no carrinho</p>
          </Container>
        )}
    </>
  );
}

export default Cart;
