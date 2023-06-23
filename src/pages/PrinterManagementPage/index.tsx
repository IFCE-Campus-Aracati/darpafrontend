import './styles.css';

import { useEffect, useState } from 'react';

import DefaultPage from '../../components/DefaultPage';
import Pagination from '../../components/Pagination';
import PrinterDropdown from '../../components/PrinterDropdown';
import PrinterTable, { PrinterTableData } from '../../components/PrinterTable';
import { getPrinterQueue, getPrinters, Page } from '../../services/request';

function PrinterManagementPage() {
  const [page, setPage] = useState(0);
  const [printerNames, setPrinterNames] = useState<Page<{ id: number; name: string }>>({
    totalItems: 0,
    items: [],
    totalPages: 0,
    currentPage: 0,
  });

  const [selectedPrinter, setSelectedPrinter] = useState<string>('');
  const [selectedPrinterDetails, setSelectedPrinterDetails] = useState<
    Page<PrinterTableData>
  >({ totalItems: 0, items: [], totalPages: 0, currentPage: 0 });

  const fetchPrinterManagementData = async (name: string) => {
    const printerName = printerNames.items.find((printer) => printer.name === name);

    if (printerName) {
      const details = await getPrinterQueue(printerName.name, page);
      setSelectedPrinterDetails(details);
      setSelectedPrinter(printerName.name);
    }
  };

  useEffect(() => {
    (async (page: number) => {
      const results = await getPrinters(page);
      setPrinterNames(results);

      const firstPrinter = results.items[0].name;
      const firstPrinterDetails = await getPrinterQueue(firstPrinter, page);

      setSelectedPrinter(firstPrinter);
      setSelectedPrinterDetails(firstPrinterDetails);
    })(page);
  }, []);

  useEffect(() => {
    (async (page: number) => {
      const firstPrinterDetails = await getPrinterQueue(selectedPrinter, page);
      setSelectedPrinterDetails(firstPrinterDetails);
    })(page);
  }, [page]);

  return (
    <DefaultPage>
      <section className="printer-page-title">
        <h1>Gerenciamento de Impressões</h1>
      </section>
      <section className="printer-page-content-actions">
        <h2 className="selected-printer-name">{selectedPrinter}</h2>
        <PrinterDropdown
          printers={printerNames.items.map((printer) => printer.name)}
          onSelected={(selectedPrinterName) => {
            fetchPrinterManagementData(selectedPrinterName);
          }}
        />
      </section>
      <PrinterTable
        header={['ID', 'Nome', 'Dono', 'Tipo de perfil', 'Descrição', 'Ordenar/Excluir']}
        data={selectedPrinterDetails.items}
      />
      <Pagination
        totalItems={selectedPrinterDetails.totalItems}
        totalPages={selectedPrinterDetails.totalPages}
        currentPage={selectedPrinterDetails.currentPage}
        onPageChange={(pageNumber) => setPage(pageNumber)}
      />
    </DefaultPage>
  );
}

export default PrinterManagementPage;
