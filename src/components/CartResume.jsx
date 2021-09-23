import React from 'react';
import PropTypes from 'prop-types';
import CartItemResume from './CartItemResume';

class CartResume extends React.Component {
  constructor(props) {
    super(props);
    const { cardProducts, totalPrice } = this.props;

    this.state = {
      cardProducts,
      totalPrice,
    };
  }

  render() {
    const { cardProducts, totalPrice } = this.state;

    const renderCartItems = (
      <div className="cart-resume">
        <h1>Revise Seus Produtos</h1>
        <div>
          {cardProducts.map(({ title, price, thumbnail }) => (
            <CartItemResume
              key={ title }
              title={ title }
              price={ price }
              thumbnail={ thumbnail }
            />
          ))}
        </div>
        <h1>{`Total R$ ${totalPrice}`}</h1>
      </div>
    );

    const empty = (<h1 className="empty-title">Nenhum Item no Carrinho</h1>);
    return (
      <div>
        {cardProducts.length === 0 ? empty : renderCartItems }
      </div>
    );
  }
}

CartResume.propTypes = {
  cartProducts: PropTypes.arrayOf(PropTypes.object),
  totalPrice: PropTypes.number,
}.isRequired;

export default CartResume;
