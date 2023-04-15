import './styles.css';

import React, { useState } from 'react';

function UserProfile() {
  const [user, setUser] = useState({
    name: 'Reperkilson',
    photo: 'https://via.placeholder.com/150',
    qualification: 'Aluno, Bolsista',
  });

  return (
    <div className="user-profile">
      <img src="src\assets\Vector.svg" alt="Foto do usuário" />
      <h2>{user.name}</h2>
      <p>{user.qualification}</p>
    </div>
  );
}

export default UserProfile;
