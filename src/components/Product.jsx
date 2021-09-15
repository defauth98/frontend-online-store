import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../styles/components/product.css';

const MAX_LENGTH = 30;

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
      <div data-testid="product" className="product-card">
        <img src={ imagePath } alt={ title } />
        <div className="product-info">
          <h1 data-testid="addProductToCart">
            {title.length > MAX_LENGTH
              ? `${String(title).substring(0, MAX_LENGTH)}...`
              : String(title)}
          </h1>

          <p className="price">{`R$${price}` }</p>

          <div>
            <Link to={ location }>
              <button
                type="button"
                data-testid="product-detail-link"
              >
                Ver detalhes
              </button>
            </Link>

            <button
              data-testid="product-add-to-cart"
              type="button"
              onClick={ () => addToCart(product) }
            >
              Adicionar
            </button>
          </div>
        </div>
      </div>
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
