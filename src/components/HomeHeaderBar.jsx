/* eslint-disable react/jsx-max-depth */
import React, { useContext, useState } from 'react';
import { Container, Form, Navbar, Button, FormControl } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import SearchIcon from '../assets/search.svg';
import CartIcon from '../assets/cart.svg';
import { productContext } from '../contexts/productsContext';

function HomeHeaderBar() {
  const [searchQuery, setSearchQuery] = useState('');

  const {
    cartSize,
    getProductsFromQuery,
  } = useContext(productContext);

  async function handleSearch(event) {
    event.preventDefault();

    await getProductsFromQuery(searchQuery);
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Frontend Online Store</Navbar.Brand>

        <Form className="d-flex w-50 justify-content-evenly">
          <FormControl
            type="search"
            search
            placeholder="Nome do produto"
            aria-label="Search"
            className="w-75"
            onChange={ (ev) => { setSearchQuery(ev.target.value); } }
          />
          <Button variant="light" onClick={ handleSearch }>
            <img
              src={ SearchIcon }
              alt="Icone de pesquisar"
            />
          </Button>
        </Form>

        <Form className="d-flex w-10 align-items-center">
          <Link to="/Cart">
            <Button variant="light">
              <img src={ CartIcon } alt="Icone do carrinho" />
            </Button>
          </Link>

          <h1 className="fs-3 text-white px-3 pt-2">{cartSize}</h1>
        </Form>
      </Container>
    </Navbar>
  );
}

export default HomeHeaderBar;
