import './styles.css';

import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import userProfileImg from '../../assets/Vector.svg';
import { getCurrentUser, logout } from '../../services/auth.service';
import { UserDetails } from '../../services/data.service';
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
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  admin: false,
  qualifications: [],
};

const DefaultPage: React.FC<DefaultPageProps> = ({ children }) => {
  const navigate = useNavigate();

  const [shadowActive, setShadow] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserDetails | null>(null);

  const toggleSideBar = () => {
    setShadow(!shadowActive);
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const userDetails = getCurrentUser();
    if (!userDetails) {
      navigate('/login');
    } else {
      setCurrentUser(userDetails);

      user.firstName = userDetails.user.firstName;
      user.lastName = userDetails.user.lastName;
      user.email = userDetails.user.email;
      user.admin = userDetails.role === 'ROLE_ADMIN';
      user.username = userDetails.user.email;
      user.qualifications = [userDetails.role.replace('ROLE_', '').toLowerCase()];
    }
  }, []);

  return (
    <div className="page">
      <Header
        username={user.username}
        onLogout={() => {
          logout();
          navigate('/login');
        }}
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
