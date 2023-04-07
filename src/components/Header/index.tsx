import React, { useState } from 'react';
import './styles.css';
import MenuButton from '../MenuButton';
import Avatar from '../Avatar';
import Menu from '../Menu';

interface HeaderProps {
  username: string;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ username, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleAvatarClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-left">
        <MenuButton />
        <img src="src\assets\img\logoifce.png" alt="Logo ifce" className="logo" />
      </div>
      <div className="header-right">
        <Avatar username={username} onClick={handleAvatarClick} />
        {isMenuOpen && <Menu onLogout={onLogout} />}
      </div>
    </header>
  );
};

export default Header;
