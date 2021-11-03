import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';

import Headerbar from '../components/HeaderBar';
import EvaluateProductForm from '../components/EvaluateProductForm';
import { productContext } from '../contexts/productsContext';

function Checkout() {
  const { cart } = useContext(productContext);

  return (
    <>
      <Headerbar />
      {cart.length
        ? (
          <>
            <Container className="py-2">
              <h1 className="fs-4 my-4">Informações pessoais</h1>
              { cart.map((cartItem) => (
                <div
                  key={ cartItem.itemId }
                  className="cart-item d-flex border m-2"
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
            </Container>
            <EvaluateProductForm />
          </>
        )
        : (
          <Container
            className="d-flex vh-100 justify-content-center align-items-center"
          >
            <h1 className="fs-4 my-4">Não há produtos no carrinho</h1>
          </Container>
        )}
    </>
  );
}

export default Checkout;
