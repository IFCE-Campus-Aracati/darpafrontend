import './styles.css';

import React from 'react';

function PrinterTable() {
  // Dados mocados das solicitações de impressão
  const printRequests = [
    {
      id: 1,
      name: 'Action Figure',
      dono: 'Hudson',
      role: 'Bolsista',
      description: 'Impressão em Abs preto',
    },
    {
      id: 2,
      name: 'Troféu',
      dono: 'Reperkilson',
      role: 'Aluno',
      description: 'Troféu para torneio de CS',
    },
    {
      id: 3,
      name: 'Miniatura-Batman',
      dono: 'Oslo',
      role: 'Aluno',
      description: 'Impressão em Abs preto',
    },
    {
      id: 4,
      name: 'Suporte para celular',
      dono: 'Matias',
      role: 'ADM',
      description: 'Impressão em Abs verde',
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Dono</th>
          <th>Tipo de perfil</th>
          <th>Descrição</th>
          <th>Ordenar/Excluir</th>
        </tr>
      </thead>
      <tbody>
        {printRequests.map((request) => (
          <tr key={request.id}>
            <td>{request.id}</td>
            <td>{request.name}</td>
            <td>{request.dono}</td>
            <td>{request.role}</td>
            <td>{request.description}</td>
            <td className="action-buttons">
              <button className="icon-button">
                <img src="src\assets\arrow-down.svg" alt="seta para baixo"></img>
              </button>
              <button className="icon-button">
                <img src="src\assets\arrow-up.svg" alt="seta para cima"></img>
              </button>
              <button className="icon-button">
                <img src="src\assets\trash 1.svg" alt=""></img>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PrinterTable;
