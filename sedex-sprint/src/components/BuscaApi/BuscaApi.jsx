import React from 'react';
import { useState } from 'react';
import S from '../BuscaApi/BuscaApi.module.css';
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
    <div className={S.div}>
      <section className={S.section}>
        <div className={S.send}>
          <Label texto="Digite um CEP: " />
          <input
            className={S.input}
            defaultValue={cep}
            type="text"
            placeholder="Seu CEP"
            onChange={handleSetValue}
          />
          <Button className={S.btn} onClick={handleRequisicao} />
        </div>
      </section>
      <section className={S.output}>
        <div className={S.card}>
          {card ? (
            <Card
              cep={card.cep}
              uf={card.uf}
              logradouro={card.logradouro}
              localidade={card.localidade}
              bairro={card.bairro}
            />
          ) : (
            ''
          )}
        </div>

        <div className={S.history}>
          {historico
            ? historico.map((item) => (
                <Card
                  cep={item.cep}
                  uf={item.uf}
                  logradouro={item.logradouro}
                  localidade={item.localidade}
                  bairro={item.bairro}
                />
              ))
            : ''}
        </div>
      </section>{' '}
    </div>
  );
};

export default BuscaApi;
