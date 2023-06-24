import './styles.css';

import React from 'react';

export interface UserDetailsTableDataProps {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface UserDetailsTableProps {
  header: string[];
  data: UserDetailsTableDataProps[];
}

const UserDetailsTable: React.FC<UserDetailsTableProps> = ({ header, data }) => {
  return (
    <section className="user-details-table-section">
      <table className="user-details-table">
        <thead className="user-details-table-head">
          <tr>
            {header.map((columnTitle) => (
              <th key={columnTitle}>{columnTitle}</th>
            ))}
          </tr>
        </thead>
        <tbody className="user-details-table-body">
          {data.map((tableRow) => (
            <tr key={tableRow.id}>
              <td className="user-details-table-id">{tableRow.id}</td>
              <td className="user-details-table-name">{tableRow.name}</td>
              <td className="user-details-table-email">
                <a href={`mailto:${tableRow.email}`}>{tableRow.email}</a>
              </td>
              <td className="user-details-table-role">{tableRow.role}</td>
              <td className="user-details-table-action-buttons">
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

export default UserDetailsTable;
