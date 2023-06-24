import './styles.css';

import { useEffect, useState } from 'react';

import DefaultPage from '../../components/DefaultPage';
import Pagination from '../../components/Pagination';
import SearchBar from '../../components/SearchBar';
import UserDetailsTable, {
  UserDetailsTableDataProps,
} from '../../components/UserDetailsTable';
import { getUsers, Page } from '../../services/request';

function UserManagement() {
  const [page, setPage] = useState(0);
  const [users, setUsers] = useState<Page<UserDetailsTableDataProps>>({
    totalItems: 0,
    items: [],
    totalPages: 0,
    currentPage: 0,
  });

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    (async (page: number) => {
      const results = await getUsers(page);
      setUsers(results);
    })(page);
  }, [page]);

  return (
    <DefaultPage>
      <section className="home-page-title">
        <h1>Usuários Cadastrados</h1>
      </section>
      <section className="home-page-content-actions">
        <SearchBar
          onSearch={(term) => console.log(term)}
          placeholder={'Buscar'}
          wsize={400}
        />
      </section>
      <UserDetailsTable
        header={['ID', 'Nome', 'Email', 'Tipo de Perfil']}
        data={users.items}
      />
      {users.totalPages > 1 && (
        <Pagination
          totalItems={users.totalItems}
          totalPages={users.totalPages}
          currentPage={users.currentPage}
          onPageChange={(pageNumer) => setPage(pageNumer)}
        />
      )}
    </DefaultPage>
  );
}

export default UserManagement;
