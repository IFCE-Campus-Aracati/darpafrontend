import React from 'react';
import './styles.css';

interface SidebarButtonProps {
  icon: string;
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ icon, label, isSelected, onClick }) => {
  return (
    <button className={`sidebar-button ${isSelected ? 'selected' : ''}`} onClick={onClick}>
      <div className="sidebar-button-icon">
        <img src={icon} alt="Page icon" />
      </div>
      <div className="sidebar-button-label">
        <span>{label}</span>
        {isSelected ? null : <img className='sidebar-button-arrow' src="src\assets\arrow.svg" alt="Arrow icon" />}
      </div>
    </button>
  );
};

export default SidebarButton;
