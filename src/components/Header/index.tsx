import React from 'react';
import './styles.css';

interface HeaderProps {
  username: string;
}

const Header: React.FC<HeaderProps> = ({ username }) => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-button">
          <span className="menu-icon"></span>
        </button>
        <img src="src\assets\img\logoifce.png" alt="Logo ifce" className="logo" />
      </div>
      <div className="header-right">
        <div className="avatar">
          <span className="avatar-letter">{username[0]}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
