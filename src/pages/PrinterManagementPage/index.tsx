import './styles.css';

import { useState } from 'react';

import userProfileImg from '../../assets/Vector.svg';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Pagination from '../../components/Pagination';
import PrinterDropdown from '../../components/PrinterDropdown';
import PrinterTable from '../../components/PrinterTable';
import Sidebar from '../../components/Sidebar';
import DefaultPage from '../../components/DefaultPage';

function PrinterManagementPage() {
  const printers = ['Impressora 1', 'Impressora 2', 'Impressora 3'];


  return (
    <DefaultPage>
       <div className="page-title">
          Impressoras
          <PrinterDropdown printers={printers} />
        </div>
        <div className="data-table">
          <PrinterTable />
          <Pagination
            totalItems={10}
            itemsPerPage={5}
            currentPage={0}
            onPageChange={function (page: number): void {
              throw new Error('Function not implemented.');
            }}
          />
        </div>
    </DefaultPage>
  );
}

export default PrinterManagementPage;
