/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-max-depth */
import React, { useContext, useEffect } from 'react';

import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import CategoriesBar from '../components/CategoriesBar';
import ListProducts from '../components/listProducts';
import sadEmoji from '../assets/emoji-frown.svg';

import { productContext } from '../contexts/productsContext';
import HomeHeaderBar from '../components/HomeHeaderBar';

function Home() {
  const {
    fetchCategories,
    productsList,
  } = useContext(productContext);

  useEffect(() => {
    async function getCategories() {
      await fetchCategories();
    }
    getCategories();
  }, []);

  return (
    <main className="home-page">
      <HomeHeaderBar />
      <Container className="">
        <Row>
          <Col sm={ 3 }>
            <CategoriesBar />
          </Col>

          <Col sm={ 5 } className="w-75 ">
            {productsList
              ? <ListProducts />
              : (
                <Container
                  className="
                      d-flex flex-column
                      align-items-center justify-content-center
                      vh-100 vw-75
                     "
                >
                  <img
                    src={ sadEmoji }
                    alt="Emoji triste"
                    width="40px"
                    className="mb-4"
                  />
                  <p>Nenhum produto foi encontrado</p>
                </Container>)}
          </Col>

        </Row>
      </Container>
    </main>
  );
}

export default Home;
