import { Route, Routes } from 'react-router-dom';

import CreateAccountPage from './pages/CreateAccount';
import InventoryPage from './pages/InventoryPage';
import LoginPage from './pages/Login';
import NotFound from './pages/NotFound';
import PrinterManagementPage from './pages/PrinterManagementPage';
import UserHome from './pages/UserHome';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cadastro" element={<CreateAccountPage />} />
      <Route path="/" element={<UserHome />} />
      <Route path="/estoque" element={<InventoryPage />} />
      <Route path="/impressoras" element={<PrinterManagementPage />} />
    </Routes>
  );
};

export default AppRoutes;
