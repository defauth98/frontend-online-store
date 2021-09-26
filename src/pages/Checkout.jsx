import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import CartResume from '../components/CartResume';
// import Form from '../components/form';
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

Checkout.propTypes = {
  cartProducts: PropTypes.arrayOf(PropTypes.object),
  totalPrice: PropTypes.number,
}.isRequired;

export default Checkout;
