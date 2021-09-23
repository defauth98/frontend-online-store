import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
  /**
   * @param {{cartProduct: [{"title":"Compressor De Ar Mini Bateria ","price":79,"thumbnail":"http://http2.mlstatic.com/D_021-I.jpg","id":"MLB1832642322"}...{}]}} props
  */
  constructor(props) {
    super(props);

    const { cartProduct } = this.props;

    this.state = { cartProduct };
    cartProduct.forEach((ele) => { ele.quantProduct = 1; });
  }

  handleChange = (e, itemId) => {
    const { cartProduct } = this.state;
    const pedido = cartProduct.filter((ele) => ele.id === itemId);
    const result = pedido[0].quantProduct;

    if (e.target.name === 'productIncreaseQuantity') {
      console.log('Incremento', result);

      this.setState((state, props) => {
        const pedidoState = state.cartProduct.filter((ele) => ele.id === itemId);
        const pedidoProps = props.cartProduct.filter((ele) => ele.id === itemId);
        pedidoState[0].quantProduct = pedidoProps[0].quantProduct + 1;
        return state;
      });
    }

    if (e.target.name === 'productDecreaseQuantity') {
      console.log('Decremento', result);

      this.setState((state, props) => {
        const pedidoState = state.cartProduct.filter((ele) => ele.id === itemId);
        const pedidoProps = props.cartProduct.filter((ele) => ele.id === itemId);
        pedidoState[0].quantProduct = pedidoProps[0].quantProduct - 1;
        return state;
        // cartProduct: [{
        //   ...state.cartProduct[0],
        //   quantProduct: result - 1,
        // }],
      });
    }
  };

  render() {
    const { cartProduct } = this.state;
    const cartItems = (
      <section className="cart-page">

        {cartProduct.map(({ id, price, thumbnail, title, quantProduct }, index) => (
          <div key={ index } className="item-container">
            <img src={ thumbnail } alt={ title } className="item-thumbnail" />

            <div className="info-container">
              <h1
                data-testid="shopping-cart-product-name"
                className="item-name"
              >
                {title}
              </h1>
              <p className="item-price">
                {`R$${price}`}
              </p>
            </div>

            <div className="quantity-container">
              <button
                key={ index }
                type="button"
                className="increase-item-quantity quantity-btn"
                data-testid="product-increase-quantity"
                name="productIncreaseQuantity"
                onClick={ (e) => this.handleChange(e, id) }
              >
                +
              </button>
              <strong
                data-testid="shopping-cart-product-quantity"
                className="item-quantity-number "
              >
                { quantProduct }
              </strong>

              <button
                key={ index + 1 }
                type="button"
                className="decrease-item-quantity quantity-btn"
                data-testid="product-decrease-quantity"
                name="productDecreaseQuantity"
                onClick={ (e) => this.handleChange(e, id) }
              >
                -
              </button>
            </div>

          </div>))}
      </section>
    );

    const noItems = (
      <p data-testid="shopping-cart-empty-message" className="cart-empty-message">
        Seu carrinho está vazio
      </p>
    );

    return (
      <div className="cart-btn-container">
        { cartProduct.length > 0 && <h1 className="cart-title">Itens no carrinho</h1>}

        { cartProduct.length === 0 ? noItems : cartItems}

        <Link
          to="/checkout"
          data-testid="checkout-products"
          className="cart-btn-link"
        >
          <button type="button" className="cart-btn">
            Finalizar compra
          </button>
        </Link>

      </div>
    );
  }
}

Cart.propTypes = {
  cartProduct: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default Cart;
