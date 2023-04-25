import './styles.css';

import React from 'react';

export interface InventoryTableDataProps {
  id: number;
  product: string;
  description: string;
  amount: number;
}

export interface InventoryTableProps {
  header: string[];
  data: InventoryTableDataProps[];
}

const InventoryTable: React.FC<InventoryTableProps> = ({ header, data }) => {
  return (
    <section className="inventory-table-section">
      <table className="inventory-table">
        <thead className="inventory-table-head">
          <tr>
            {header.map((columnTitle) => (
              <th key={columnTitle}>{columnTitle}</th>
            ))}
          </tr>
        </thead>
        <tbody className="inventory-table-body">
          {data.map((tableRow) => (
            <tr key={tableRow.id}>
              <td className="inventory-table-id">{tableRow.id}</td>
              <td className="inventory-table-product">{tableRow.product}</td>
              <td className="inventory-table-description">{tableRow.description}</td>
              <td className="inventory-table-amount">{tableRow.amount}</td>
              <td className="inventory-table-edit-button">
                {/* TODO: criar um componente para esse botão */}
                <button className="inventory-table-icon-button">
                  <img src="src\assets\button-edit (1).svg" alt="Button Edit"></img>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default InventoryTable;
