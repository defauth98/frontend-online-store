/* eslint-disable react/jsx-max-depth */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Navbar,
  TabContainer,
  Button,
  Container,
} from 'react-bootstrap';

import CartIcon from '../assets/cart.svg';

import ProductDetailItem from '../components/ProductDetailItem';
import ProductEvaluate from '../components/ProductEvaluate';

function ProductDetails() {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        className="d-flex justify-content-between px-5"
      >
        <TabContainer className="">
          <Navbar.Brand>Frontend Online Store</Navbar.Brand>

          <Form className="d-flex w-10 align-items-center">
            <Button variant="outline-secondary">
              <img src={ CartIcon } alt="Icone do carrinho" />
            </Button>
          </Form>
        </TabContainer>
      </Navbar>
      <Container className="d-flex mt-4">
        <ProductDetailItem />
        <ProductEvaluate />
      </Container>
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
