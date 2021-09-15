import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/categoriesBar.css';

function CategoriesBar(props) {
  const { categories, onClick } = props;

  return (
    <aside className="category-bar">
      <h1 className="category-bar-title">Categorias:</h1>
      <ul className="category-bar-list">
        {categories.map((category) => (
          <button
            className="category-bar-item"
            type="button"
            key={ category.id }
            data-testid="category"
            onClick={ () => onClick(category.id) }
          >
            {category.name}
          </button>))}
      </ul>
    </aside>
  );
}

CategoriesBar.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
  )
    .isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CategoriesBar;
