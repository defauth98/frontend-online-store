/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Form, Navbar, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import CartIcon from '../assets/cart.svg';
import { productContext } from '../contexts/productsContext';

function Headerbar({ noLink }) {
  const { cartSize } = useContext(productContext);

  return (

    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Frontend Online Store</Navbar.Brand>

        <Form className="d-flex w-10 align-items-center">
          {!noLink && (
            <Link to="/Cart">
              <Button variant="light">
                <img src={ CartIcon } alt="Icone do carrinho" />
              </Button>
            </Link>)}

          {!noLink && (<h1 className="text-white mx-2 fs-4 my-2">{cartSize}</h1>)}
        </Form>
      </Container>
    </Navbar>
  );
}

export default Headerbar;
