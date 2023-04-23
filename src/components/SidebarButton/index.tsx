import './styles.css';

import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarButtonProps {
  icon: string;
  label: string;
  isSelected: boolean;
  sidebarButtonOnClick: () => void;
  navigateTo: string;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({
  icon,
  label,
  isSelected,
  sidebarButtonOnClick,
  navigateTo,
}) => {
  return (
    <button
      className={isSelected ? 'sidebar-button-selected' : 'sidebar-button'}
      onClick={sidebarButtonOnClick}
    >
      <img className="sidebar-button-icon" src={icon} alt="Page icon" />
      <Link
        className={isSelected ? 'sidebar-button-label-selected' : 'sidebar-button-label'}
        to={navigateTo}
        replace={true}
      >
        {label}
      </Link>
      {isSelected ? null : (
        <img
          className="sidebar-button-arrow"
          src="src\assets\arrow.svg"
          alt="Arrow icon"
        />
      )}
    </button>
  );
};

export default SidebarButton;
