/* eslint-disable react/jsx-max-depth */
import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import CategoriesBar from '../components/CategoriesBar';
import ListProducts from '../components/listProducts';

import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

import sadEmoji from '../assets/emoji-frown.svg';
import SearchIcon from '../assets/search.svg';
import CartIcon from '../assets/cart.svg';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.fetchCategories = this.fetchCategories.bind(this);
    this.getProductsFromCategory = this.getProductsFromCategory.bind(this);

    this.state = {
      categories: [],
      productsList: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async getProductsFromCategory(categoryId) {
    const response = await getProductsFromCategoryAndQuery(categoryId);

    this.setState({ productsList: response.results });
  }

  generateArray = async (item) => {
    const array = await getProductsFromCategoryAndQuery(false, item);
    this.setState({
      productsList: array.results,
    });
  }

  async fetchCategories() {
    const categories = await getCategories();

    this.setState({ categories });
  }

  render() {
    const { categories, productsList } = this.state;
    const { addToCart, cartSize } = this.props;

    return (
      <main className="home-page">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              Frontend Online Store
            </Navbar.Brand>

            <Form className="d-flex w-50 justify-content-evenly">
              <FormControl
                type="search"
                placeholder="Nome do produto"
                aria-label="Search"
                className="w-75"
              />
              <Button variant="warning">
                <img src={ SearchIcon } alt="Icone de pesquisar" />
              </Button>
            </Form>

            <Form className="d-flex w-10 align-items-center">
              <Button variant="outline-secondary">
                <img
                  src={ CartIcon }
                  alt="Icone do carrinho"
                />
              </Button>
              <h1 className="fs-3 text-white px-3 pt-2">{cartSize}</h1>
            </Form>
          </Container>
        </Navbar>
        <Container className="vw-50">
          <Row>
            <Col sm={ 3 }>
              <CategoriesBar
                categories={ categories }
                onClick={ this.getProductsFromCategory }
              />
            </Col>
            <Col sm={ 5 } className="w-75">
              {productsList.length === 0
                ? (
                  <Container
                    className="
                      d-flex flex-column
                      align-items-center justify-content-center
                      vh-100
                     "
                  >
                    <img
                      src={ sadEmoji }
                      alt="Emoji triste"
                      width="40px"
                      className="mb-4"
                    />
                    <p>Nenhum produto foi encontrado</p>
                  </Container>)
                : (
                  <ListProducts
                    productsList={ productsList }
                    addToCart={ addToCart }
                  />)}
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}

Home.propTypes = {
  addToCart: PropTypes.func.isRequired,
  cartSize: PropTypes.number.isRequired,
};

export default Home;
