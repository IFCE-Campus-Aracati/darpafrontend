import './style.css';
import React from 'react';
import close from '../../assets/close-white.svg'

const PassRecovery: React.FC = ({ }) => {
    return (
        <div className="background">
            <div className="box">
                <div className="header">
                    <header>Esqueceu a senha?  Sem problemas!</header>
                    <img src={close} alt="FECHAR"/>
                </div>
                <span>Insira o endereço de e-mail associado à sua conta Darpa.</span>
                <div className="input-background">
                    <div className="input-email">
                        <label htmlFor="email">Seu endereço de e-mail</label>
                        <br />
                        <input type="text" name="email" id="email" placeholder="Digitre seu E-mail" />
                    </div>
                </div>
                <button className="button-confirm">Comfirmar</button>
            </div>
        </div>
    );
}

export default PassRecovery