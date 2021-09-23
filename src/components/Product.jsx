import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Button, Container } from 'react-bootstrap';
import CartPlusIcon from '../assets/cart-plus.svg';

import '../styles/components/product.css';

const MAX_LENGTH = 25;

class Product extends React.Component {
  render() {
    const { title, imagePath, price, itemId, techSpecs, addToCart } = this.props;
    const location = {
      pathname: `/itemDetails/${itemId}`,
      state: techSpecs,
    };

    const product = {
      id: itemId,
      title,
      thumbnail: imagePath,
      price,
    };

    return (
      <Card style={ { width: '15rem', height: '24rem' } } className="m-2">

        <Card.Img variant="top" className="h-50" src={ imagePath } />

        <Card.Body>
          <Card.Title>
            {title.length > MAX_LENGTH
              ? `${String(title).substring(0, MAX_LENGTH)}${' '}...`
              : String(title)}
          </Card.Title>

          <Card.Text>{`R$${price}` }</Card.Text>

          <Container className="mt-4 d-flex p-0">
            <Link to={ location } className="me-auto">
              <Button
                variant="primary"
                style={ { height: '2rem' } }
                className="d-flex"
              >
                Ver detalhes
              </Button>
            </Link>

            <Button
              onClick={ () => addToCart(product) }
              style={ { height: '2rem' } }
              className="d-flex"
              variant="secondary"
            >
              <img src={ CartPlusIcon } alt="Icone Adicionar ao carrinho" />
            </Button>

          </Container>
        </Card.Body>
      </Card>
    );
  }
}

Product.propTypes = {
  title: PropTypes.string,
  imagePath: PropTypes.string,
  price: PropTypes.number,
  itemId: PropTypes.string,
}.isRequired;

export default Product;
