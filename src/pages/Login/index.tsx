import './style.css';

import React from 'react';

interface LoginPgSet {
  onLogout: () => void;
}

const LoginPg: React.FC<LoginPgSet> = ({ onLogout }) => {
  return (
    <div className="container-background-l1">
      <div className="logoifce">
        <img src="src/assets/img/logo-ifce.svg" alt="IFCE" />
      </div>
      <div className="container-background-l2">
        <div className="container-background-l3">
          <header className="title">
            <span>Fazer login</span>
          </header>
          <header className="subtitle">
            <span>Bem vindo! Por favor, informe seus dados.</span>
          </header>

          <div className="inputEmail">
            <label htmlFor="email">Email</label>
            <br />
            <input type="text" name="email" id="email" placeholder="Digitre seu E-mail" />
          </div>

          <div className="inputSenha">
            <label htmlFor="Password">Senha</label>
            <br />
            <input type="text" name="Password" id="Password" placeholder="********" />
          </div>
          <button className="button-login">Login</button>
          <div className="resetPassword">
            <a href="esqueceu">Esqueceu sua senha?</a>
          </div>
          <div className="createAcc">
            <a href="cadastra">Não tem cadastro?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPg;
