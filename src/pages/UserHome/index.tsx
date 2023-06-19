import './styles.css';

import { useEffect, useState } from 'react';

import DefaultPage from '../../components/DefaultPage';
import Pagination from '../../components/Pagination';
import SearchBar from '../../components/SearchBar';
import SolicitationButton from '../../components/SolicitationButton';
import UserRequestsTable from '../../components/UserRequestsTable';
import { getPrintRequests, PageOfRequests } from '../../services/request';

function UserHome() {
  const [page, setPage] = useState(0);
  const [requests, setRequests] = useState<PageOfRequests>({
    totalItems: 0,
    requests: [],
    totalPages: 0,
    currentPage: 0,
  });

  useEffect(() => {
    (async (page: number) => {
      const results = await getPrintRequests(page);
      setRequests(results);
    })(page);
  }, [page]);

  return (
    <DefaultPage>
      <section className="home-page-title">
        <h1>Minhas solicitações</h1>
      </section>
      <section className="home-page-content-actions">
        <SearchBar
          onSearch={(term) => console.log(term)}
          placeholder={'Buscar'}
          wsize={400}
        />
        <SolicitationButton onClick={() => console.log('SolicitationButton')} />
      </section>
      <UserRequestsTable
        header={['ID', 'Nome', 'Data', 'Descrição', 'Status', 'Ação']}
        data={requests?.requests ?? []}
      />
      {requests.totalPages > 1 && (
        <Pagination
          totalItems={requests.totalItems}
          totalPages={requests.totalPages}
          currentPage={requests.currentPage}
          onPageChange={(pageNumer) => setPage(pageNumer)}
        />
      )}
    </DefaultPage>
  );
}

export default UserHome;
