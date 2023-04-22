import './styles.css';

import React from 'react';

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
  return (
    <section className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
      <UserProfile user={user} />
      <nav className="sidebar-nav">
        <SidebarButton
          icon="src\assets\option-icon.svg"
          label="Minhas solicitações"
          isSelected={false}
          sidebarButtonOnClick={() => console.log('sibebarButtonOnClick')}
        />
        <SidebarButton
          icon="src\assets\option-icon.svg"
          label="Alterar senha"
          isSelected={false}
          sidebarButtonOnClick={() => console.log('sibebarButtonOnClick')}
        />
        <SidebarButton
          icon="src\assets\option-icon.svg"
          label="Editar perfil"
          isSelected={false}
          sidebarButtonOnClick={() => console.log('sibebarButtonOnClick')}
        />
        {isADM && (
          <>
            <SidebarButton
              icon="src\assets\option-icon.svg"
              label="Contas"
              isSelected={false}
              sidebarButtonOnClick={() => console.log('sibebarButtonOnClick')}
            />
            <SidebarButton
              icon="src\assets\option-icon.svg"
              label="Agendamentos"
              isSelected={false}
              sidebarButtonOnClick={() => console.log('sibebarButtonOnClick')}
            />
            <SidebarButton
              icon="src\assets\option-icon.svg"
              label="Estoques"
              isSelected={true}
              sidebarButtonOnClick={() => console.log('sibebarButtonOnClick')}
            />
            <SidebarButton
              icon="src\assets\option-icon.svg"
              label="Impressoras"
              isSelected={false}
              sidebarButtonOnClick={() => console.log('sibebarButtonOnClick')}
            />
          </>
        )}
      </nav>
    </section>
  );
};

export default Sidebar;
