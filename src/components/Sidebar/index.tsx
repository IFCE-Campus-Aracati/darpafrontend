import './styles.css';

import React from 'react';

import SidebarButton from '../SidebarButton';
import UserProfile from '../UserProfile';

interface SidebarProps {
  isOpen: boolean;
  isADM: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isADM, isOpen, onClose }) => {
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
          isSelected={false}
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
        {isADM && (
          <>
            <SidebarButton
              icon="src\assets\option-icon.svg"
              label="Contas"
              isSelected={false}
              onClick={handleLinkClick}
            />
            <SidebarButton
              icon="src\assets\option-icon.svg"
              label="Agendamentos"
              isSelected={false}
              onClick={handleLinkClick}
            />
            <SidebarButton
              icon="src\assets\option-icon.svg"
              label="Estoques"
              isSelected={true}
              onClick={handleLinkClick}
            />
            <SidebarButton
              icon="src\assets\option-icon.svg"
              label="Impressoras"
              isSelected={false}
              onClick={handleLinkClick}
            />
          </>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
