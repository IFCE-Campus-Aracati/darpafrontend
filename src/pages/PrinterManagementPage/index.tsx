import './styles.css';

import { useEffect, useState } from 'react';

import DefaultPage from '../../components/DefaultPage';
import Pagination from '../../components/Pagination';
import PrinterDropdown from '../../components/PrinterDropdown';
import PrinterTable, {
  PrinterTableData,
  PrinterTableDataProps,
} from '../../components/PrinterTable';

interface PrinterManagementData {
  id: number;
  identification: string;
  queue: PrinterTableDataProps;
}

const printers: PrinterManagementData[] = [
  {
    id: 1,
    identification: 'Impressora 1',
    queue: {
      header: ['ID', 'Nome', 'Dono', 'Tipo de perfil', 'Descrição', 'Ordenar/Excluir'],
      data: [
        {
          id: 1,
          name: 'Action Figure',
          owner: 'Hudson',
          role: 'Bolsista',
          description: 'Impressão em Abs preto',
        },
        {
          id: 2,
          name: 'Troféu',
          owner: 'Reperkilson',
          role: 'Aluno',
          description: 'Troféu para torneio de CS',
        },
        {
          id: 3,
          name: 'Miniatura-Batman',
          owner: 'Oslo',
          role: 'Aluno',
          description: 'Impressão em Abs preto',
        },
        {
          id: 4,
          name: 'Suporte para celular',
          owner: 'Matias',
          role: 'ADM',
          description: 'Impressão em Abs verde',
        },
      ],
    },
  },
  {
    id: 2,
    identification: 'Impressora 2',
    queue: {
      header: ['ID', 'Nome', 'Dono', 'Tipo de perfil', 'Descrição', 'Ordenar/Excluir'],
      data: [
        {
          id: 5,
          name: 'Action Figure',
          owner: 'Hudson',
          role: 'Bolsista',
          description: 'Impressão em Abs preto',
        },
        {
          id: 6,
          name: 'Troféu',
          owner: 'Reperkilson',
          role: 'Aluno',
          description: 'Troféu para torneio de CS',
        },
        {
          id: 7,
          name: 'Miniatura-Batman',
          owner: 'Oslo',
          role: 'Aluno',
          description: 'Impressão em Abs preto',
        },
        {
          id: 8,
          name: 'Suporte para celular',
          owner: 'Matias',
          role: 'ADM',
          description: 'Impressão em Abs verde',
        },
      ],
    },
  },
  {
    id: 3,
    identification: 'Impressora 3',
    queue: {
      header: ['ID', 'Nome', 'Dono', 'Tipo de perfil', 'Descrição', 'Ordenar/Excluir'],
      data: [
        {
          id: 9,
          name: 'Action Figure',
          owner: 'Hudson',
          role: 'Bolsista',
          description: 'Impressão em Abs preto',
        },
        {
          id: 10,
          name: 'Troféu',
          owner: 'Reperkilson',
          role: 'Aluno',
          description: 'Troféu para torneio de CS',
        },
        {
          id: 11,
          name: 'Miniatura-Batman',
          owner: 'Oslo',
          role: 'Aluno',
          description: 'Impressão em Abs preto',
        },
        {
          id: 12,
          name: 'Suporte para celular',
          owner: 'Matias',
          role: 'ADM',
          description: 'Impressão em Abs verde',
        },
      ],
    },
  },
];

function PrinterManagementPage() {
  const [selectedPrinter, setSelectedPrinter] = useState<PrinterManagementData>(
    {} as PrinterManagementData,
  );
  const [selectedPrinterTableHeader, setSelectedPrinterTableHeader] = useState<string[]>(
    [],
  );
  const [selectedPrinterTableData, setSelectedPrinterTableData] = useState<
    PrinterTableData[]
  >([]);

  const fetchPrinterManagementData = (identification: string) => {
    const ifExists = printers.find(
      (printer) => printer.identification === identification,
    );

    setSelectedPrinter(ifExists ?? ({} as PrinterManagementData));
    setSelectedPrinterTableHeader(ifExists?.queue?.header ?? []);
    setSelectedPrinterTableData(ifExists?.queue?.data ?? []);
  };

  useEffect(() => {
    setSelectedPrinter(printers[0]);
    setSelectedPrinterTableHeader(printers[0].queue.header);
    setSelectedPrinterTableData(printers[0].queue.data);
  }, []);

  return (
    <DefaultPage>
      <section className="printer-page-title">
        <h1>Gerenciamento de Impressões</h1>
      </section>
      <section className="printer-page-content-actions">
        <h2 className="selected-printer-name">{selectedPrinter.identification}</h2>
        <PrinterDropdown
          printers={printers.map((printer) => printer.identification)}
          onSelected={(selectedPrinterName) => {
            fetchPrinterManagementData(selectedPrinterName);
          }}
        />
      </section>
      <PrinterTable header={selectedPrinterTableHeader} data={selectedPrinterTableData} />
      <Pagination
        totalItems={10}
        itemsPerPage={5}
        currentPage={0}
        onPageChange={(page) => console.log(page)}
      />
    </DefaultPage>
  );
}

export default PrinterManagementPage;
