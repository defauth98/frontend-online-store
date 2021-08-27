import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.css';

import searchIcon from '../../assets/search-icon.png';
import cartIcon from '../../assets/cart-icon.png';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      itemToSearch: '',
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { itemToSearch } = this.state;
    const { func, cartSize } = this.props;

    return (
      <header className="search-bar">
        <div className="search-bar-container">
          <input
            data-testid="query-input"
            name="itemToSearch"
            type="text"
            id="input-search"
            onChange={ this.handleChange }
            value={ itemToSearch }
            className="search-bar-input"
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={ () => func(itemToSearch) }
            className="search-bar-button"
          >
            <img src={ searchIcon } alt="Icone de pesquisa" />
          </button>
        </div>

        <div className="cart">
          <button type="button" className="cart-button">
            <Link data-testid="shopping-cart-button" to="/Cart">
              <img
                src={ cartIcon }
                alt="Icone do carrinho"
                className="cart-icon"
              />
            </Link>
          </button>
          <p
            data-testid="shopping-cart-size"
            className="cart-size"
          >
            {cartSize}
            {' '}
            {cartSize === 1 ? 'Item' : 'Itens'}
          </p>
        </div>
      </header>
    );
  }
}

SearchBar.propTypes = {
  func: PropTypes.func,
  cartSize: PropTypes.number,
}.isRequired;

export default SearchBar;
