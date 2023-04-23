import './styles.css';

import React, { useState } from 'react';

interface MenuProps {
  onLogout: () => void;
}

const Menu: React.FC<MenuProps> = ({ onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoutClick = () => {
    onLogout();
    setIsOpen(false);
  };

  return (
    <nav className={isOpen ? 'avatar-menu-open' : 'avatar-menu'}>
      <button className="avatar-menu-button">
        <img
          className="avatar-menu-button-icon"
          src="src\assets\iconmonstr-user-2 1.svg"
          alt="userIcon"
        />
        <span className="avatar-menu-button-text">Meu Perfil</span>
      </button>
      <button className="avatar-menu-button" onClick={handleLogoutClick}>
        <img
          className="avatar-menu-button-icon"
          src="src\assets\img\logout.svg"
          alt="logoutIcon"
        />
        <span className="avatar-menu-button-text">Sair</span>
      </button>
    </nav>
  );
};

export default Menu;
