import React from 'react';
import PropTypes from 'prop-types';

class CartItemResume extends React.Component {
  render() {
    const { title, thumbnail, price } = this.props;
    return (
      <div className="item-container">
        <img src={ thumbnail } alt={ title } className="item-thumb" />
        <div className="info-container">
          <h2 className="item-title">{title}</h2>
          <h2 className="item-price">{`R$ ${price}`}</h2>
        </div>
      </div>
    );
  }
}

CartItemResume.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
}.isRequired;

export default CartItemResume;
