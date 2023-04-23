import './styles.css';

import DefaultPage from '../../components/DefaultPage';
import Pagination from '../../components/Pagination';
import PrintRequestsTable, { PrintRequestsTableProps } from '../../components/PrintTable';
import SearchBar from '../../components/SearchBar';
import SolicitationButton from '../../components/SolicitationButton';

const printRequests: PrintRequestsTableProps = {
  header: ['ID', 'Nome', 'Data', 'Tipo', 'Descrição', 'Status', 'Ação'],
  data: [
    {
      id: 1,
      name: 'Action Figure',
      date: new Date('01/04/2022'),
      type: 'Impressão 3D',
      description: 'Impressão em Abs preto',
      status: 'PENDENTE',
    },
    {
      id: 2,
      name: 'Trófeu',
      date: new Date('03/04/2022'),
      type: 'Corte a Laser',
      description: 'Corte em MDF 3mm',
      status: 'APROVADO',
    },
    {
      id: 3,
      name: 'Miniatura Bolsonaro',
      date: new Date('05/04/2022'),
      type: 'Impressão 3D',
      description: 'Busto do mito em PLA vermelho',
      status: 'REPROVADO',
    },
    {
      id: 4,
      name: 'Miniatura Lula',
      date: new Date('07/04/2022'),
      type: 'Impressão 3D',
      description: 'Busto do Lula em PLA Azul',
      status: 'CONCLUIDO',
    },
  ],
};

function UserHome() {
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
      <PrintRequestsTable header={printRequests.header} data={printRequests.data} />
      <Pagination
        totalItems={10}
        itemsPerPage={5}
        currentPage={0}
        onPageChange={(pageNumer) => console.log(`pageNumber: ${pageNumer}`)}
      />
    </DefaultPage>
  );
}

export default UserHome;
