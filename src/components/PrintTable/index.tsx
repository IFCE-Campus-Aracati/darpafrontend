import './styles.css';

import React from 'react';

export interface PrintRequestsTableDataProps {
  id: number;
  name: string;
  date: Date;
  type: string;
  description: string;
  status: 'APROVADO' | 'REPROVADO' | 'CONCLUIDO' | 'PENDENTE';
}

export interface PrintRequestsTableProps {
  header: string[];
  data: PrintRequestsTableDataProps[];
}

const PrintRequestsTable: React.FC<PrintRequestsTableProps> = ({ header, data }) => {
  const parseDate = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
  };

  return (
    <section className="requests-table-section">
      <table className="requests-table">
        <thead className="requests-table-head">
          <tr>
            {header.map((columnTitle) => (
              <th key={columnTitle}>{columnTitle}</th>
            ))}
          </tr>
        </thead>
        <tbody className="requests-table-body">
          {data.map((tableRow) => (
            <tr key={tableRow.id}>
              <td className="id">{tableRow.id}</td>
              <td className="name">{tableRow.name}</td>
              <td className="date">{parseDate(tableRow.date)}</td>
              <td className="type">{tableRow.type}</td>
              <td className="description">{tableRow.description}</td>
              {/* TODO: criar botões especificos para cada status */}
              <td className={`status ${tableRow.status.toLowerCase()}`}>
                {tableRow.status}
              </td>
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
    </section>
  );
};

export default PrintRequestsTable;
