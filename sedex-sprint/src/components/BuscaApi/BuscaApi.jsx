import React from 'react';
import { useState } from 'react';
import Button from '../Button/Button';
import Card from '../Card/Card';
import Label from '../Label/Label';

const BuscaApi = () => {
  const [card, setNewCard] = useState('');
  const [historico, setHistorico] = useState([]);

  // const [valueInput, setValueInput] = useState();
  const [cep, setCEP] = useState();
  const handleSetValue = (e) => {
    setCEP(e.target.value);
  };
  const handleRequisicao = async () => {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const json = await response.json();
    setNewCard(json);
    setHistorico([...historico, json]);
  };

  return (
    <div>
      <Label texto="Digite um CEP: " />
      <input
        defaultValue={cep}
        type="text"
        placeholder="Seu CEP"
        onChange={handleSetValue}
      />

      <Button onClick={handleRequisicao} />
      {card ? (
        <Card
          cep={card.cep}
          uf={card.uf}
          rua={card.logradouro}
          cidade={card.localidade}
          bairro={card.bairro}
        />
      ) : (
        ''
      )}
      {historico
        ? historico.map((item) => (
            <Card
              cep={item.cep}
              uf={item.uf}
              rua={item.logradouro}
              cidade={item.localidade}
              bairro={item.bairro}
            />
          ))
        : ''}
    </div>
  );
};

export default BuscaApi;
