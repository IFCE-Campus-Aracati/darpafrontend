import './styles.css';

import React, { useState } from 'react';

import SidebarButton from '../SidebarButton';
import UserProfile from '../UserProfile';

interface SidebarProps {
  user: {
    name: string;
    photo: string;
    qualification: string;
  };
  isADM: boolean;
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ user, isADM, isOpen }) => {
  const [selectedButton, setSelectedButton] = useState<string>('');

  const handleButtonClick = (label: string) => {
    setSelectedButton(label);
  };

  return (
    <section className={`default-sidebar ${isOpen ? 'default-sidebar-open' : ''}`}>
      <UserProfile user={user} />
      <nav className="default-sidebar-nav">
        <SidebarButton
          icon="src\assets\option-icon.svg"
          label="Minhas solicitações"
          isSelected={selectedButton === 'Minhas solicitações'}
          sidebarButtonOnClick={() => handleButtonClick('Minhas solicitações')}
        />
        <SidebarButton
          icon="src\assets\option-icon.svg"
          label="Alterar senha"
          isSelected={selectedButton === 'Alterar senha'}
          sidebarButtonOnClick={() => handleButtonClick('Alterar senha')}
        />
        <SidebarButton
          icon="src\assets\option-icon.svg"
          label="Editar perfil"
          isSelected={selectedButton === 'Editar perfil'}
          sidebarButtonOnClick={() => handleButtonClick('Editar perfil')}
        />
        {isADM && (
          <>
            <SidebarButton
              icon="src\assets\option-icon.svg"
              label="Contas"
              isSelected={selectedButton === 'Contas'}
              sidebarButtonOnClick={() => handleButtonClick('Contas')}
            />
            <SidebarButton
              icon="src\assets\option-icon.svg"
              label="Agendamentos"
              isSelected={selectedButton === 'Agendamentos'}
              sidebarButtonOnClick={() => handleButtonClick('Agendamentos')}
            />
            <SidebarButton
              icon="src\assets\option-icon.svg"
              label="Estoques"
              isSelected={selectedButton === 'Estoques'}
              sidebarButtonOnClick={() => handleButtonClick('Estoques')}
            />
            <SidebarButton
              icon="src\assets\option-icon.svg"
              label="Impressoras"
              isSelected={selectedButton === 'Impressoras'}
              sidebarButtonOnClick={() => handleButtonClick('Impressoras')}
            />
          </>
        )}
      </nav>
    </section>
  );
};

export default Sidebar;
