import React from 'react';
import Routes from './Routes';

import 'bootstrap/dist/css/bootstrap.min.css';

import { ProductContextProvider } from './contexts/productsContext';

function App() {
  return (
    <ProductContextProvider>
      <Routes />
    </ProductContextProvider>
  );
}

export default App;
