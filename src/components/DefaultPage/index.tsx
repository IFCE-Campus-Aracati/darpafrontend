import './styles.css';

import React, { useState } from 'react';

import userProfileImg from '../../assets/Vector.svg';
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';

interface DefaultPageProps {
  children?: React.ReactNode;
}

const user: {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  admin: boolean;
  qualifications: string[];
} = {
  firstName: 'John',
  lastName: 'Doe',
  username: 'johndoe',
  email: 'johnr@email.com',
  admin: true,
  qualifications: ['Professor', 'Administrador'],
};

const DefaultPage: React.FC<DefaultPageProps> = ({ children }) => {
  const [shadowActive, setShadow] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSideBar = () => {
    setShadow(!shadowActive);
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="page">
      <Header
        username={user.username}
        onLogout={() => console.log('onLogout')}
        menuButtonAction={() => toggleSideBar()}
      />
      <Sidebar
        isOpen={isSidebarOpen}
        isADM={user.admin}
        user={{
          name: user.firstName + ' ' + user.lastName,
          photo: userProfileImg,
          qualification: user.qualifications.join(', '),
        }}
      />
      <main className="page-content">{children}</main>
      <Footer style={{ gridRow: '4 / -1' }} />
    </div>
  );
};

export default DefaultPage;
