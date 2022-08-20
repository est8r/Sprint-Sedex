import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import BuscaApi from './components/BuscaApi/BuscaApi';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <BuscaApi />
    </div>
  );
}

export default App;
