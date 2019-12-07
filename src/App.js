import React, { Fragment } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

import CategoriasProvider from './context/CategoriasContex'

function App() {
  return (
    <CategoriasProvider>
      <Header />
      <div className="uk-container">
        <Formulario />
      </div>
    </CategoriasProvider>
  );
}

export default App;
