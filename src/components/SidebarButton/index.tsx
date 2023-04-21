import './styles.css';

import React from 'react';

interface SidebarButtonProps {
  icon: string;
  label: string;
  isSelected: boolean;
  sidebarButtonOnClick: () => void;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({
  icon,
  label,
  isSelected,
  sidebarButtonOnClick,
}) => {
  return (
    <button
      className={isSelected ? 'sidebar-button-selected' : 'sidebar-button'}
      onClick={sidebarButtonOnClick}
    >
      <img className="sidebar-button-icon" src={icon} alt="Page icon" />
      <p
        className={isSelected ? 'sidebar-button-label-selected' : 'sidebar-button-label'}
      >
        {label}
      </p>
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
