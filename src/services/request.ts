import axios from 'axios';

import { InventoryTableDataProps } from '../components/InventoryTable';
import { PrinterTableData } from '../components/PrinterTable';
import { Schedule } from '../components/ScheduleForm';
import { UserRequestsTableDataProps } from '../components/UserRequestsTable';
import { authHeader } from './data.service';

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export type Page<T> = {
  totalItems: number;
  items: T[];
  totalPages: number;
  currentPage: number;
};

export async function getPrintRequests(
  page: number,
): Promise<Page<UserRequestsTableDataProps>> {
  const auth = authHeader();
  if (!auth) {
    return Promise.reject();
  }

  return client
    .get('/api/v1/requests', { headers: auth, params: { page, size: 5 } })
    .then((res) => {
      const { totalItems, requests, totalPages, currentPage } = res.data;
      return { totalItems, items: requests, totalPages, currentPage };
    });
}

export async function getProducts(page: number): Promise<Page<InventoryTableDataProps>> {
  const auth = authHeader();
  if (!auth) {
    return Promise.reject();
  }

  return client
    .get('/api/v1/products', { headers: auth, params: { page, size: 5 } })
    .then((res) => {
      const { totalItems, products, totalPages, currentPage } = res.data;
      return { totalItems, items: products, totalPages, currentPage };
    });
}

export async function getPrinters(
  page: number,
): Promise<Page<{ id: number; name: string }>> {
  const auth = authHeader();
  if (!auth) {
    return Promise.reject();
  }

  return client
    .get('/api/v1/printers', { headers: auth, params: { page, size: 5 } })
    .then((res) => {
      const { totalItems, printers, totalPages, currentPage } = res.data;
      return { totalItems, items: printers, totalPages, currentPage };
    });
}

export async function getPrinterQueue(
  name: string,
  page: number,
): Promise<Page<PrinterTableData>> {
  const auth = authHeader();
  if (!auth) {
    return Promise.reject();
  }

  return client
    .get('/api/v1/printers/queue', { headers: auth, params: { name, page, size: 5 } })
    .then((res) => {
      const { totalItems, jobs, totalPages, currentPage } = res.data;
      return { totalItems, items: jobs, totalPages, currentPage };
    });
}

export type ScheduleResult = {
  printRequestId: number;
  userId: number;
  status: string;
};

export async function newPrintRequest(schedule: Schedule): Promise<ScheduleResult> {
  const auth = authHeader();
  if (!auth) {
    return Promise.reject();
  }

  return client
    .post(
      '/api/v1/requests',
      {
        description: schedule.description,
        file: schedule.file,
        name: schedule.file?.name.split('.')[0],
        date: schedule.date.toISOString().substring(0, 10),
      },
      {
        headers: {
          Authorization: auth.Authorization,
          'Content-Type': 'multipart/form-data',
        },
      },
    )
    .then((res) => res.data);
}
