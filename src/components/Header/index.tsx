import './styles.css';

import React, { useState } from 'react';

import Avatar from '../Avatar';
import Menu from '../Menu';
import MenuButton from '../MenuButton';

interface HeaderProps {
  username: string;
  onLogout: () => void;
  menuButtonAction: () => void; // hack para desacoplar a barra lateral
}

const Header: React.FC<HeaderProps> = ({ username, onLogout, menuButtonAction }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleAvatarClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuButtonClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
    menuButtonAction();
  };

  return (
    <header className="header">
      <div className="header-left">
        <MenuButton onClick={handleMenuButtonClick} isOpen={isSidebarOpen} />
        <img src="src\assets\img\logoifce.png" alt="Logo ifce" className="logo" />
      </div>
      <div className="header-right">
        {/* TODO: simplificar essa lógica */}
        <Avatar username={username} clickAction={handleAvatarClick} />
        {isMenuOpen && <Menu onLogout={onLogout} />}
      </div>
    </header>
  );
};

export default Header;
