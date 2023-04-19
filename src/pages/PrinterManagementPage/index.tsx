import './styles.css';

import { useState } from 'react';

import userProfileImg from '../../assets/Vector.svg';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Pagination from '../../components/Pagination';
import PrinterTable from '../../components/PrinterTable';
import Sidebar from '../../components/Sidebar';

function PrinterManagementPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Header
        username="User"
        onLogout={() => {
          throw new Error('Function not implemented.');
        }}
        menuButtonAction={() => toggleSideBar()}
      />
      <div className="container">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={function (): void {
            throw new Error('Function not implemented.');
          }}
          user={{
            name: 'Umar Azis',
            photo: userProfileImg,
            qualification: 'Professor, Administrador',
          }}
          isADM={true}
        />
        <div className="page-title">Impressoras</div>

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
      </div>
      <Footer />
    </>
  );
}

export default PrinterManagementPage;
