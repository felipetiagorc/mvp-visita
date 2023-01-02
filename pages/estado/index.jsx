import Header from 'components/Header';
import { EstadoCidade } from 'components/EstadoCidade';
import React from 'react';
import { Notificacao } from './../../components/Notificacao';
export default function Estado() {
  return (
    <div>
      <h1 className="font-semibold text-lg p-2 mx-4">
        Selecionar Estado/Cidade
      </h1>
      <EstadoCidade />
      <Notificacao
        title="TituloNotificacao"
        type="info"
        description="Minha descricao"
      />
    </div>
  );
}

Estado.getLayout = function getLayout(page) {
  return (
    <>
      <Header>{page}</Header>
    </>
  );
};
