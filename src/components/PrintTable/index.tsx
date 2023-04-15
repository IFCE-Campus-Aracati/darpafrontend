import './styles.css';

import React from 'react';

function PrintRequestsTable() {
  // Dados mocados das solicitações de impressão
  const printRequests = [
    {
      id: 1,
      name: 'Action Figure',
      date: '01/04/2022',
      type: 'Impressão 3D',
      description: 'Impressão em Abs preto',
      status: 'Pendente',
    },
    {
      id: 2,
      name: 'Trófeu',
      date: '03/04/2022',
      type: 'Corte a Laser',
      description: 'Corte em MDF 3mm',
      status: 'Aprovado',
    },
    {
      id: 3,
      name: 'Miniatura Bolsonaro',
      date: '05/04/2022',
      type: 'Impressão 3D',
      description: 'Busto do mito em PLA vermelho',
      status: 'Reprovado',
    },
    {
      id: 4,
      name: 'Miniatura Lula',
      date: '07/04/2022',
      type: 'Impressão 3D',
      description: 'Busto do Lula em PLA Azul',
      status: 'Concluido',
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Data</th>
          <th>Tipo</th>
          <th>Descrição</th>
          <th>Status</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        {printRequests.map((request) => (
          <tr key={request.id}>
            <td>{request.id}</td>
            <td>{request.name}</td>
            <td>{request.date}</td>
            <td>{request.type}</td>
            <td>{request.description}</td>
            <td className={request.status.toLowerCase()}>{request.status}</td>
            <td className="action-buttons">
              <button className="icon-button">
                <img src="src\assets\iconmonstr-pencil-10 1.svg" alt=""></img>
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

export default PrintRequestsTable;
