import './styles.css';

import DefaultPage from '../../components/DefaultPage';
import InventoryTable, { InventoryTableProps } from '../../components/InventoryTable';
import Pagination from '../../components/Pagination';
import RegisterProductButton from '../../components/RegisterProductButton';
import SearchBar from '../../components/SearchBar';

const printRequests: InventoryTableProps = {
  header: ['ID', 'Produto', 'Descrição', 'Estoque'],
  data: [
    {
      id: 1,
      product: 'Filamento ABS',
      description: 'Filamento ABS Premium para impressora 3D 500g 1,7mm (Branco Gesso)',
      amount: 10,
    },
    {
      id: 2,
      product: 'Filamento PLA',
      description: 'Filamento PLA Premium para Impressora 3D 1,75mm 1kg(Preto)',
      amount: 10,
    },
    {
      id: 3,
      product: 'Placa MDF',
      description: 'MDF cru 3mm (verde)',
      amount: 10,
    },
  ],
};

function InventoryPage() {
  return (
    <DefaultPage>
      <section className="inventory-page-content-actions">
        <SearchBar
          onSearch={(term) => console.log(term)}
          placeholder={'Buscar Produto'}
          wsize={400}
        />
        <RegisterProductButton
          onClick={() => console.log('clickRegisterProductButton')}
        />
      </section>
      <InventoryTable header={printRequests.header} data={printRequests.data} />
      <Pagination
        totalItems={10}
        itemsPerPage={5}
        currentPage={0}
        onPageChange={(pageNumer) => console.log(`pageNumber: ${pageNumer}`)}
      />
    </DefaultPage>
  );
}

export default InventoryPage;
