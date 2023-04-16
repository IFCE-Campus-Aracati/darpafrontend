import './styles.css';

import { useState } from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import InventoryTable from '../../components/InventoryTable';
import Pagination from '../../components/Pagination';
import RegisterProductButton from '../../components/RegisterProductButton';
import SearchBar from '../../components/SearchBar';
import Sidebar from '../../components/Sidebar';

function InventoryPage() {
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
          isADM={true}
        />
        <div className="buttons">
          <SearchBar
            onSearch={function (term: string): void {
              throw new Error('Function not implemented.');
            }}
          />
          <RegisterProductButton
            onClick={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        </div>
        <div className="data-table">
          <InventoryTable />
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

export default InventoryPage;
