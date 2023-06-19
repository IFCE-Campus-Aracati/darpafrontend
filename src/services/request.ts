import axios from 'axios';

import { Schedule } from '../components/ScheduleForm';
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

  return client.post(
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
  );
}
