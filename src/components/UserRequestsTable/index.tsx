import './styles.css';

import React from 'react';

export interface UserRequestsTableDataProps {
  id: number;
  name: string;
  date: string;
  // type: string;
  description: string;
  status: string;
}

export interface UserRequestsTableProps {
  header: string[];
  data: UserRequestsTableDataProps[];
}

const UserRequestsTable: React.FC<UserRequestsTableProps> = ({ header, data }) => {
  const parseDate = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
  };

  return (
    <section className="user-requests-table-section">
      <table className="user-requests-table">
        <thead className="user-requests-table-head">
          <tr>
            {header.map((columnTitle) => (
              <th key={columnTitle}>{columnTitle}</th>
            ))}
          </tr>
        </thead>
        <tbody className="user-requests-table-body">
          {data.map((tableRow) => (
            <tr key={tableRow.id}>
              <td className="user-requests-table-id">{tableRow.id}</td>
              <td className="user-requests-table-name">{tableRow.name}</td>
              <td className="user-requests-table-date">{tableRow.date}</td>
              {/* <td className="user-requests-table-type">{tableRow.type}</td> */}
              <td className="user-requests-table-description">{tableRow.description}</td>
              {/* TODO: criar botões especificos para cada status */}
              <td
                className={`user-requests-table-status ${tableRow.status.toLowerCase()}`}
              >
                {tableRow.status}
              </td>
              <td className="user-requests-table-action-buttons">
                <button className="user-requests-table-icon-button">
                  <img src="src\assets\iconmonstr-pencil-10 1.svg" alt=""></img>
                </button>
                <button className="user-requests-table-icon-button">
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

export default UserRequestsTable;
