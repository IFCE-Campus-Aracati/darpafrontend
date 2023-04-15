/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './styles.css';

import React, { useState } from 'react';

interface MenuProps {
  onLogout: () => void;
}

const Menu: React.FC<MenuProps> = ({ onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAvatarClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLogoutClick = () => {
    onLogout();
    setIsOpen(false);
  };

  return (
    <div className={`menu1 ${isOpen ? 'menu1-open' : ''}`}>
      <div className="menu1-item">
        <img src="src\assets\iconmonstr-user-2 1.svg" alt="userIcon" />
        <span className="menu1-text"> Meu Perfil</span>
      </div>
      <div className="menu1-item" onClick={handleLogoutClick}>
        <img src="src\assets\img\logout.svg" alt="logoutIcon" />
        <span className="menu1-text"> Sair</span>
      </div>
    </div>
  );
};

export default Menu;
