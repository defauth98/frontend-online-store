import React from 'react';

import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { productContext } from '../contexts/productsContext';

import Headerbar from '../components/HeaderBar';

function Cart() {
  // const { cart } = useContext(productContext);

  const mockCart = [
    {
      title: 'Capa Para Cobrir Carro Forrada Tamanho P M G',
      price: 53.91,
      itemId: 'MLB1483023137',
      imagePath: 'http://http2.mlstatic.com/D_740032-MLB46990918075_082021-I.jpg',
    },
    { title: 'Kit 2 Farol Milha 14 Leds 42w 12v/24v Redondo Off-road 6000k', price: 48.88, itemId: 'MLB1739863449', imagePath: 'http://http2.mlstatic.com/D_782725-MLB46766312864_072021-I.jpg' },
    { title: 'Assento Infantil Para Carro MultikitemIds Baby Safe Booster Preto', price: 90.05, itemId: 'MLB1932580026', imagePath: 'http://http2.mlstatic.com/D_992883-MLA32323875408_092019-I.jpg' },
    { title: 'Manopla Bola De Câmbio Marcha Onix Prisma 2013 2014 2015 2016 2017 Cobalt Spin Sonic', price: 35.9, itemId: 'MLB1243188545', imagePath: 'http://http2.mlstatic.com/D_998968-MLB31780928992_082019-I.jpg' },
    { title: 'Som Automotivo First Option 8850b Com Usb, Bluetooth E Leitor De Cartão Sd', price: 79, itemId: 'MLB1930652132', imagePath: 'http://http2.mlstatic.com/D_679517-MLA44490936819_012021-I.jpg' },
  ];

  return (
    <>
      <Headerbar noLink />
      {mockCart.length
        ? (
          <Container className="py-5">
            { mockCart.map((cartItem) => (
              <div
                key={ cartItem.itemId }
                className="d-flex border m-2"
              >
                <img src={ cartItem.imagePath } alt={ cartItem.title } />
                <div className="mx-2">
                  <p className="my-2">{cartItem.title}</p>
                  <p>
                    R$
                    {cartItem.price}
                  </p>
                </div>

              </div>
            ))}

            <Container
              className="d-flex justify-content-center my-5"
            >
              <Link to="/checkout">
                <Button variant="primary">Finalizar compra</Button>
              </Link>
            </Container>

          </Container>

        )
        : (
          <h1>Não tem muito nao</h1>
        )}
    </>
  );
}

export default Cart;
