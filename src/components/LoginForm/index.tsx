import './styles.css';

import { useState } from 'react';

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onLogin(email, password);
  };

  return (
    <section className="login-form-container">
      <form className="login-form" onSubmit={handleFormSubmit}>
        <h1 className="login-form-title">Fazer Login</h1>
        <h2 className="login-form-subtitle">Bem vindo! Por favor, informe seus dados.</h2>
        <label className="login-form-email-input">
          Email
          <br />
          <input
            type="email"
            placeholder="Digite seu E-mail"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <label className="login-form-password-input">
          Senha
          <br />
          <input
            type="password"
            placeholder="●●●●●●●●"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button className="login-form-submit-button" type="submit">
          Login
        </button>
        <p className="login-form-reset-password-link">
          <a href="/reset-password">Esqueceu sua senha?</a>
        </p>
        <p className="login-sign-up-link">
          Não tem cadastro? <a href="/sign-up">Cadastrar-se</a>
        </p>
      </form>
    </section>
  );
};

export default LoginForm;
