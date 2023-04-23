import './styles.css';

import React from 'react';

interface UserProfileProps {
  user: {
    name: string;
    photo: string;
    qualification: string;
  };
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <section className="user-profile">
      <img src={user.photo} alt="Foto do usuário" />
      <h2>{user.name}</h2>
      <p>{user.qualification}</p>
    </section>
  );
};

export default UserProfile;
