import './style.css';

import { useNavigate } from 'react-router-dom';

import SignUpForm from '../../components/SignUpForm';
import { register } from '../../services/auth.service';

const CreateAccountPage = () => {
  const navigate = useNavigate();

  return (
    <main className="sign-up-page">
      <section className="sign-up-image-container">
        <img className="sign-up-image" src="src/assets/img/logo-ifce.svg" alt="IFCE" />
      </section>
      <SignUpForm
        onConfirmation={(name, email, password, passwordConfirmation) => {
          register(name, '', email, password)
            .then(() => {
              window.alert('O cadastro foi bem sucedido');
              navigate('/login');
            })
            .catch(() => {
              window.alert('Erro ao tentar cadastro');
            });
        }}
      />
    </main>
  );
};

export default CreateAccountPage;
