import './styles.css';

import { useEffect, useState } from 'react';

import DefaultPage from '../../components/DefaultPage';
import Pagination from '../../components/Pagination';
import ScheduleForm from '../../components/ScheduleForm';
import SearchBar from '../../components/SearchBar';
import SolicitationButton from '../../components/SolicitationButton';
import UserRequestsTable, {
  UserRequestsTableDataProps,
} from '../../components/UserRequestsTable';
import { getPrintRequests, newPrintRequest, Page } from '../../services/request';

function UserHome() {
  const [page, setPage] = useState(0);
  const [requests, setRequests] = useState<Page<UserRequestsTableDataProps>>({
    totalItems: 0,
    items: [],
    totalPages: 0,
    currentPage: 0,
  });

  const [showForm, setShowForm] = useState(false);

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
        <SolicitationButton onClick={() => setShowForm(true)} />
      </section>
      <UserRequestsTable
        header={['ID', 'Nome', 'Data', 'Descrição', 'Status', 'Ação']}
        data={requests.items}
      />
      {requests.totalPages > 1 && (
        <Pagination
          totalItems={requests.totalItems}
          totalPages={requests.totalPages}
          currentPage={requests.currentPage}
          onPageChange={(pageNumer) => setPage(pageNumer)}
        />
      )}

      {showForm && (
        <ScheduleForm
          onSubmit={(s) => {
            (async () => {
              await newPrintRequest(s).finally(() => setShowForm(false));
            })();
          }}
          onCancel={() => setShowForm(false)}
        />
      )}
    </DefaultPage>
  );
}

export default UserHome;
