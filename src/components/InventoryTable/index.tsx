import './styles.css';

import React from 'react';

function InventoryTable() {
  // Dados mocados das solicitações de impressão
  const printRequests = [
    {
      id: 1,
      product: 'Filamento ABS',
      description: 'Filamento ABS Premium para impressora 3D 500g 1,7mm (Branco Gesso)',
      amount: 10,
    },
    {
      id: 2,
      product: 'Filamento PLA',
      description: 'Filamento PLA Premium para Impressora 3D 1,75mm 1kg(Preto)',
      amount: 10,
    },
    {
      id: 3,
      product: 'Placa MDF',
      description: 'MDF cru 3mm (verde)',
      amount: 10,
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Produto</th>
          <th>Descrição</th>
          <th>Estoque</th>
        </tr>
      </thead>
      <tbody>
        {printRequests.map((request) => (
          <tr key={request.id}>
            <td>{request.id}</td>
            <td>{request.product}</td>
            <td>{request.description}</td>
            <td>{request.amount}</td>
            <td className="action-buttons">
              <button className="icon-button">
                <img src="src\assets\button-edit (1).svg" alt=""></img>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default InventoryTable;
