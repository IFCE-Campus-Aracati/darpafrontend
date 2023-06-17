import './style.css';

import { useNavigate } from 'react-router-dom';

import LoginForm from '../../components/LoginForm';
import { login } from '../../services/auth.service';

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <main className="login-page">
      <LoginForm
        onLogin={async (email, password) => {
          await login(email, password).then(() => {
            navigate('/');
          });
        }}
      />
      <section className="login-image-container">
        <img className="login-image" src="src/assets/img/logo-ifce.svg" alt="IFCE" />
      </section>
    </main>
  );
};

export default LoginPage;
