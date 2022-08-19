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
      <Input
        defaultValue={cep}
        type="text"
        placeholder="Digite um CEP"
        onChange={handleSetValue}
      />

      <button onClick={handleRequisicao}>Buscar</button>
      <p>CEP: {valueInput ? valueInput.cep : 'carregando'}</p>
      <p>Logradouro: {valueInput ? valueInput.logradouro : 'carregando'}</p>
      <p>Bairro: {valueInput ? valueInput.bairro : 'carregando'}</p>
      <p>Cidade: {valueInput ? valueInput.localidade : 'carregando'}</p>
      <p>UF: {valueInput ? valueInput.uf : 'carregando'}</p>
    </div>
  );
};

export default BuscaApi;
