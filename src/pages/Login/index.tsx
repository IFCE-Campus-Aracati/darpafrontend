import './style.css';

import React from 'react';
import logoIFCE from '../../assets/img/logo-ifce.svg'
import { Link } from 'react-router-dom';



interface LoginPgSet {
  onLogout: () => void;
}

const LoginForm: React.FC<LoginPgSet> = ({ onLogout }) => {
  return (
    <div className="container-background-l1">
      <div className="logoifce">
        <img src={logoIFCE} alt="IFCE" />
      </div>
      <div className="container-background-l2">
        <div className="container-background-l3">

          <h1 className="title">
            <span>Fazer login</span>
          </h1>
          <h2 className="subtitle">
            <span>Bem vindo! Por favor, informe seus dados.</span>
          </h2>


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
            {//<Link to="/esqueceu-senha">Esqueceu sua senha?</Link>
            }
           </div>
          <div className="createAcc">
            <a href="cadastra">Não tem cadastro?</a>
            {//<Link to="/CreateAccount">Esqueceu sua senha?</Link>
            }
          </div>
        </div>
      </div>
    </div>
  );
};


export default LoginForm;