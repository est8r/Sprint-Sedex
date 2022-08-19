import React from 'react';
import { useState } from 'react';
import Input from '../Input/Input.jsx';

const BuscaApi = () => {
  const [valueInput, setValueInput] = useState();
  const [cep, setCEP] = useState();
  const handleSetValue = (e) => {
    setCEP(e.target.value);
  };
  const handleRequisicao = async () => {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const json = await response.json();
    setValueInput(json);
  };
  return (
    <div>
      <Input />

      <button>Buscar</button>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  );
};

export default BuscaApi;
