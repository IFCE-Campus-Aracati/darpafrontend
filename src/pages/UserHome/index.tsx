import './styles.css';

import { useState } from 'react';

import userProfileImg from '../../assets/Vector.svg';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Pagination from '../../components/Pagination';
import PrintRequestsTable from '../../components/PrintTable';
import SearchBar from '../../components/SearchBar';
import Sidebar from '../../components/Sidebar';
import SolicitationButton from '../../components/SolicitationButton';

function UserHome() {
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
            name: 'Reperkilson',
            photo: userProfileImg,
            qualification: 'Aluno, Bolsista',
          }}
          isADM={false}
        />
        <div className="page-title">Minhas solicitações</div>
        <div className="buttons">
          <SearchBar
            onSearch={function (term: string): void {
              throw new Error('Function not implemented.');
            }}
            placeholder={'Buscar'}
          />
          <SolicitationButton
            onClick={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        </div>
        <div className="data-table">
          <PrintRequestsTable />
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

export default UserHome;
