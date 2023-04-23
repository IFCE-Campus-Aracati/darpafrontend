import './styles.css';

import { useState } from 'react';

interface SignUpFormProps {
  onConfirmation: (
    name: string,
    email: string,
    password: string,
    passwordConfirmation: string,
  ) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onConfirmation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onConfirmation(name, email, password, passwordConfirmation);
  };

  return (
    <section className="sign-up-form-container">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h2 className="sign-up-form-title">Novo Cadastro</h2>
        <label className="sign-up-form-name-input" htmlFor="name">
          Nome:
          <br />
          <input
            type="text"
            placeholder="Nome"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className="sign-up-form-email-input" htmlFor="email">
          E-mail:
          <br />
          <input
            type="email"
            placeholder="exemplo@exemplo.com"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="sign-up-form-password-input" htmlFor="user-password">
          Senha:
          <br />
          <input
            type="password"
            placeholder="●●●●●●●●"
            id="user-password"
            name="user-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label
          className="sign-up-form-password-confirmation-input"
          htmlFor="user-password-confirmation"
        >
          Confirmar senha:
          <br />
          <input
            type="password"
            placeholder="●●●●●●●●"
            id="user-password-confirmation"
            name="user-password-confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            required
          />
        </label>
        <button className="sign-up-form-submit-button" type="submit">
          Concluir
        </button>
        <p className="sign-up-form-sign-in-link">
          Já possui uma conta? <a href="/login">Faça login aqui</a>
        </p>
      </form>
    </section>
  );
};

export default SignUpForm;
