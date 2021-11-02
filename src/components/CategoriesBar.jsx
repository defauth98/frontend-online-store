import React, { useContext } from 'react';
import { Container, ListGroup, Spinner } from 'react-bootstrap';

import '../styles/components/categoriesBar.css';
import { productContext } from '../contexts/productsContext';

function CategoriesBar() {
  const { categories, getProductsFromCategory } = useContext(productContext);

  return (
    <aside className="category-bar">
      {categories ? (
        <ListGroup class="categories-bar">
          {categories.map((category) => (
            <ListGroup.Item
              key={ category.id }
              onClick={ () => getProductsFromCategory(category.id) }
            >
              <span className="categories-item">{category.name}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
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

export default CategoriesBar;
