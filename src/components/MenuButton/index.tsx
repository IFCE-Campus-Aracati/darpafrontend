import React from 'react';
import './styles.css';

interface MenuButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const MenuButton: React.FC<MenuButtonProps> = ({ onClick, isOpen }) => {
  return (
    <button className="menu-button" onClick={onClick}>
      {isOpen ? (
        <img src="src\assets\menu-icon.svg" alt=" menu" />
      ) : (
        <img src="src\assets\menu-icon.svg" alt=" menu" />
      )}
    </button>
  );
};

export default MenuButton;
