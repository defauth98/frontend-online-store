/* eslint-disable react/jsx-max-depth */
import React, { useContext } from 'react';
import { Form, Navbar, TabContainer, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import CartIcon from '../assets/cart.svg';
import { productContext } from '../contexts/productsContext';

function Headerbar() {
  const { cartSize } = useContext(productContext);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="d-flex justify-content-between px-5"
    >
      <TabContainer className="">
        <Link to="/" className="header-link">
          <Navbar.Brand>Frontend Online Store</Navbar.Brand>
        </Link>

        <Form className="d-flex w-10 align-items-center">
          <Link to="/Cart">
            <Button variant="outline-secondary">
              <img src={ CartIcon } alt="Icone do carrinho" />
            </Button>
          </Link>

          <h1 className="text-white mx-2 fs-4 my-2">{cartSize}</h1>
        </Form>
      </TabContainer>
    </Navbar>
  );
}

export default Headerbar;
