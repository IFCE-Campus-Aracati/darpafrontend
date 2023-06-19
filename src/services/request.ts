import axios from 'axios';

import { UserRequestsTableDataProps } from '../components/UserRequestsTable';
import { authHeader } from './data.service';

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export type PageOfRequests = {
  totalItems: number;
  requests: UserRequestsTableDataProps[];
  totalPages: number;
  currentPage: number;
};

export async function getPrintRequests(page: number): Promise<PageOfRequests> {
  const auth = authHeader();
  if (!auth) {
    return Promise.reject();
  }

  return client
    .get('/api/v1/requests', { headers: auth, params: { page, size: 5 } })
    .then((res) => {
      return res.data;
    });
}
