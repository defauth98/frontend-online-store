import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import Rating from '../../components/Rating';

import './styles.css';

class ProductDetails extends React.Component {
  render() {
    const { location: { state: { title, price, thumbnail, attributes } } } = this.props;
    const { addToCart } = this.props;
    const { match: { params: { itemId: id } } } = this.props;

    return (
      <div className="product-detail-page">
        <div className="image-container">
          <img
            src={ thumbnail }
            alt={ title }
            className="product-image"
          />
        </div>
        <div className="infos-container">
          <h1 data-testid="product-detail-name" className="product-title">{title}</h1>
          <h2 className="product-price">{` R$ ${price} `}</h2>
          <div>
            <ul className="product-info">
              {attributes.map(({ value_name: value, name }, index) => (
                <li key={ index } className="product-info-item">
                  {`${name} : ${value}`}
                </li>))}
            </ul>
          </div>

          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            className="add-to-cart-btn btn"
            onClick={ () => addToCart({ title, price, thumbnail, id }) }
          >
            Adicionar ao carrinho
          </button>

          <Link to="/Cart" data-testid="shopping-cart-button">
            <button type="button" className="btn show-cart-btn">Ver carrinho</button>
          </Link>

          <div id="evaluate-container" className="evaluate-container">
            <h3>Avaliar o produto</h3>

            <label htmlFor="product-evaluation-email" className="evaluate-email">
              Email
              <br />
              <input
                type="email"
                placeholder="mail@mail.com"
                className="product-evaluation-email"
                id="product-evaluation-email"
              />
            </label>

            {/* <Rating /> */}

            <label htmlFor="input-message" className="evaluate-text">
              Avaliação
              <textarea
                name="message"
                id="input-message"
                cols="30"
                rows="10"
                data-testid="product-detail-evaluation"
                className="product-evaluation-text"
              />

            </label>

            <button
              id="button-evaluate"
              type="button"
              className="product-evaluation-btn btn"
            >
              Avaliar produto
            </button>
          </div>
        </div>
      </div>
    );
  }
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
