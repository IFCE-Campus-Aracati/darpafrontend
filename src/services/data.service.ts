export type UserDetails = {
  role: 'ROLE_USER' | 'ROLE_ADMIN' | 'ROLE_MANAGER';
  token: string;
  user: {
    firstName: string;
    lastName: string;
    email: string;
  };
};

export type AuthHeader = {
  Authorization: string;
};

export function authHeader(): AuthHeader | null {
  const user = localStorage.getItem('user');
  if (user) {
    const userDetails: UserDetails = JSON.parse(user);

    return { Authorization: 'Bearer ' + userDetails.token };
  }

  return null;
}
