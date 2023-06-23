import './styles.css';

import { useEffect, useState } from 'react';

import DefaultPage from '../../components/DefaultPage';
import InventoryTable, { InventoryTableDataProps } from '../../components/InventoryTable';
import Pagination from '../../components/Pagination';
import RegisterProductButton from '../../components/RegisterProductButton';
import SearchBar from '../../components/SearchBar';
import { getProducts, Page } from '../../services/request';

function InventoryPage() {
  const [page, setPage] = useState(0);
  const [products, setProducts] = useState<Page<InventoryTableDataProps>>({
    totalItems: 0,
    items: [],
    totalPages: 0,
    currentPage: 0,
  });

  useEffect(() => {
    (async (page: number) => {
      const results = await getProducts(page);
      setProducts(results);
    })(page);
  }, [page]);

  return (
    <DefaultPage>
      <section className="inventory-page-title">
        <h1>Estoque de produtos</h1>
      </section>
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
      <InventoryTable
        header={['ID', 'Produto', 'Descrição', 'Estoque']}
        data={products.items}
      />
      <Pagination
        totalItems={products.totalItems}
        totalPages={products.totalPages}
        currentPage={products.currentPage}
        onPageChange={(pageNumer) => setPage(pageNumer)}
      />
    </DefaultPage>
  );
}

export default InventoryPage;
