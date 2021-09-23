import React from 'react';
import PropTypes from 'prop-types';
import { Container, ListGroup, Spinner } from 'react-bootstrap';

import '../styles/components/categoriesBar.css';

function CategoriesBar(props) {
  const { categories, onClick } = props;

  return (
    <aside className="category-bar">
      {categories.length > 1 ? (
        <>
          <h1 className="fs-5 mt-4 fw-normal">Categorias</h1>
          <ListGroup>
            {categories.map((category) => (
              <ListGroup.Item
                key={ category.id }
                onClick={ () => onClick(category.id) }

              >
                <span className="categories-item">{category.name}</span>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </>
      )
        : (
          <Container
            className="
              d-flex
              justify-content-center align-items-center
              vh-100
             "
          >
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Container>

        )}

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
