import './styles.css';

import React from 'react';

export interface PrinterTableData {
  id: number;
  name: string;
  owner: string;
  role: string;
  description: string;
}

export interface PrinterTableDataProps {
  header: string[];
  data: PrinterTableData[];
}

const PrinterTable: React.FC<PrinterTableDataProps> = ({ header, data }) => {
  return (
    <section className="printer-table-section">
      <table className="printer-table">
        <thead className="printer-table-head">
          <tr>
            {header.map((columnTitle) => (
              <th key={columnTitle}>{columnTitle}</th>
            ))}
          </tr>
        </thead>
        <tbody className="printer-table-body">
          {data.map((tableRow) => (
            <tr key={tableRow.id}>
              <td className="printer-table-id">{tableRow.id}</td>
              <td className="printer-table-name">{tableRow.name}</td>
              <td className="printer-table-owner">{tableRow.owner}</td>
              <td className="printer-table-role">{tableRow.role}</td>
              <td className="printer-table-description">{tableRow.description}</td>
              <td className="printer-table-action-buttons">
                <button className="printer-table-icon-button">
                  <img src="src\assets\arrow-down.svg" alt="seta para baixo"></img>
                </button>
                <button className="printer-table-icon-button">
                  <img src="src\assets\arrow-up.svg" alt="seta para cima"></img>
                </button>
                <button className="printer-table-icon-button">
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

export default PrinterTable;
