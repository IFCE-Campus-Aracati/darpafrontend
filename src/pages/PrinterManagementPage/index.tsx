import './styles.css';

import DefaultPage from '../../components/DefaultPage';
import Pagination from '../../components/Pagination';
import PrinterDropdown from '../../components/PrinterDropdown';
import PrinterTable from '../../components/PrinterTable';

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
