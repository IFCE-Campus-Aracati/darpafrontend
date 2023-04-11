import React from 'react';
import './styles.css';
import SidebarButton from '../SidebarButton';
import UserProfile from '../UserProfile';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
      <nav className="sidebar-nav">
            <UserProfile />
            <SidebarButton
              icon="src\assets\option-icon.svg"
              label="Minhas solicitações"
              isSelected={true}
              onClick={handleLinkClick}
            />
          <SidebarButton
              icon="src\assets\option-icon.svg"
              label="Alterar senha"
              isSelected={false}
              onClick={handleLinkClick}
            />
          <SidebarButton
              icon="src\assets\option-icon.svg"
              label="Editar perfil"
              isSelected={false}
              onClick={handleLinkClick}
            />
      
      </nav>
    </div>
  );
};

export default Sidebar;
