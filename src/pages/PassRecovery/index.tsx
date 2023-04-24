import './style.css';

import React from 'react';

import close from '../../assets/close-white.svg';

const PassRecovery: React.FC = () => {
  return (
    <main className="password-recovery-page">
      <section className="password-recovery-container">
        <div className="password-recovery-title-container">
          <header className="password-recovery-header">
            <h1>Esqueceu a senha? Sem problemas!</h1>
            <img src={close} alt="FECHAR" />
          </header>
        </div>
        <div className="password-recovery-body-container">
          <span className="password-recovery-message">
            Insira o endereço de e-mail associado à sua conta.
          </span>
          <div className="password-recovery-input-container">
            <div className="password-recovery-input-email">
              <label htmlFor="email">Seu endereço de e-mail</label>
              <br />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Digite seu E-mail"
              />
            </div>
          </div>
          <button className="password-recovery-button-confirm">Confirmar</button>
        </div>
      </section>
    </main>
  );
};

export default PassRecovery;
