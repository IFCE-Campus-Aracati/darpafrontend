import './styles.css';

import React, { useState } from 'react';

import userProfileimg from '../../assets/Vector.svg';

function UserProfile() {
  const [user, setUser] = useState({
    name: 'Reperkilson',
    photo: userProfileimg,
    qualification: 'Aluno, Bolsista',
  });

  return (
    <div className="user-profile">
      <img src={user.photo} alt="Foto do usuário" />
      <h2>{user.name}</h2>
      <p>{user.qualification}</p>
    </div>
  );
}

export default UserProfile;
