import axios from 'axios';

import { UserDetails } from './data.service';

const API = import.meta.env.VITE_API_URL;

export async function login(email: string, password: string): Promise<UserDetails> {
  const authResouce = API + '/api/v1/auth/authenticate';

  return axios
    .post(authResouce, {
      email,
      password,
    })
    .then((response) => {
      if (response.data?.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }

      return response.data;
    });
}

export function logout() {
  localStorage.removeItem('user');
}

export function register(
  firstName: string,
  lastName: string,
  email: string,
  password: string,
) {
  const registerResouce = API + '/api/v1/auth/register';

  return axios
    .post(registerResouce, {
      firstName,
      lastName,
      email,
      password,
    })
    .then((reponse) => {
      if (reponse.status !== 200) {
        console.log('error');
      }
    });
}

export function getCurrentUser(): UserDetails | null {
  const user = localStorage.getItem('user');
  if (user) {
    return JSON.parse(user);
  }

  return null;
}
