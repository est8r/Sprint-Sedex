import React from 'react';

const Card = ({ cep, logradouro, bairro, localidade, uf }) => {
  /*destructing */
  return (
    <div>
      <h2>CEP: {cep}</h2>
      <h2>UF: {uf}</h2>
      <h2>rua: {logradouro}</h2>
      <h3>bairro: {bairro}</h3>
      <h3>localidade: {localidade}</h3>
    </div>
  );
};

export default Card;
